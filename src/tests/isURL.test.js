import { isURL } from "../client/js/isURL";

describe("Testing the checking url validation", () => {
  test("Testing the isURL() function", () => {
    expect(isURL()).toBeDefined();
  });

  test("Return TRUE on valid URL", () => {
    expect(isURL("https://www.google.com/")).toBe(1);
  });

  test("Return FALSE on valid URL", () => {
    expect(isURL("google")).toBe(0);
  });
});
