import { rollDice } from "../utils";

describe("rollDice()", () => {
  it("rolls 1d4", () => {
    const result = rollDice(1, 4);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(4);
  });
  it("rolls 1d6", () => {
    const result = rollDice(1, 6);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });
  it("rolls 1d8", () => {
    const result = rollDice(1, 8);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(8);
  });
  it("rolls 1d10", () => {
    const result = rollDice(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });
  it("rolls 1d12", () => {
    const result = rollDice(1, 12);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(12);
  });
  it("rolls 1d20", () => {
    const result = rollDice(1, 20);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(20);
  });
  it("rolls 3d6", () => {
    const result = rollDice(3, 6);
    expect(result).toBeGreaterThanOrEqual(3);
    expect(result).toBeLessThanOrEqual(18);
  });
})