import StarCraft2API from './classes/StarCraft2API';

export {
  StarCraft2APIOptions,
  PlayerObject,
} from './types.d';

export default StarCraft2API;

/* istanbul ignore next */
if (module) module.exports = StarCraft2API;
