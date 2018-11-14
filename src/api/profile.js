const BattleNet = require('./battlenet');

class Profile {
    constructor(clientID, clientSecret, locale) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.locale = locale;
    }

    getStatic(server, region, locale) {
        const BnetClient = new BattleNet(this.clientID, this.clientSecret);
        return BnetClient.query(server, `/sc2/static/profile/${region}`, locale);
    }
}

module.exports = Profile;
