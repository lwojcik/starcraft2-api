const Profile = require('./api/profile');
const Ladder = require('./api/ladder');
const Account = require('./api/account');
const Legacy = require('./api/legacy');

class StarCraft2API {
    constructor(clientID, clientSecret) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
    }
    
    Profile() {
        return new Profile(this.clientID, this.clientSecret);
    }

    Ladder() {
        return new Ladder(this.clientID, this.clientSecret);
    }

    Account() {
        return new Account(this.clientID, this.clientSecret);
    }

    Legacy() {
        return new Legacy(this.clientID, this.clientSecret);
    }
}

module.exports = StarCraft2API;
