import BlizzAPI, {
  RegionIdAsNumberOrString,
  Sc2RealmAsNumberOrString,
} from 'blizzapi';

export interface PlayerProfile {
  regionId: RegionIdAsNumberOrString,
  realmId: Sc2RealmAsNumberOrString,
  profileId: string | number,
}

const profileUrlRegex: RegExp =
  /starcraft2\.com\/([A-z]{2}-[A-z]{2})\/profile\/((1|2|3|5){1})\/([0-9]{1})\/([0-9]*)/gi;

export const validateProfileUrl = (url: string) =>
  profileUrlRegex.test(url);

export const validateProfileId = (profileId: number | string) => 
  profileId.toString() === parseInt(profileId as string, 10).toString();

export const unpackProfileUrl = (url: string, includeLocale?: boolean) => {
  const urlIsValid = validateProfileUrl(url);
  const profileUrl = url.match(profileUrlRegex)![0];
  const profileDataArray = profileUrlRegex.exec(profileUrl);

  // tslint:disable-next-line: no-object-mutation
  profileUrlRegex.lastIndex = 0;

  if (urlIsValid && profileDataArray) {

    const playerObject = {
      regionId: profileDataArray[1],
      realmId: profileDataArray[2],
      profileId: profileDataArray[3],
    };

    return includeLocale
      ? {
        locale: profileDataArray[0],
        ...playerObject,
      }
      : playerObject;
  }
  return {};
}

export const constructProfileUrl = ({ regionId, realmId, profileId }: PlayerProfile, localeName?: string | Boolean) => {
  const validRegionId = BlizzAPI.validateRegionId(regionId);
  const validProfileId = validateProfileId(profileId);
  const validRealmId = BlizzAPI.checkIfSc2RealmLooksValid(realmId);

  if (validRegionId && validRealmId && validProfileId) {
    const locale = localeName || 'en-us';
    return `https://starcraft2.com/${typeof locale ==='boolean' && !locale ? '' : `${locale}/`}profile/${regionId}/${realmId}/${profileId}`;
  }
  return '';
}