import {
  BlizzAPI,
  RegionIdAsNumberOrString,
  Locale,
  QueryOptions,
} from 'blizzapi';
import * as helpers from '../helpers';
import {
  PlayerObject,
  League,
} from '../types';

export class StarCraft2API extends BlizzAPI {
  queryStaticProfileData(
    regionId: RegionIdAsNumberOrString,
    locale?: Locale,
    options?: QueryOptions,
  ): Promise<object> {
    const queryLocale = locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/static/profile/${regionId}?locale=${queryLocale}`,
      options,
    );
  }

  queryProfileMetadata(
    playerObject: PlayerObject,
    locale?: Locale,
    options?: QueryOptions,
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/metadata/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`,
      options,
    );
  }

  queryProfile(
    playerObject: PlayerObject,
    locale?: Locale,
    options?: QueryOptions,
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`,
      options,
    );
  }

  queryLadderSummary(
    playerObject: PlayerObject,
    locale?: Locale,
    options?: QueryOptions,
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/summary?locale=${queryLocale}`,
      options,
    );
  }

  queryPlayerLadder(
    playerObject: PlayerObject,
    ladderId: number | string,
    locale?: Locale,
    options?: QueryOptions,
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale = locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}?locale=${queryLocale}`,
      options,
    );
  }

  queryGrandmasterLeaderboard(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions,
  ): Promise<object> {
    return this.query(
      `/sc2/ladder/grandmaster/${regionId}`,
      options,
    );
  }

  queryLeagueData(league: League, options?: QueryOptions): Promise<object> {
    const {
      seasonId,
      queueId,
      teamType,
      leagueId,
    } = league;
    return this.query(
      `/data/sc2/league/${seasonId}/${queueId}/${teamType}/${leagueId}`,
      options,
    );
  }

  querySeason(regionId: RegionIdAsNumberOrString, options?: QueryOptions): Promise<object> {
    return this.query(
      `/sc2/ladder/season/${regionId}`,
      options,
    );
  }

  queryPlayerAccount(accountId: number | string, options?: QueryOptions): Promise<object> {
    return this.query(
      `/sc2/player/${accountId}`,
      options,
    );
  }

  queryLegacyProfile(playerObject: PlayerObject, options?: QueryOptions): Promise<object> {
    const {
      regionId,
      realmId,
      profileId,
    } = playerObject;
    return this.query(
      `/sc2/legacy/profile/${regionId}/${realmId}/${profileId}`,
      options,
    );
  }

  queryLegacyLadders(playerObject: PlayerObject, options?: QueryOptions): Promise<object> {
    const {
      regionId,
      realmId,
      profileId,
    } = playerObject;
    return this.query(
      `/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`,
      options,
    );
  }

  queryLegacyMatchHistory(playerObject: PlayerObject, options?: QueryOptions): Promise<object> {
    const {
      regionId,
      realmId,
      profileId,
    } = playerObject;
    return this.query(
      `/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/matches`,
      options,
    );
  }

  queryLegacyLadder(
    regionId: RegionIdAsNumberOrString,
    ladderId: number | string,
    options?: QueryOptions,
  ): Promise<object> {
    return this.query(
      `/sc2/legacy/ladder/${regionId}/${ladderId}`,
      options,
    );
  }

  queryLegacyAchievements(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions,
  ): Promise<object> {
    return this.query(
      `/sc2/legacy/data/achievements/${regionId}`,
      options,
    );
  }

  queryLegacyRewards(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions,
  ): Promise<object> {
    return this.query(
      `/sc2/legacy/data/rewards/${regionId}`,
      options,
    );
  }

  static getAllProfileUrlLocales = helpers.getAllProfileUrlLocales;

  static checkIfProfileUrlLocaleLooksValid = helpers.checkIfProfileUrlLocaleLooksValid;

  static validateProfileUrlLocale = helpers.validateProfileUrlLocale;

  static checkIfProfileUrlLooksValid = helpers.checkIfProfileUrlLooksValid;

  static validateProfileUrl = helpers.validateProfileUrl;

  static checkIfProfileIdLooksValid = helpers.checkIfProfileIdLooksValid;

  static unpackProfileUrl = helpers.unpackProfileUrl;

  static constructProfileUrl = helpers.constructProfileUrl;

  static profileUrlRegex = () => helpers.profileUrlRegex;

  static profileUrlLocaleRegex = () => helpers.profileUrlLocaleRegex;
}
