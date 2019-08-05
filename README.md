<img src="https://raw.githubusercontent.com/lukemnet/starcraft2-api-docs/master/docs/.vuepress/public/logo.png" alt="StarCraft2-API logo" width="200" height="200">

# StarCraft2-API

[![Travis CI Build Status](https://travis-ci.org/lukemnet/StarCraft2-API.svg?branch=master)](https://travis-ci.org/lukemnet/StarCraft2-API)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/37k5l8yafs1ucthh?svg=true)](https://ci.appveyor.com/project/lwojcik/starcraft2-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/77186f38dbab09a28a6d/maintainability)](https://codeclimate.com/github/lukemnet/starcraft2-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/77186f38dbab09a28a6d/test_coverage)](https://codeclimate.com/github/lukemnet/starcraft2-api/test_coverage)

Feature-rich library for easy access to [StarCraft II Community APIs](https://develop.battle.net/documentation/api-reference/starcraft-2-community-api) and [StarCraft II Game Data APIs](https://develop.battle.net/documentation/api-reference/starcraft-2-game-data-api) powered by [BlizzAPI](https://github.com/lukemnet/blizzapi).


## Install

```bash
npm install starcraft2-api
```

## Quick start

```javascript
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryProfile({ regionId: 1, realmId: 1, profileId: 1084304 });

console.log(data);
``` 

## Manual build

```bash
git clone https://github.com/lukemnet/starcraft2-api.git
cd starcraft2-api
npm install
npm run build
```

## Available methods

| Method 	| Description 	|
|-----------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------	|
| [queryStaticProfileData](http://starcraft2-api.lukem.net/docs/methods/queryStaticProfileData)	| Returns all static SC2 profile data (achievements, categories, criteria, and rewards). 	|
| [queryProfileMetadata](http://starcraft2-api.lukem.net/docs/methods/queryProfileMetadata)	| Returns metadata for an individual's profile. 	|
| [queryProfile](http://starcraft2-api.lukem.net/docs/methods/queryProfile)	| Returns data about an individual SC2 profile.	|
| [queryLadderSummary](http://starcraft2-api.lukem.net/docs/methods/queryLadderSummary)	| Returns a ladder summary for an individual SC2 profile.	|
| [queryPlayerLadder](http://starcraft2-api.lukem.net/docs/methods/queryPlayerLadder)	| Returns data about an individual profile's ladder.	|
| [queryGrandmasterLeaderboard](http://starcraft2-api.lukem.net/docs/methods/queryGrandmasterLeaderboard)	| Returns ladder data for the current season's grandmaster leaderboard.	|
| [querySeason](http://starcraft2-api.lukem.net/docs/methods/querySeason)	| Returns data about the current season.	|
| [queryPlayerAccount](http://starcraft2-api.lukem.net/docs/methods/queryPlayerAccount)	| Returns metadata for an individual's account.	|
| [queryLegacyProfile](http://starcraft2-api.lukem.net/docs/methods/queryLegacyProfile)	| Retrieves data about an individual SC2 profile.	|
| [queryLegacyLadders](http://starcraft2-api.lukem.net/docs/methods/queryLegacyLadders)	| Retrieves data about an individual SC2 profile's ladders.	|
| [queryLegacyMatchHistory](http://starcraft2-api.lukem.net/docs/methods/queryLegacyMatchHistory)	| Returns data about an individual SC2 profile's match history.	|
| [queryLegacyLadder](http://starcraft2-api.lukem.net/docs/methods/queryLegacyLadder)	| Returns data about an individual SC2 ladder.	|
| [queryLegacyAchievements](http://starcraft2-api.lukem.net/docs/methods/queryLegacyAchievements)	| Returns data about the achievements available in SC2.	|
| [queryLegacyRewards](http://starcraft2-api.lukem.net/docs/methods/queryLegacyRewards)	| Returns data about the rewards available in SC2.	|
| [queryLeagueData](http://starcraft2-api.lukem.net/docs/methods/queryLeagueData)	| Returns data for the specified season, queue, team, and league.	|

## Documentation & examples

* [starcraft2-api.lukem.net](https://starcraft2-api.lukem.net) - documentation
* [starcraft2-api-docs](https://github.com/lukemnet/starcraft2-api-docs) - documentation repo on GitHub

* [starcraft2-api-example](https://github.com/lukemnet/starcraft2-api-example) - sample Express.js REST API with usage examples

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/starcraft2-api/blob/master/LICENSE) for more information.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.