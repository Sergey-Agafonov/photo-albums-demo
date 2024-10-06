import React from "react";

// TODO type params
export default function PhotoTitle({ title, highlighted = new Set(), highlighter = word => <i>{word}</i> }) {
  // TODO this needs to be optimized
  return (
    <>
      {title.split(/\b(\w+)\b/g).map((word, i) => (
        <span key={word + i}>
          {highlighted.has(word) ? highlighter(word) : word}
        </span>
      ))}
    </>
  );
}
