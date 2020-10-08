import constructProfileUrl from '../../../src/helpers/profileUrls/constructProfileUrl';
import playerObjects from '../../__testData__/playerObjects.json';
import invalidPlayerObjects from '../../__testData__/invalidPlayerObjects.json';
import { PlayerObject } from '../../../src/types';

describe('constructProfileUrl', () => {
  playerObjects.forEach(playerObject => {
    it('should match snapshot for valid player object', () => {
      expect(constructProfileUrl(playerObject)).toMatchSnapshot();
    });
  });

  invalidPlayerObjects.forEach(invalidPlayerObject => {
    it('should match snapshot for invalid player object', () => {
      expect(constructProfileUrl(invalidPlayerObject as PlayerObject)).toMatchSnapshot();
    });
  });

  playerObjects.forEach(playerObject => {
    it('should match snapshot for valid player object and valid locale', () => {
      expect(constructProfileUrl(playerObject, 'en-us')).toMatchSnapshot();
    });
  });

  playerObjects.forEach(playerObject => {
    it('should match snapshot for valid player object and invalid locale', () => {
      expect(constructProfileUrl(playerObject, 'invalidLocale')).toMatchSnapshot();
    });
  });
});
