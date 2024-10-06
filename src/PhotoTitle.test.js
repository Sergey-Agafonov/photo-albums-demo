import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import PhotoTitle from "./PhotoTitle";

describe("PhotoTitle component", () => {
  it("renders 1 highlighted word", () => {
    // ARRANGE
    const params = {
      title: "foo bar",
      highlighted: new Set(["foo"]),
      highlighter: (word) => <i data-testlocator>{word}</i>,
    };

    // ACT
    const { container } = render(<PhotoTitle {...params} />);
    const highlightedWords = container.querySelectorAll("i[data-testlocator]");

    // ASSERT
    expect(highlightedWords).toHaveLength(1);
    expect(highlightedWords[0]).toHaveTextContent("foo");
  });

  it("renders 2 highlighted words", () => {
    // ARRANGE
    const params = {
      title: "foo bar football",
      highlighted: new Set(["foo", "football"]),
      highlighter: (word) => <i data-testlocator>{word}</i>,
    };

    // ACT
    const { container } = render(<PhotoTitle {...params} />);
    const highlightedWords = container.querySelectorAll("i[data-testlocator]");

    // ASSERT
    expect(highlightedWords).toHaveLength(2);
    expect(highlightedWords[0]).toHaveTextContent("foo");
    expect(highlightedWords[1]).toHaveTextContent("football");
  });
});
