class BattleNet {
    constructor(clientID, clientSecret, locale) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
    }

    query(server, apiPath, locale) {
        const clientID = this.clientID;
        const clientSecret = this.clientSecret;

        return {
            clientID,
            clientSecret,
            server,
            apiPath,
            locale,
        }        
    }
}

module.exports = BattleNet;
