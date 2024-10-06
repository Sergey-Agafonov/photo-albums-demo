import { extractWords } from "./Photos";

describe("extractWords function", () => {
    it("extracts signle word from one single word title", () => {
        // ARRANGE
        const photos = [{ title: "testword" }];

        // ACT
        const res = extractWords(photos, "wor");

        // ASSERT
        expect(res.size).toBe(1);
        expect(res.has("testword")).toBeTruthy();
    });

    it("extracts signle word from two multi-word titles", () => {
        // ARRANGE
        const photos = [{ title: "blah testword" }, { title: "foo bar" }];

        // ACT
        const res = extractWords(photos, "wor");

        // ASSERT
        expect(res.size).toBe(1);
        expect(res.has("testword")).toBeTruthy();
    });

    it("extracts signle word, no duplicates from two multi-word titles", () => {
        // ARRANGE
        const photos = [{ title: "blah testword" }, { title: "testword foo bar" }];

        // ACT
        const res = extractWords(photos, "wor");

        // ASSERT
        expect(res.size).toBe(1);
        expect(res.has("testword")).toBeTruthy();
    });

    it("extracts two words from two multi-word titles", () => {
        // ARRANGE
        const photos = [{ title: "blah testword" }, { title: "foo word bar" }];

        // ACT
        const res = extractWords(photos, "wor");

        // ASSERT
        expect(res.size).toBe(2);
        expect(res.has("testword")).toBeTruthy();
        expect(res.has("word")).toBeTruthy();
    });
});