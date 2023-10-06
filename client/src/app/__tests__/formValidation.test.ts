import { describe, expect, test } from 'vitest';
import { validateName, validateEmail, validatePassword } from 'app/utils';

describe('validateName', () => {
  test('invalid names', () => {
    expect(validateName('John')).toBe(false);
    expect(validateName('John Wick Junior')).toBe(false);
    expect(validateName('1234')).toBe(false);
    expect(validateName('1234 4321')).toBe(false);
    expect(validateName('John12 Wick34')).toBe(false);
  });

  test('valid names', () => {
    expect(validateName('John Wick')).toBe(true);
    expect(validateName('Bruce Wayne')).toBe(true);
    expect(validateName('Lil Jon')).toBe(true);
  });
});

describe('validateEmail', () => {
  test('invalid emails', () => {
    expect(validateEmail('John')).toBe(false);
    expect(validateEmail('JohnWick')).toBe(false);
    expect(validateEmail('1234@4321')).toBe(false);
    expect(validateEmail('john@wick.l')).toBe(false);
    expect(validateEmail('john.wick@com')).toBe(false);
    expect(validateEmail('john.wick@.com')).toBe(false);
  });

  test('valid emails', () => {
    expect(validateEmail('1234@4321.lt')).toBe(true);
    expect(validateEmail('john@wick.com')).toBe(true);
    expect(validateEmail('john.wick@gmail.com')).toBe(true);
  });
});

describe('validatePassword, should contain: upper-case, lower-case, symbol ', () => {
  test('invalid passwords', () => {
    expect(validatePassword('John Wick .')).toBe(false);
    expect(validatePassword('JohnWickSicked')).toBe(false);
    expect(validatePassword('johnwick.11')).toBe(false);
    expect(validatePassword('blossom3311')).toBe(false);
    expect(validatePassword('BLOSSOM123')).toBe(false);
  });

  test('valid passwords', () => {
    expect(validatePassword('.......John')).toBe(true);
    expect(validatePassword('Password.123')).toBe(true);
    expect(validatePassword('Jonathan1.')).toBe(true);
    expect(validatePassword('I.dont.know')).toBe(true);
  });
});
