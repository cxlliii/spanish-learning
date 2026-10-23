import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import type { BetaContentBlockParam, BetaMessageParam } from "@anthropic-ai/sdk/resources/beta/messages/messages";
import type { z } from "zod/v4";

// Server-side fallback: if a request is declined by a safety classifier, the API
// re-runs it on Anthropic's recommended fallback model instead of failing.
const BETAS = ["server-side-fallback-2026-07-01"];

export type Effort = "low" | "medium" | "high";

export interface ClaudeConfig {
  apiKey: string;
  model: string;
}

function client(cfg: ClaudeConfig): Anthropic {
  // The key never leaves the browser except to api.anthropic.com – this is a personal, local-only app.
  return new Anthropic({ apiKey: cfg.apiKey, dangerouslyAllowBrowser: true });
}

export class ClaudeError extends Error {}

function friendlyError(err: unknown): Error {
  if (err instanceof ClaudeError) return err;
  if (err instanceof Anthropic.AuthenticationError) return new ClaudeError("Der API-Schlüssel ist ungültig. Bitte in den Einstellungen prüfen.");
  if (err instanceof Anthropic.PermissionDeniedError) return new ClaudeError("Der API-Schlüssel hat keinen Zugriff auf dieses Modell.");
  if (err instanceof Anthropic.RateLimitError) return new ClaudeError("Zu viele Anfragen – bitte kurz warten und erneut versuchen.");
  if (err instanceof Anthropic.BadRequestError) return new ClaudeError(`Anfrage abgelehnt: ${err.message}`);
  if (err instanceof Anthropic.APIConnectionError) return new ClaudeError("Keine Verbindung zur Claude API. Bist du online?");
  if (err instanceof Anthropic.APIError) return new ClaudeError(`Claude API Fehler (${err.status ?? "?"}): ${err.message}`);
  return err instanceof Error ? err : new Error(String(err));
}

/** One structured-output request, validated against a Zod schema. */
export async function askJSON<S extends z.ZodType>(
  cfg: ClaudeConfig,
  opts: { system: string; prompt: string; schema: S; effort?: Effort },
): Promise<z.infer<S>> {
  try {
    const res = await client(cfg).beta.messages.parse({
      model: cfg.model,
      max_tokens: 16000,
      betas: BETAS,
      fallbacks: "default",
      system: opts.system,
      messages: [{ role: "user", content: opts.prompt }],
      output_config: { effort: opts.effort ?? "medium", format: betaZodOutputFormat(opts.schema) },
    });
    if (res.stop_reason === "refusal") throw new ClaudeError("Claude hat diese Anfrage abgelehnt.");
    if (res.stop_reason === "max_tokens") throw new ClaudeError("Die Antwort war zu lang und wurde abgeschnitten. Bitte erneut versuchen.");
    if (!res.parsed_output) throw new ClaudeError("Die Antwort konnte nicht gelesen werden. Bitte erneut versuchen.");
    return res.parsed_output;
  } catch (err) {
    throw friendlyError(err);
  }
}

export type ChatTurn = BetaMessageParam;

/**
 * Streams one assistant turn. Returns the full assistant content so it can be appended
 * to the history unchanged (thinking blocks must be passed back as-is).
 */
export async function streamChat(
  cfg: ClaudeConfig,
  opts: { system: string; history: ChatTurn[]; onText: (snapshot: string) => void; effort?: Effort },
): Promise<{ text: string; content: BetaContentBlockParam[] }> {
  try {
    const stream = client(cfg).beta.messages.stream({
      model: cfg.model,
      max_tokens: 4000,
      betas: BETAS,
      fallbacks: "default",
      system: opts.system,
      messages: opts.history,
      output_config: { effort: opts.effort ?? "low" },
    });
    stream.on("text", (_delta, snapshot) => opts.onText(snapshot));
    const msg = await stream.finalMessage();
    if (msg.stop_reason === "refusal") throw new ClaudeError("Claude hat diese Antwort abgelehnt.");
    const text = msg.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");
    return { text, content: msg.content as BetaContentBlockParam[] };
  } catch (err) {
    throw friendlyError(err);
  }
}

export async function testKey(cfg: ClaudeConfig): Promise<void> {
  try {
    await client(cfg).models.retrieve(cfg.model);
  } catch (err) {
    throw friendlyError(err);
  }
}
