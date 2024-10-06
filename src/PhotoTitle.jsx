import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";

export default function PhotoTitle({
  title,
  highlighted = new Set(),
  highlighter = (word) => <i>{word}</i>,
}) {
  const words = useMemo(() => title.split(/\b(\w+)\b/g), [title]);
  const maybeHighlightedWord = useCallback(
    (word) => (highlighted.has(word) ? highlighter(word) : word),
    [highlighted, highlighter]
  );

  return words.map((word, i) => (
    <span key={word + i}>{maybeHighlightedWord(word)}</span>
  ));
}

PhotoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  highlighted: PropTypes.instanceOf(Set),
  highlighter: PropTypes.func,
};
