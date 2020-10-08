import StarCraft2API from '../../src/classes/StarCraft2API';

describe('StarCraft2API', () => {
  const player = {
    regionId: 1,
    realmId: 1,
    profileId: '123',
  };

  const regionId = 1;
  const ladderId = '123';
  const accountId = '123';

  const league = {
    seasonId: 22,
    queueId: 201,
    teamType: 0,
    leagueId: 1,
  };

  const asyncMethods = [
    {
      name: 'queryStaticProfileData',
      params: [
        1,
      ],
    },
    {
      name: 'queryProfileMetadata',
      params: [
        player,
      ],
    },
    {
      name: 'queryProfile',
      params: [
        player,
      ],
    },
    {
      name: 'queryLadderSummary',
      params: [
        player,
      ],
    },
    {
      name: 'queryPlayerLadder',
      params: [
        player,
        ladderId,
      ],
    },
    {
      name: 'queryGrandmasterLeaderboard',
      params: [
        regionId,
      ],
    },
    {
      name: 'queryLeagueData',
      params: [
        league,
      ],
    },
    {
      name: 'querySeason',
      params: [
        regionId,
      ],
    },
    {
      name: 'queryPlayerAccount',
      params: [
        accountId,
      ],
    },
    {
      name: 'queryLegacyProfile',
      params: [
        player,
      ],
    },
    {
      name: 'queryLegacyLadders',
      params: [
        player,
      ],
    },
    {
      name: 'queryLegacyMatchHistory',
      params: [
        player,
      ],
    },
    {
      name: 'queryLegacyLadder',
      params: [
        regionId,
        ladderId,
      ],
    },
    {
      name: 'queryLegacyAchievements',
      params: [
        regionId,
      ],
    },
    {
      name: 'queryLegacyRewards',
      params: [
        regionId,
      ],
    },
  ];

  const staticMethods = [
    'checkIfProfileIdLooksValid',
    'getAllProfileUrlLocales',
    'checkIfProfileUrlLocaleLooksValid',
    'validateProfileUrlLocale',
    'checkIfProfileUrlLooksValid',
    'validateProfileUrl',
    'unpackProfileUrl',
    'constructProfileUrl',
    'profileUrlRegex',
    'profileUrlLocaleRegex',
  ];

  const sc2api = new StarCraft2API({
    region: 'us',
    clientId: 'sample_client_id',
    clientSecret: 'sample_client_secret',
  });

  jest.spyOn(sc2api, 'query').mockImplementation(endpoint =>
    Promise.resolve({
      data: `sample data for ${endpoint}`,
    }));

  it('should be defined', () => {
    expect(StarCraft2API).toBeDefined();
  });

  asyncMethods.forEach(asyncMethod => {
    const {
      name,
      params,
    } = asyncMethod;
    it(`should expose ${name} method`, () => {
      const methodFn = (sc2api as { [key: string]: any })[name];
      expect(methodFn).toBeDefined();
    });

    it(`${name} should match snapshot`, async () => {
      expect.assertions(1);
      const data = await (sc2api as { [key: string]: any })[name](...params);
      expect(data).toMatchSnapshot();
    });
  });

  staticMethods.forEach(staticMethod => {
    it(`should expose ${staticMethod} static method`, () => {
      const methodFn = (StarCraft2API as { [key: string]: any })[staticMethod];
      expect(methodFn).toBeDefined();
    });
  });
});
