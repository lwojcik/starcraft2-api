// import { BlizzAPI } from 'blizzapi';

// tslint:disable no-class no-expression-statement no-this
class StarCraft2API {
  readonly region: number | string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly accessToken: string;
  readonly options: object;

  constructor(
    region: number | string,
    clientId: string,
    clientSecret: string,
    accessToken?: string,
    options?: object,
  ) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken || '';
    this.options = options || {};
  }
}
// tslint:enable no-class no-expression-statement

export default StarCraft2API;
