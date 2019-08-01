import { BlizzAPI } from '../../blizzapi/dist';
import BlizzAPIOptions from 'blizzapi/dist';
import {
  ClientSecret,
  AccessToken,
  ClientId,
  RegionIdOrName,
  RegionIdAsNumberOrString,
  Locale,
  Sc2Realm,
} from 'blizzapi/@types';



// tslint:disable no-class no-expression-statement no-this
export class StarCraft2API extends BlizzAPI {
  constructor(options: BlizzAPIOptions) {
    super(options);
  }

  queryStaticProfileData(regionId: RegionIdAsNumberOrString, locale?: Locale): Promise<object> {
    const queryLocale = locale || blizzapi.getDefaultLocaleNameForRegionId(regionId);
    return this.query(`/sc2/static/profile/${regionId}?locale=${queryLocale}`);
  }

  queryProfileMetadata(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
    locale?: Locale,
  ): Promise<object> {
    const queryLocale = locale || BlizzUtils.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/metadata/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`,
    );
  }

  queryProfile(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
    locale?: Locale,
  ): Promise<object> {
    const queryLocale = locale || BlizzUtils.getDefaultLocaleNameForRegionId(regionId);
    return this.query(`/sc2/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`);
  }

  queryLadderSummary(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
    locale?: Locale,
  ): Promise<object> {
    const queryLocale = locale || BlizzUtils.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/summary?locale=${queryLocale}`,
    );
  }

  queryPlayerLadder(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
    ladderId: number | string,
    locale?: Locale,
  ): Promise<object> {
    const queryLocale = locale || BlizzUtils.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}?locale=${queryLocale}`,
    );
  }

  queryGrandmasterLeaderboard(regionId: RegionIdAsNumberOrString): Promise<object> {
    return this.query(`/sc2/ladder/grandmaster/${regionId}`);
  }

  querySeason(regionId: RegionIdAsNumberOrString): Promise<object> {
    return this.query(`/sc2/ladder/season/${regionId}`);
  }

  queryPlayerAccount(accountId: number | string): Promise<object> {
    return this.query(`/s2/player/${accountId}`);
  }

  queryLegacyProfile(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
  ): Promise<object> {
    return this.query(`/sc2/legacy/profile/${regionId}/${realmId}/${profileId}`);
  }

  queryLegacyLadders(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
  ): Promise<object> {
    return this.query(`/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`);
  }

  queryLegacyMatchHistory(
    regionId: RegionIdAsNumberOrString,
    realmId: Sc2Realm,
    profileId: number | string,
  ): Promise<object> {
    return this.query(`/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/matches`);
  }

  queryLegacyLadder(
    regionId: RegionIdAsNumberOrString,
    ladderId: number | string,
  ): Promise<object> {
    return this.query(`/sc2/legacy/ladder/${regionId}/${ladderId}`);
  }

  queryLegacyAchievements(regionId: RegionIdAsNumberOrString): Promise<object> {
    return this.query(`/sc2/legacy/data/achievements/${regionId}`);
  }

  queryLegacyRewards(regionId: RegionIdAsNumberOrString): Promise<object> {
    return this.query(`/sc2/legacy/data/rewards/${regionId}`);
  }
}
// tslint:enable no-class no-expression-statement
