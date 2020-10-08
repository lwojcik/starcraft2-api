import checkIfProfileUrlLooksValid from './checkIfProfileUrlLooksValid';
import profileUrlRegex from './profileUrlRegex';
import { PlayerObject } from '../../types.d';

export default (url: string, includeLocale?: boolean): PlayerObject | {} => {
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
