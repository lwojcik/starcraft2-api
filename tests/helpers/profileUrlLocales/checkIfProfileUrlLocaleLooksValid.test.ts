import checkIfProfileUrlLocaleLooksValid from '../../../src/helpers/profileUrlLocales/checkIfProfileUrlLocaleLooksValid';
import profileUrlLocales from '../../../src/constants/profileUrlLocales';
import nonExistentProfileUrlLocales from '../../__testData__/nonExistentProfileUrlLocales.json';
import malformedProfileUrlLocales from '../../__testData__/malformedProfileUrlLocales.json';

describe('checkIfProfileUrlLocaleLooksValid', () => {
  profileUrlLocales.forEach(validProfileUrlLocale => {
    it(`should return true for valid profile url locale ${validProfileUrlLocale}`, () => {
      expect(checkIfProfileUrlLocaleLooksValid(validProfileUrlLocale)).toBe(true);
    });
  });

  nonExistentProfileUrlLocales.forEach(nonExistentProfileUrlLocale => {
    it(`should return true for non-existent profile url locale ${nonExistentProfileUrlLocale}`, () => {
      expect(checkIfProfileUrlLocaleLooksValid(nonExistentProfileUrlLocale)).toBe(true);
    });
  });

  malformedProfileUrlLocales.forEach(malformedProfileUrlLocale => {
    it(`should return false for malformed profile url locale ${malformedProfileUrlLocale}`, () => {
      expect(checkIfProfileUrlLocaleLooksValid(malformedProfileUrlLocale)).toBe(false);
    });
  });
});
