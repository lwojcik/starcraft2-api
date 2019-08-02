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

  test('should expose queryLegacyRewards method', () => {
    expect(sc2api.queryLegacyRewards).toBeDefined();
  });

  test('queryLegacyRewards should match snapshot', async () => {
    const data = await sc2api.queryLegacyRewards(regionId);
    expect(data).toMatchSnapshot();
  });
});