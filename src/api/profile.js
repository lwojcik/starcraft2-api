const BattleNet = require('./battlenet');

class Profile {
    constructor(clientID, clientSecret, locale) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.locale = locale;
    }

    getStatic(server, region, locale) {
        const clientID = this.clientID;
        const clientSecret = this.clientSecret;

        const BnetClient = new BattleNet(clientID, clientSecret);
        return BnetClient.query(server, `/sc2/static/profile/${region}`, locale);
    }
}

module.exports = Profile;
