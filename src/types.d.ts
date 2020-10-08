import {
  BlizzAPIOptions,
  RegionIdAsNumberOrString,
  Sc2Realm,
} from 'blizzapi';

export interface StarCraft2APIOptions extends BlizzAPIOptions {}

export interface League {
  seasonId: number | string;
  queueId: number | string;
  teamType: number | string;
  leagueId: number | string;
}

export interface PlayerObject {
  regionId: RegionIdAsNumberOrString;
  realmId: Sc2Realm;
  profileId: number | string;
  locale?: string;
}
