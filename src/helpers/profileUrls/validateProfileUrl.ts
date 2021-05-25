import { BlizzAPI } from 'blizzapi';
import { checkIfProfileIdLooksValid } from '../profileIds/checkIfProfileIdLooksValid';
import { validateProfileUrlLocale } from '../profileUrlLocales/validateProfileUrlLocale';
import { unpackProfileUrl } from './unpackProfileUrl';
import {
  PlayerObject,
} from '../../types';

export const validateProfileUrl = (url: string, includeLocale?: boolean) => {
  const profileObject = unpackProfileUrl(url, includeLocale) as PlayerObject;

  if (Object.keys(profileObject).length === 0) {
    throw new RangeError(`${url} is not a valid argument for validateProfileUrl()`);
  }

  const {
    regionId,
    realmId,
    profileId,
  } = profileObject;

  const localeName = includeLocale
    ? (profileObject as PlayerObject & { locale: string }).locale
    : undefined;

  const validRegionId = BlizzAPI.validateRegionId(regionId);
  const validRealmId = BlizzAPI.checkIfSc2RealmLooksValid(realmId);
  const validProfileId = checkIfProfileIdLooksValid(profileId);
  const validLocale = localeName && validateProfileUrlLocale(localeName);

  return validRegionId
    && validRealmId
    && validProfileId
    && includeLocale ? validLocale : true;
};
