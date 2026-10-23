import { useEffect, useRef, useState } from "react";
import { canListen, listen } from "../lib/speech";

const ACCENTS = ["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡"];

export default function ChatInput({ disabled, onSend, placeholder }: { disabled?: boolean; onSend: (text: string) => void; placeholder?: string }) {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => () => stopRef.current?.(), []);

  function send() {
    const t = text.trim();
    if (!t || disabled) return;
    onSend(t);
    setText("");
  }

  function toggleMic() {
    if (listening) {
      stopRef.current?.();
      return;
    }
    setListening(true);
    stopRef.current = listen(setText, () => {
      setListening(false);
      stopRef.current = null;
    });
  }

  function insert(ch: string) {
    const el = inputRef.current;
    if (!el) return setText((t) => t + ch);
    const start = el.selectionStart ?? text.length;
    const end = el.selectionEnd ?? text.length;
    setText(text.slice(0, start) + ch + text.slice(end));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + ch.length, start + ch.length);
    });
  }

  return (
    <div className="chat-input">
      <div className="accents">
        {ACCENTS.map((a) => (
          <button key={a} type="button" onClick={() => insert(a)}>
            {a}
          </button>
        ))}
      </div>
      <div className="row">
        <textarea
          ref={inputRef}
          value={text}
          rows={2}
          placeholder={placeholder ?? "Escribe en español…"}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />
        {canListen() && (
          <button type="button" className={`icon-btn mic ${listening ? "on" : ""}`} title="Sprechen" onClick={toggleMic}>
            🎤
          </button>
        )}
        <button className="primary" disabled={disabled || !text.trim()} onClick={send}>
          Senden
        </button>
      </div>
    </div>
  );
}
