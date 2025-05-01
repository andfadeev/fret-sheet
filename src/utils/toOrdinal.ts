/**
 * Converts a string number to its ordinal representation.
 * @param numStr A string representing a number from '1' to '6'
 * @returns The ordinal representation of the number (e.g., '1st', '2nd', etc.)
 * @throws Error if the input is not a string representing a number from '1' to '6'
 */
export function toOrdinal(numStr: string): string {
  const num = parseInt(numStr, 10);
  if (isNaN(num) || num < 1 || num > 6) {
    throw new Error("Input must be a string representing a number from '1' to '6'");
  }

  const suffixes = ["th", "st", "nd", "rd", "th", "th", "th"];
  return num + suffixes[num];
}