import { validateProfileUrl } from '../../../src/helpers/profileUrls/validateProfileUrl';
import validProfileUrls from '../../__testData__/profileUrls.json';
import invalidProfileUrls from '../../__testData__/invalidProfileUrls.json';

describe('validateProfileUrl', () => {
  validProfileUrls.forEach(validProfileUrl => {
    it(`should match snapshot for valid URL ${validProfileUrl}`, () => {
      expect(validateProfileUrl(validProfileUrl)).toMatchSnapshot();
    });
  });

  validProfileUrls.forEach(validProfileUrl => {
    it(`should match snapshot for valid URL ${validProfileUrl} with locale`, () => {
      expect(validateProfileUrl(validProfileUrl, true)).toMatchSnapshot();
    });
  });

  invalidProfileUrls.forEach(invalidProfileUrl => {
    it(`should throw RangeError for invalid URL ${invalidProfileUrl}`, () => {
      expect(() => validateProfileUrl(invalidProfileUrl)).toThrow(RangeError);
    });
  });
});
