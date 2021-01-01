<img src="https://raw.githubusercontent.com/lukemnet/starcraft2-api-docs/master/docs/.vuepress/public/logo.png" alt="StarCraft2-API logo" width="200" height="200">

# StarCraft2-API

[![npm (latest)](https://img.shields.io/npm/v/starcraft2-api/latest.svg)](https://www.npmjs.com/package/starcraft2-api)
[![Build status](https://ci.appveyor.com/api/projects/status/p4f467gw2ufh1gub/branch/master?svg=true)](https://ci.appveyor.com/project/lwojcik/starcraft2-api/branch/master)
[![codecov](https://codecov.io/gh/lukemnet/starcraft2-api/branch/master/graph/badge.svg?token=L8OOti0dKF)](https://codecov.io/gh/lukemnet/starcraft2-api)

Feature-rich library for easy access to [StarCraft II Community APIs](https://develop.battle.net/documentation/starcraft-2/community-apis) and [StarCraft II Game Data APIs](https://develop.battle.net/documentation/starcraft-2/game-data-apis) powered by [BlizzAPI](https://github.com/lukemnet/blizzapi).


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

const data = await sc2api.queryProfile({
  regionId: 1,
  realmId: 1,
  profileId: 1084304,
});

console.log(data);
``` 

## Manual build

```bash
git clone https://github.com/lukemnet/starcraft2-api.git
cd starcraft2-api
npm install
npm run build
```

## Documentation & examples

* [starcraft2-api.lukem.net](https://starcraft2-api.lukem.net) - documentation
* [starcraft2-api-docs](https://github.com/lukemnet/starcraft2-api-docs) - documentation repo on GitHub
* [starcraft2-api-example](https://github.com/lukemnet/starcraft2-api-example) - sample Express.js REST API with usage examples
* [Repositories that depend on StarCraft2-API](https://github.com/lukemnet/starcraft2-api/network/dependents)

## Contributions

Contributions of any kind are welcome.

You can contribute to StarCraft2-API by:

* submiting a bug report or a feature suggestion
* improving documentation either within the project itself or in the [doc site repository](https://github.com/lukemnet/starcraft2-api-docs)
* submitting pull requests

Before contributing be sure to read [Contributing Guidelines](https://github.com/lukemnet/starcraft2-api/blob/master/CONTRIBUTING.md) and [Code of Conduct](https://github.com/lukemnet/starcraft2-api/blob/master/CODE_OF_CONDUCT.md).

## Contributors

To all who contribute code, improve documentation, submit issues or feature requests - thank you for making StarCraft2-API even better!

We maintain an [AUTHORS](https://github.com/lukemnet/starcraft2-api/blob/master/AUTHORS) file where we keep a list of all project contributors. Please consider adding your name there with your next PR.

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/starcraft2-api/blob/master/LICENSE) for more information.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
