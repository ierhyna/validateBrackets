const validateBrackets = require('./validateBrackets');

describe('validateBrackets', () => {
  it('({[]})', () => {
    expect(validateBrackets('({[]})')).toBe(true);
  });

  it('[({something})]', () => {
    expect(validateBrackets('[({something})]')).toBe(true);
  });

  it('a(b{c[]})', () => {
    expect(validateBrackets('a(b{c[]})')).toBe(true);
  });

  it('a(b{}c[])', () => {
    expect(validateBrackets('a(b{}c[])')).toBe(true);
  });

  it('{a}[b(c)]}', () => {
    expect(validateBrackets('{a}[b(c)]}')).toBe(false);
  });

  it('[({})', () => {
    expect(validateBrackets('[({})')).toBe(false);
  });

  it('([{})', () => {
    expect(validateBrackets('([{})')).toBe(false);
  });

  it('({][})', () => {
    expect(validateBrackets('({][})')).toBe(false);
  });

  it(')({][})', () => {
    expect(validateBrackets(')({][})')).toBe(false);
  });

  it('a', () => {
    expect(validateBrackets('a')).toBe(true);
  });

  it('(((((((', () => {
    expect(validateBrackets('(((((((')).toBe(false);
  });

  it('}}}}}}}', () => {
    expect(validateBrackets('}}}}}}}')).toBe(false);
  });
});
