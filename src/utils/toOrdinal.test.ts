import { describe, it, expect } from 'vitest';
import { toOrdinal } from './toOrdinal';

describe('toOrdinal function', () => {
  it('converts string numbers to ordinal strings', () => {
    expect(toOrdinal('1')).toBe('1st');
    expect(toOrdinal('2')).toBe('2nd');
    expect(toOrdinal('3')).toBe('3rd');
    expect(toOrdinal('4')).toBe('4th');
    expect(toOrdinal('5')).toBe('5th');
    expect(toOrdinal('6')).toBe('6th');
  });

  it('throws an error for invalid inputs', () => {
    expect(() => toOrdinal('0')).toThrow();
    expect(() => toOrdinal('7')).toThrow();
    expect(() => toOrdinal('abc')).toThrow();
  });
});