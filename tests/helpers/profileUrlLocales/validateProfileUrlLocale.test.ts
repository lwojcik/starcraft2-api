import { validateProfileUrlLocale } from '../../../src/helpers/profileUrlLocales/validateProfileUrlLocale';
import { profileUrlLocales } from '../../../src/constants/profileUrlLocales';
import nonExistentProfileUrlLocales from '../../__testData__/nonExistentProfileUrlLocales.json';
import malformedProfileUrlLocales from '../../__testData__/malformedProfileUrlLocales.json';

describe('validateProfileUrlLocale', () => {
  profileUrlLocales.forEach(profileUrlLocale => {
    it(`should return true for valid profile url locale ${profileUrlLocale}`, () => {
      expect(validateProfileUrlLocale(profileUrlLocale)).toBe(true);
    });
  });

  nonExistentProfileUrlLocales.forEach(nonExistentProfileUrlLocale => {
    it(`should return true for non-existent profile URL locale ${nonExistentProfileUrlLocale}`, () => {
      expect(validateProfileUrlLocale(nonExistentProfileUrlLocale)).toBe(false);
    });
  });

  malformedProfileUrlLocales.forEach(malformedProfileUrlLocale => {
    it(`should throw RangeError for malformed profile URL locale ${malformedProfileUrlLocale}`, () => {
      expect(() => validateProfileUrlLocale(malformedProfileUrlLocale)).toThrow(RangeError);
    });
  });
});
