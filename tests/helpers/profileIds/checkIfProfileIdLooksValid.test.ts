import { checkIfProfileIdLooksValid } from '../../../src/helpers/profileIds/checkIfProfileIdLooksValid';
import validProfileIds from '../../__testData__/profileIds.json';
import invalidProfileIds from '../../__testData__/invalidProfileIds.json';

describe('checkIfProfileIdLooksValid', () => {
  validProfileIds.forEach(validProfileId => {
    it(`should return true for valid profile id ${validProfileId}`, () => {
      expect(checkIfProfileIdLooksValid(validProfileId)).toBe(true);
    });
  });

  invalidProfileIds.forEach(invalidProfileId => {
    it(`should return false for invalid profile id ${invalidProfileId}`, () => {
      expect(checkIfProfileIdLooksValid(invalidProfileId)).toBe(false);
    });
  });
});
