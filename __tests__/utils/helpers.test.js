import { formatter } from "../../utils/helpers";

describe("Helper Functions", () => {
  test("Adds a '$' at the start of the number and two zeros after the decimal", () => {
    expect(formatter.format(30)).toBe("$30.00");
  });

  test("Adds a comma every three digits", () => {
    expect(formatter.format(1000)).toBe("$1,000.00");
    expect(formatter.format(1000000)).toBe("$1,000,000.00");
  });

  test("Supports decimals", () => {
    expect(formatter.format(19.99)).toBe("$19.99");
    expect(formatter.format(0.01)).toBe("$0.01");
    expect(formatter.format(0.009)).toBe("$0.01");
  });
});
