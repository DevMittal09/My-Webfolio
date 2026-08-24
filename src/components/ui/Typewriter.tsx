"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }
    const word = words[wordIndex % words.length];
    let delay = deleting ? 38 : 72;
    if (!deleting && text === word) delay = 1900;
    else if (deleting && text === "") delay = 350;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text === word) setDeleting(true);
        else setText(word.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        } else {
          setText(word.slice(0, text.length - 1));
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, reduced]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="type-caret" aria-hidden="true" />
    </span>
  );
}
