// add.test.ts
import { add, willThrowError } from '@/add';

describe('file 1 describe 1', () => {
  it('it 1', () => {
    expect(add(5, 3)).toBe(8);
    expect(add(0, 0)).toBe(0);
    expect(add(-3, 3)).toBe(0);
  });
  it('it 2', () => {
    expect(add(5, 3)).toBe(8);
    expect(add(0, 0)).toBe(0);
    expect(add(-3, 3)).toBe(0);
  });

});

describe('fle 1 describe 2',() => {
    it('describe 2 it 1', () => {
        expect(add(5, 3)).toBe(8);
        expect(add(0, 0)).toBe(0);
        expect(add(-3, 3)).toBe(0);
    });
    it('describe 2 it 2', () => {
        expect(add(5, 3)).toBe(8);
        expect(add(0, 0)).toBe(0);
        expect(add(-3, 3)).toBe(1);
    });
    it('throw error', () => {
        expect(willThrowError()).toBe(1);
    });
});

