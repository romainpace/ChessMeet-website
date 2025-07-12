import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("text-red-500", "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("handles conditional classes", () => {
    const result = cn("base-class", false && "conditional-class", "another-class");
    expect(result).toBe("base-class another-class");
  });

  it("handles undefined and null values", () => {
    const result = cn("class1", undefined, null, "class2");
    expect(result).toBe("class1 class2");
  });

  it("merges tailwind classes with conflicts correctly", () => {
    const result = cn("px-2", "px-4");
    expect(result).toBe("px-4");
  });

  it("handles arrays of classes", () => {
    const result = cn(["class1", "class2"], "class3");
    expect(result).toBe("class1 class2 class3");
  });

  it("handles empty inputs", () => {
    const result = cn();
    expect(result).toBe("");
  });
});
