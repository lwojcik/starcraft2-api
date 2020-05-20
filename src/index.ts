import StarCraft2API, { StarCraft2APIOptions, PlayerObject } from './lib/classes/StarCraft2API';

export { StarCraft2APIOptions, PlayerObject };
export default StarCraft2API;

/* istanbul ignore next */
// tslint:disable no-object-mutation
if (module) module.exports = StarCraft2API;
