import blizzapi, {
  BlizzAPIOptions,
  RegionIdAsNumberOrString,
  Locale,
  Sc2Realm
} from 'blizzapi';

import * as helpers from '../helpers';

export interface StarCraft2APIOptions extends BlizzAPIOptions {}

export interface League {
  seasonId: number | string,
  queueId: number | string,
  teamType: number | string,
  leagueId: number | string,
}

export interface PlayerObject {
  regionId: RegionIdAsNumberOrString;
  realmId: Sc2Realm;
  profileId: number | string;
  locale?: string;
}

export default class StarCraft2API extends blizzapi {
  constructor(options: StarCraft2APIOptions) {
    super(options);
  }

  queryStaticProfileData(regionId: RegionIdAsNumberOrString, locale?: Locale): Promise<object> {
    const queryLocale = locale || blizzapi.getDefaultLocaleNameForRegionId(regionId);
    return this.query(`/sc2/static/profile/${regionId}?locale=${queryLocale}`);
  }

  queryProfileMetadata(playerObject: PlayerObject, locale?: Locale): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || blizzapi.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/metadata/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`,
    );
  }

  queryProfile(playerObject: PlayerObject, locale?: Locale): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || blizzapi.getDefaultLocaleNameForRegionId(regionId);
    return this.query(`/sc2/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`);
  }

  queryLadderSummary(playerObject: PlayerObject, locale?: Locale): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || blizzapi.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/summary?locale=${queryLocale}`,
    );
  }

  queryPlayerLadder(playerObject: PlayerObject, ladderId: number | string, locale?: Locale): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || blizzapi.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}?locale=${queryLocale}`,
    );
  }

  queryGrandmasterLeaderboard(regionId: RegionIdAsNumberOrString): Promise<object> {
    return this.query(`/sc2/ladder/grandmaster/${regionId}`);
  }

  queryLeagueData(league: League): Promise<object> {
    const { seasonId, queueId, teamType, leagueId } = league;
    return this.query(`/data/sc2/league/${seasonId}/${queueId}/${teamType}/${leagueId}`);
  }

  querySeason(regionId: RegionIdAsNumberOrString): Promise<object> {
    return this.query(`/sc2/ladder/season/${regionId}`);
  }

  queryPlayerAccount(accountId: number | string): Promise<object> {
    return this.query(`/sc2/player/${accountId}`);
  }

  queryLegacyProfile(playerObject: PlayerObject): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    return this.query(`/sc2/legacy/profile/${regionId}/${realmId}/${profileId}`);
  }

  queryLegacyLadders(playerObject: PlayerObject): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    return this.query(`/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`);
  }

  queryLegacyMatchHistory(playerObject: PlayerObject): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
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

  static getAllProfileUrlLocales = helpers.getAllProfileUrlLocales;
  static checkIfProfileUrlLocaleLooksValid = helpers.checkIfProfileUrlLocaleLooksValid;
  static validateProfileUrlLocale = helpers.validateProfileUrlLocale;
  static validateProfileUrl = helpers.validateProfileUrl;
  static validateProfileId = helpers.validateProfileId;
  static unpackProfileUrl = helpers.unpackProfileUrl;
  static constructProfileUrl = helpers.constructProfileUrl;
  static profileUrlRegex = () => helpers.profileUrlRegex;
}