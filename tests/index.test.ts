import StarCraft2API from '../src/index';

describe('StarCraft2API', () => {
  const sc2api = new StarCraft2API({ region: 'us', clientId: 'sample_client_id', clientSecret: 'sample_client_secret' });

  // tslint:disable-next-line: no-object-mutation
  sc2api.query = jest.fn().mockImplementation((endpoint) => Promise.resolve({
    endpoint,
    data: 'sample_starcraft2api_data',
  }));

  const player = {
    regionId: 1,
    realmId: 1,
    profileId: '123',
  }

  const regionId = 1;
  const ladderId = '123';
  const accountId = '123';

  const validProfileUrls: ReadonlyArray<string> = [
    'https://starcraft2.com/en-us/profile/1/1/1084304',
    '//starcraft2.com/pl-pl/profile/1/1/1084304',
    'starcraft2.com/ru-ru/profile/1/1/1084304',
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
  }

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

  test('should be a class', () => {
    expect(StarCraft2API).toBeDefined();
  });

  test('should expose queryStaticProfileData method', () => {
    expect(sc2api.queryStaticProfileData).toBeDefined();
  });

  test('queryStaticProfileData should match snapshot', async () => {
    const data = await sc2api.queryStaticProfileData(1);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryProfileMetadata method', () => {
    expect(sc2api.queryProfileMetadata).toBeDefined();
  });

  test('queryProfileMetadata should match snapshot', async () => {
    const data = await sc2api.queryProfileMetadata(player);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryProfile method', () => {
    expect(sc2api.queryProfile).toBeDefined();
  });

  test('queryProfile should match snapshot', async () => {
    const data = await sc2api.queryProfile(player);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryLadderSummary method', () => {
    expect(sc2api.queryLadderSummary).toBeDefined();
  });

  test('queryLadderSummary should match snapshot', async () => {
    const data = await sc2api.queryLadderSummary(player);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryPlayerLadder method', () => {
    expect(sc2api.queryPlayerLadder).toBeDefined();
  });

  test('queryPlayerLadder should match snapshot', async () => {
    const data = await sc2api.queryPlayerLadder(player, ladderId);
    expect(data).toMatchSnapshot();
  });


  test('should expose queryGrandmasterLeaderboard method', () => {
    expect(sc2api.queryGrandmasterLeaderboard).toBeDefined();
  });

  test('queryGrandmasterLeaderboard should match snapshot', async () => {
    const data = await sc2api.queryGrandmasterLeaderboard(regionId);
    expect(data).toMatchSnapshot();
  });

  test('should expose querySeason method', () => {
    expect(sc2api.querySeason).toBeDefined();
  });

  test('querySeason should match snapshot', async () => {
    const data = await sc2api.querySeason(regionId);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryLeagueData method', () => {
    expect(sc2api.queryLeagueData).toBeDefined();
  });

  test('queryLeagueData should match snapshot', async () => {
    const data = await sc2api.queryLeagueData(league);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryPlayerAccount method', () => {
    expect(sc2api.queryPlayerAccount).toBeDefined();
  });

  test('queryPlayerAccount should match snapshot', async () => {
    const data = await sc2api.queryPlayerAccount(accountId);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryLegacyProfile method', () => {
    expect(sc2api.queryLegacyProfile).toBeDefined();
  });

  test('queryLegacyProfile should match snapshot', async () => {
    const data = await sc2api.queryLegacyProfile(player);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryLegacyLadders method', () => {
    expect(sc2api.queryLegacyLadders).toBeDefined();
  });

  test('queryLegacyLadders should match snapshot', async () => {
    const data = await sc2api.queryLegacyLadders(player);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryLegacyMatchHistory method', () => {
    expect(sc2api.queryLegacyMatchHistory).toBeDefined();
  });

  test('queryLegacyMatchHistory should match snapshot', async () => {
    const data = await sc2api.queryLegacyMatchHistory(player);
    expect(data).toMatchSnapshot();
  });
  
  test('should expose queryLegacyLadder method', () => {
    expect(sc2api.queryLegacyLadder).toBeDefined();
  });

  test('queryLegacyLadder should match snapshot', async () => {
    const data = await sc2api.queryLegacyLadder(regionId, ladderId);
    expect(data).toMatchSnapshot();
  });

  test('should expose queryLegacyAchievements method', () => {
    expect(sc2api.queryLegacyAchievements).toBeDefined();
  });

  test('queryLegacyAchievements should match snapshot', async () => {
    const data = await sc2api.queryLegacyAchievements(regionId);
    expect(data).toMatchSnapshot();
  });

  test('queryLegacyRewards should match snapshot', async () => {
    const data = await sc2api.queryLegacyRewards(regionId);
    expect(data).toMatchSnapshot();
  });

  test('should expose getAllProfileUrlLocales method', () => {
    expect(StarCraft2API.getAllProfileUrlLocales).toBeDefined();
  });

  test('getAllProfileUrlLocales should match snapshot', async () => {
    const data = StarCraft2API.getAllProfileUrlLocales();
    expect(data).toMatchSnapshot();
  });

  test('should expose checkIfProfileUrlLocaleLooksValid method', () => {
    expect(StarCraft2API.checkIfProfileUrlLocaleLooksValid).toBeDefined();
  });

  test('checkIfProfileUrlLocaleLooksValid should match snapshot for correct parameters', async () => {
    const profileUrlLocales = StarCraft2API.getAllProfileUrlLocales();
    expect(profileUrlLocales.map((locale) => StarCraft2API.checkIfProfileUrlLocaleLooksValid(locale))).toMatchSnapshot();
  });

  test('checkIfProfileUrlLocaleLooksValid should match snapshot for non-existent locales as parameters', async () => {
    expect(nonExistentProfileUrlLocales.map((locale) => StarCraft2API.checkIfProfileUrlLocaleLooksValid(locale))).toMatchSnapshot();
  });

  test('checkIfProfileUrlLocaleLooksValid should match snapshot for malformed locales as parameters', async () => {
    expect(wrongProfileUrlLocales.map((locale) => StarCraft2API.checkIfProfileUrlLocaleLooksValid(locale))).toMatchSnapshot();
  });

  test('should expose validateProfileUrlLocale method', () => {
    expect(StarCraft2API.validateProfileUrlLocale).toBeDefined();
  });

  test('checkIfProfileUrlLocaleLooksValid should match snapshot for correct parameters', async () => {
    const profileUrlLocales = StarCraft2API.getAllProfileUrlLocales();
    expect(profileUrlLocales.map((locale) => StarCraft2API.validateProfileUrlLocale(locale))).toMatchSnapshot();
  });

  test('validateProfileUrlLocale should match snapshot for non-existent locales as parameters', async () => {
    expect(nonExistentProfileUrlLocales.map((locale) => StarCraft2API.validateProfileUrlLocale(locale))).toMatchSnapshot();
  });

  test('validateProfileUrlLocale should throw RangeError for malformed locales as parameters', async () => {
    expect(() => wrongProfileUrlLocales.map((locale) => StarCraft2API.validateProfileUrlLocale(locale))).toThrow(RangeError);
  });

  test('should expose validateProfileUrlLocale method', () => {
    expect(StarCraft2API.validateProfileUrlLocale).toBeDefined();
  });

  test('should expose validateProfileUrl method', () => {
    expect(StarCraft2API.validateProfileUrl).toBeDefined();
  });

  test('validateProfileUrl should match snapshot for valid urls', () => {
    expect(validProfileUrls.map(url => StarCraft2API.validateProfileUrl(url))).toMatchSnapshot();
  });

  test('validateProfileUrl should match snapshot for invalid urls', () => {
    expect(invalidProfileUrls.map(url => StarCraft2API.validateProfileUrl(url))).toMatchSnapshot();
  });

  test('should expose validateProfileId method', () => {
    expect(StarCraft2API.validateProfileId).toBeDefined();
  });

  test('validateProfileId should match snapshot for valid profile ids', () => {
    expect(validProfileIds.map(profileId => StarCraft2API.validateProfileId(profileId))).toMatchSnapshot();
  });

  test('validateProfileId should match snapshot for invalid profile ids', () => {
    expect(invalidProfileIds.map(profileId => StarCraft2API.validateProfileId(profileId))).toMatchSnapshot();
  });
  test('should expose unpackProfileUrl method', () => {
    expect(StarCraft2API.unpackProfileUrl).toBeDefined();
  });

  test('should expose constructProfileUrl method', () => {
    expect(StarCraft2API.constructProfileUrl).toBeDefined();
  });
});