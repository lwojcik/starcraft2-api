const profile = require('./profile');
const ladder = require('./ladder');
const account = require('./account');
const legacy = require('./legacy');

class StarCraft2API {
    set clientID(clientID) {
        this._clientID = clientID;
    }

    set clientSecret(clientSecret) {
        this._clientSecret = clientSecret;
    }

    Profile() {
        return profile();
    }

    Ladder() {
        return ladder();
    }

    Account() {
        return account();
    }

    Legacy() {
        return legacy();
    }
}

module.exports = starcraft2api;
