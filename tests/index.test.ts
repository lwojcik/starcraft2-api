import StarCraft2API from '../src/index';

describe('StarCraft2API', () => {
  // tslint:disable-next-line: no-object-mutation
  // StarCraft2API.prototype.query = jest.fn().mockImplementation(() => Promise.resolve({
  //   data: 'sample_starcraft2api_data',
  // }));

  const sc2api = new StarCraft2API({ region: 'us', clientId: 'sample_client_id', clientSecret: 'sample_client_secret' });


  // tslint:disable-next-line: no-object-mutation
  sc2api.query = jest.fn().mockImplementation(() => Promise.resolve({
    data: 'sample_starcraft2api_data',
  }));

  test('should be a class', () => {
    expect(StarCraft2API).toBeDefined();
  });

  test('should expose queryStaticProfileData method', () => {
    expect(sc2api.queryStaticProfileData).toBeDefined();
  });

  test('queryStaticProfileData should match snapshot', async () => {
    const data = await sc2api.queryStaticProfileData('1');
    expect(data).toMatchSnapshot();
  });

  test('should expose queryProfileMetadata method', () => {
    expect(sc2api.queryProfileMetadata).toBeDefined();
  });

  test('queryProfileMetadata method', () => {
    expect(sc2api.queryProfileMetadata).toBeDefined();
  });

  test('should expose queryProfile method', () => {
    expect(sc2api.queryProfile).toBeDefined();
  });

  test('should expose queryLadderSummary method', () => {
    expect(sc2api.queryLadderSummary).toBeDefined();
  });

  test('should expose queryPlayerLadder method', () => {
    expect(sc2api.queryPlayerLadder).toBeDefined();
  });

  test('should expose queryGrandmasterLeaderboard method', () => {
    expect(sc2api.queryGrandmasterLeaderboard).toBeDefined();
  });

  test('should expose querySeason method', () => {
    expect(sc2api.querySeason).toBeDefined();
  });

  test('should expose queryPlayerAccount method', () => {
    expect(sc2api.queryPlayerAccount).toBeDefined();
  });

  test('should expose queryLegacyProfile method', () => {
    expect(sc2api.queryLegacyProfile).toBeDefined();
  });

  test('should expose queryLegacyLadders method', () => {
    expect(sc2api.queryLegacyLadders).toBeDefined();
  });

  test('should expose queryLegacyMatchHistory method', () => {
    expect(sc2api.queryLegacyMatchHistory).toBeDefined();
  });
  
  test('should expose queryLegacyLadder method', () => {
    expect(sc2api.queryLegacyLadder).toBeDefined();
  });
  
  test('should expose queryLegacyAchievements method', () => {
    expect(sc2api.queryLegacyAchievements).toBeDefined();
  });

  test('should expose queryLegacyRewards method', () => {
    expect(sc2api.queryLegacyRewards).toBeDefined();
  });
});