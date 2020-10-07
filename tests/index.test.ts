import StarCraft2API from '../src/index';
import { PlayerProfile } from '../src/lib/helpers/profileUrls';

describe('StarCraft2API', () => {
  const sc2api = new StarCraft2API({
    region: 'us',
    clientId: 'sample_client_id',
    clientSecret: 'sample_client_secret',
  });

  // eslint-disable-next-line jest/prefer-spy-on
  sc2api.query = jest.fn().mockImplementation(endpoint => Promise.resolve({
    endpoint,
    data: 'sample_starcraft2api_data',
  }));

  const player = {
    regionId: 1,
    realmId: 1,
    profileId: '123',
  };

  const regionId = 1;
  const ladderId = '123';
  const accountId = '123';

  const validProfileUrls: ReadonlyArray<string> = [
    'https://starcraft2.com/en-us/profile/1/1/1084304',
    '//starcraft2.com/pl-pl/profile/1/1/1084304',
    'starcraft2.com/ru-ru/profile/1/1/1084304',
    'https://starcraft2.com/en-us/profile/1/1/1084304',
    'https://starcraft2.com/en-us/profile/1/1/123456789',
    'https://starcraft2.com/en-us/profile/2/1/234567890',
    'https://starcraft2.com/en-us/profile/3/1/345678901',
    'https://starcraft2.com/en-us/profile/5/1/456789012',
  ];

  const playerObjects: ReadonlyArray<PlayerProfile> = [
    {
      regionId: 1,
      realmId: 1,
      profileId: 123456,
    },
    {
      regionId: 2,
      realmId: 2,
      profileId: 987654,
    },
  ];

  const invalidPlayerObjects: ReadonlyArray<any> = [
    {
      realmId: '',
      profileId: '',
    },
    {
      regionId: '',
      profileId: '',
    },
    {
      regionId: '',
      realmId: '',
    },
  ];

  const invalidProfileUrls: ReadonlyArray<string> = [
    'starcraft2.com',
    'loremipsum',
    '000test',
  ];

  const validProfileIds: ReadonlyArray<string> = [
    '123456',
    '78901',
    '2323242',
  ];

  const invalidProfileIds: ReadonlyArray<string> = [
    'aaaa',
    '7fdssd8901',
    '2323test242',
  ];

  const league = {
    seasonId: 22,
    queueId: 201,
    teamType: 0,
    leagueId: 1,
  };

  const nonExistentProfileUrlLocales: ReadonlyArray<string> = [
    'ee-ee',
    'EV-VB',
    'Po-rR',
  ];

  const wrongProfileUrlLocales: ReadonlyArray<string> = [
    'e0-e0',
    '09rt',
    '00',
    'loremipsum',
  ];

  it('should be a class', () => {
    expect(StarCraft2API).toBeDefined();
  });

  it('should expose queryStaticProfileData method', () => {
    expect(sc2api.queryStaticProfileData).toBeDefined();
  });

  it('queryStaticProfileData should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryStaticProfileData(1);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryProfileMetadata method', () => {
    expect(sc2api.queryProfileMetadata).toBeDefined();
  });

  it('queryProfileMetadata should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryProfileMetadata(player);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryProfile method', () => {
    expect(sc2api.queryProfile).toBeDefined();
  });

  it('queryProfile should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryProfile(player);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLadderSummary method', () => {
    expect(sc2api.queryLadderSummary).toBeDefined();
  });

  it('queryLadderSummary should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLadderSummary(player);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryPlayerLadder method', () => {
    expect(sc2api.queryPlayerLadder).toBeDefined();
  });

  it('queryPlayerLadder should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryPlayerLadder(player, ladderId);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryGrandmasterLeaderboard method', () => {
    expect(sc2api.queryGrandmasterLeaderboard).toBeDefined();
  });

  it('queryGrandmasterLeaderboard should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryGrandmasterLeaderboard(regionId);
    expect(data).toMatchSnapshot();
  });

  it('should expose querySeason method', () => {
    expect(sc2api.querySeason).toBeDefined();
  });

  it('querySeason should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.querySeason(regionId);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLeagueData method', () => {
    expect(sc2api.queryLeagueData).toBeDefined();
  });

  it('queryLeagueData should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLeagueData(league);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryPlayerAccount method', () => {
    expect(sc2api.queryPlayerAccount).toBeDefined();
  });

  it('queryPlayerAccount should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryPlayerAccount(accountId);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLegacyProfile method', () => {
    expect(sc2api.queryLegacyProfile).toBeDefined();
  });

  it('queryLegacyProfile should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLegacyProfile(player);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLegacyLadders method', () => {
    expect(sc2api.queryLegacyLadders).toBeDefined();
  });

  it('queryLegacyLadders should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLegacyLadders(player);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLegacyMatchHistory method', () => {
    expect(sc2api.queryLegacyMatchHistory).toBeDefined();
  });

  it('queryLegacyMatchHistory should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLegacyMatchHistory(player);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLegacyLadder method', () => {
    expect(sc2api.queryLegacyLadder).toBeDefined();
  });

  it('queryLegacyLadder should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLegacyLadder(regionId, ladderId);
    expect(data).toMatchSnapshot();
  });

  it('should expose queryLegacyAchievements method', () => {
    expect(sc2api.queryLegacyAchievements).toBeDefined();
  });

  it('queryLegacyAchievements should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLegacyAchievements(regionId);
    expect(data).toMatchSnapshot();
  });

  it('queryLegacyRewards should match snapshot', async () => {
    expect.assertions(1);
    const data = await sc2api.queryLegacyRewards(regionId);
    expect(data).toMatchSnapshot();
  });

  it('should expose getAllProfileUrlLocales method', () => {
    expect(StarCraft2API.getAllProfileUrlLocales).toBeDefined();
  });

  it('getAllProfileUrlLocales should match snapshot', () => {
    const data = StarCraft2API.getAllProfileUrlLocales();
    expect(data).toMatchSnapshot();
  });

  it('should expose checkIfProfileUrlLocaleLooksValid method', () => {
    expect(StarCraft2API.checkIfProfileUrlLocaleLooksValid).toBeDefined();
  });

  it(
    'checkIfProfileUrlLocaleLooksValid should match snapshot for non-existent locales',
    async () => {
      expect.assertions(1);
      expect(nonExistentProfileUrlLocales.map(locale =>
        StarCraft2API.checkIfProfileUrlLocaleLooksValid(locale))).toMatchSnapshot();
    },
  );

  it(
    'checkIfProfileUrlLocaleLooksValid should match snapshot for malformed locales',
    async () => {
      expect.assertions(1);
      expect(wrongProfileUrlLocales.map(locale =>
        StarCraft2API.checkIfProfileUrlLocaleLooksValid(locale))).toMatchSnapshot();
    },
  );

  it(
    'checkIfProfileUrlLocaleLooksValid should match snapshot for correct parameters',
    async () => {
      expect.assertions(1);
      const profileUrlLocales = StarCraft2API.getAllProfileUrlLocales();
      expect(profileUrlLocales.map(locale =>
        StarCraft2API.validateProfileUrlLocale(locale))).toMatchSnapshot();
    },
  );

  it(
    'validateProfileUrlLocale should match snapshot for non-existent locales as parameters',
    () => {
      expect(nonExistentProfileUrlLocales.map(locale =>
        StarCraft2API.validateProfileUrlLocale(locale))).toMatchSnapshot();
    },
  );

  it(
    'validateProfileUrlLocale should throw RangeError for malformed locales as parameters',
    async () => {
      expect.assertions(1);
      expect(() => wrongProfileUrlLocales.map(locale =>
        StarCraft2API.validateProfileUrlLocale(locale))).toThrow(RangeError);
    },
  );

  it('should expose validateProfileUrlLocale method', () => {
    expect(StarCraft2API.validateProfileUrlLocale).toBeDefined();
  });

  it('should expose validateProfileUrl method', () => {
    expect(StarCraft2API.validateProfileUrl).toBeDefined();
  });

  it('validateProfileUrl should match snapshot for valid urls', () => {
    expect(validProfileUrls.map(url =>
      StarCraft2API.validateProfileUrl(url))).toMatchSnapshot();
  });

  it('validateProfileUrl should match snapshot for valid urls with locale', () => {
    expect(validProfileUrls.map(url =>
      StarCraft2API.validateProfileUrl(url, true))).toMatchSnapshot();
  });

  it('should expose validateProfileId method', () => {
    expect(StarCraft2API.validateProfileId).toBeDefined();
  });

  it('validateProfileId should match snapshot for valid profile ids', () => {
    expect(validProfileIds.map(profileId =>
      StarCraft2API.validateProfileId(profileId))).toMatchSnapshot();
  });

  it('validateProfileId should match snapshot for invalid profile ids', () => {
    expect(invalidProfileIds.map(profileId =>
      StarCraft2API.validateProfileId(profileId))).toMatchSnapshot();
  });

  it('should expose unpackProfileUrl method', () => {
    expect(StarCraft2API.unpackProfileUrl).toBeDefined();
  });

  it('unpackProfileUrl should match snapshot for valid urls', () => {
    expect(validProfileUrls.map(url => StarCraft2API.unpackProfileUrl(url))).toMatchSnapshot();
  });

  it(
    'unpackProfileUrl should match snapshot for valid urls and includeLocale set to true', () => {
      expect(validProfileUrls.map(url =>
        StarCraft2API.unpackProfileUrl(url, true))).toMatchSnapshot();
    },
  );

  it('unpackProfileUrl should match snapshot for invalid urls', () => {
    expect(invalidProfileUrls.map(url => StarCraft2API.unpackProfileUrl(url))).toMatchSnapshot();
  });

  it('should expose constructProfileUrl method', () => {
    expect(StarCraft2API.constructProfileUrl).toBeDefined();
  });

  it('constructProfileUrl should match snapshot for valid player objects', () => {
    expect(playerObjects.map(playerObject =>
      StarCraft2API.constructProfileUrl(playerObject))).toMatchSnapshot();
  });

  it(
    'constructProfileUrl should match snapshot for valid player objects and locale set to en-us',
    () => {
      expect(playerObjects.map(playerObject =>
        StarCraft2API.constructProfileUrl(playerObject, 'en-us'))).toMatchSnapshot();
    },
  );

  it('constructProfileUrl should match snapshot for invalid player objects', () => {
    expect(invalidPlayerObjects.map(playerObject =>
      StarCraft2API.constructProfileUrl(playerObject))).toMatchSnapshot();
  });

  it('should expose profileUrlRegex method', () => {
    expect(StarCraft2API.profileUrlRegex).toBeDefined();
  });

  it('profileUrlRegex should match snapshot', () => {
    expect(StarCraft2API.profileUrlRegex()).toMatchSnapshot();
  });
});
