import { BlizzAPI, BlizzUtils } from 'blizzapi';
import { QueryOptions } from 'blizzapi/dist/lib/interfaces';
import { ClientSecret, AccessToken, ClientId, RegionIdOrName } from 'blizzapi/dist/lib/types';

// tslint:disable no-class no-expression-statement no-this
export default class StarCraft2API extends BlizzAPI {
  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
    options?: QueryOptions,
  ) {
    super(region, clientId, clientSecret, accessToken, options);
  }

  // getStaticProfileData(region: RegionIdOrName, locale?)

  // getProfileMetadata(regionId, realmId, profileId, locale?)

  // getProfile(regionId, realmId, profileId, locale?)

  // getLadderSummary(regionId, realmId, profileId, locale?)

  // getLadder(regionId, realmId, profileId, ladderId, locale?)

  // getGrandmasterLeaderboard(regionId);

  // getSeason(regionId);

  // getPlayerAccount(accountId);

  // getLegacyProfile(regionId, realmId, profileId, locale?)

  // getLegacyLadders(regionId, realmId, profileId)

  // getLegacyMatchHistory(regionId, realmId, profileId)

  // getLegacyLadder(regionId, ladderId)

  // getLegacyAchievements(regionId)

  // getLegacyRewards(regionId)
}
// tslint:enable no-class no-expression-statement
