import BlizzAPI, {
  RegionIdAsNumberOrString,
  Sc2RealmAsNumberOrString,
} from 'blizzapi';

import { validateProfileUrlLocale } from './profileUrlLocales';

export interface PlayerProfile {
  regionId: RegionIdAsNumberOrString;
  realmId: Sc2RealmAsNumberOrString;
  profileId: string | number;
  locale?: string;
}

export const profileUrlRegex =
  /starcraft2\.com\/([A-z]{2}-[A-z]{2})\/profile\/(1|2|3|5{1})\/(1|2{1})\/([0-9]\d*)/i;

export const checkIfProfileUrlLooksValid = (url: string) =>
  profileUrlRegex.test(url);

export const validateProfileId = (profileId: number | string) =>
  profileId.toString() === parseInt(profileId as string, 10).toString();

export const unpackProfileUrl = (url: string, includeLocale?: boolean): PlayerProfile | {} => {
  const urlIsValid = checkIfProfileUrlLooksValid(url);

  if (!urlIsValid) return {};

  const profileUrl = url.match(profileUrlRegex)![0];
  const profileDataArray = profileUrlRegex.exec(profileUrl)!;

  return {
    ...includeLocale && { locale: profileDataArray[1] },
    regionId: profileDataArray[2],
    realmId: profileDataArray[3],
    profileId: profileDataArray[4],
  };
};

export const validateProfileUrl = (url: string, includeLocale?: boolean) => {
  const profileObject = unpackProfileUrl(url, includeLocale) as PlayerProfile;

  if (Object.keys(profileObject).length === 0) {
    throw new RangeError(`${url} is not a valid argument for validateProfileUrl()`);
  }

  const {
    regionId,
    realmId,
    profileId,
  } = profileObject;

  const localeName = includeLocale
    ? (profileObject as PlayerProfile & { locale: string }).locale
      : undefined;

  const validRegionId = BlizzAPI.validateRegionId(regionId);
  const validProfileId = validateProfileId(profileId);
  const validRealmId = BlizzAPI.checkIfSc2RealmLooksValid(realmId);
  const validLocale = localeName && validateProfileUrlLocale(localeName);

  return validRegionId
    && validRealmId
    && validProfileId
    && includeLocale ? validLocale : true;
};

export const constructProfileUrl = (
  {
    regionId,
    realmId,
    profileId,
  }: PlayerProfile,
  localeName?: string) => {
  try {
    const validRegionId = BlizzAPI.validateRegionId(regionId);
    const validProfileId = validateProfileId(profileId);
    const validRealmId = BlizzAPI.checkIfSc2RealmLooksValid(realmId);
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
