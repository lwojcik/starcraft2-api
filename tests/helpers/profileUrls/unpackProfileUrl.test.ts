import { unpackProfileUrl } from '../../../src/helpers/profileUrls/unpackProfileUrl';
import validProfileUrls from '../../__testData__/profileUrls.json';
import invalidProfileUrls from '../../__testData__/invalidProfileUrls.json';

describe('unpackProfileUrl', () => {
  validProfileUrls.forEach(validProfileUrl => {
    it(`should match snapshot for valid URL ${validProfileUrl}`, () => {
      expect(unpackProfileUrl(validProfileUrl)).toMatchSnapshot();
    });
  });

  invalidProfileUrls.forEach(invalidProfileUrl => {
    it(`should match snapshot for invalid URL ${invalidProfileUrl}`, () => {
      expect(unpackProfileUrl(invalidProfileUrl)).toMatchSnapshot();
    });
  });

  validProfileUrls.forEach(validProfileUrl => {
    it(`should match snapshot for valid URL with locale ${validProfileUrl}`, () => {
      expect(unpackProfileUrl(validProfileUrl, true)).toMatchSnapshot();
    });
  });

  invalidProfileUrls.forEach(invalidProfileUrl => {
    it(`should match snapshot for invalid URL with locale ${invalidProfileUrl}`, () => {
      expect(unpackProfileUrl(invalidProfileUrl, true)).toMatchSnapshot();
    });
  });
});
