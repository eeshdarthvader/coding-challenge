import { calculateAge } from "./utils";

describe("calculateAge", () => {
  it("should return the age of candidate", () => {  
      const age = calculateAge("06/13/1973")

      expect(age).toBe(50)
  });
  it("should return the age of candidate - 2", () => {  
    const age = calculateAge("03/05/1973")

    expect(age).toBe(51)
});
});
