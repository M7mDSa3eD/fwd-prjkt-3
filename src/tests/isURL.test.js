import { isURL } from "../client/js/isURL";

describe("Testing the checking url validation", () => {
  test("Testing the isURL() function", () => {
    expect(isURL()).toBeDefined();
  });
});
