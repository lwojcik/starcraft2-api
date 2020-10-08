import BlizzAPI from 'blizzapi';
import checkIfProfileIdLooksValid from '../profileIds/checkIfProfileIdLooksValid';
import validateProfileUrlLocale from '../profileUrlLocales/validateProfileUrlLocale';
import {
  PlayerObject,
} from '../../types';

export default (
  {
    regionId,
    realmId,
    profileId,
  }: PlayerObject,
  localeName?: string,
) => {
  try {
    const validRegionId = BlizzAPI.validateRegionId(regionId);
    const validRealmId = BlizzAPI.checkIfSc2RealmLooksValid(realmId);
    const validProfileId = checkIfProfileIdLooksValid(profileId);
    const locale = localeName && validateProfileUrlLocale(localeName)
      ? localeName
      : 'en-us';

    if (validRegionId && validRealmId && validProfileId) {
      return `https://starcraft2.com/${locale}/profile/${regionId}/${realmId}/${profileId}`;
    }
    return '';
  } catch (error) {
    return '';
  }
};
