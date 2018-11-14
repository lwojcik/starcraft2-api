const fetch = require('cross-fetch');

/**
 * Constructs API url depending on region and gateway selection.
 * @function
 * @param {integer} region - server name abbreviation.
 * @param {string} requestPath - Path to request from.
 * @returns {Promise} Promise object representing data fetched from Battle.net API.
 */

const constructApiPath = (region, endpoint, useChinaGateway = false) => {
  if (useChinaGateway) {
    return `https://gateway.battlenet.com.cn${endpoint}`;
  }
  return `https://${region}.api.blizzard.com/${endpoint}`;
}

// const getAccessTokenObjectFromBattleNet = async (server, clientId, clientSecret) => {
//   const accessTokenRequestServer = bnetConfig.getAccessTokenUri[server];
//   const accessTokenApiPath = `/oauth/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
//   const accessTokenRequestUri = `${accessTokenRequestServer}${accessTokenApiPath}`;

//   try {
//     const data = await fetch(accessTokenRequestUri);
//     return data.json();
//   } catch (error) {
//     return error;
//   }
// };

// const query = async (requestUri) => {
//   try {
//     const data = await fetch(requestUri);
//     return data.json();
//   } catch (error) {
//     return error;
//   }
// };

class BattleNet {
  constructor(clientID, clientSecret, locale) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.locale = locale;
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
