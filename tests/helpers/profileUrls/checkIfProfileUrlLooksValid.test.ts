import checkIfProfileUrlLooksValid from '../../../src/helpers/profileUrls/checkIfProfileUrlLooksValid';
import validProfileUrls from '../../__testData__/profileUrls.json';
import invalidProfileUrls from '../../__testData__/invalidProfileUrls.json';

describe('checkIfProfileUrlLocaleLooksValid', () => {
  validProfileUrls.forEach(validProfileUrl => {
    it(`should return true for valid profile url ${validProfileUrl}`, () => {
      expect(checkIfProfileUrlLooksValid(validProfileUrl)).toBe(true);
    });
  });

  invalidProfileUrls.forEach(invalidProfileUrl => {
    it(`should return true for valid profile url ${invalidProfileUrl}`, () => {
      expect(checkIfProfileUrlLooksValid(invalidProfileUrl)).toBe(false);
    });
  });
});
