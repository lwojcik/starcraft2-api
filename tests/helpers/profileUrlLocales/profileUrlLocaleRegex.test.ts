import { profileUrlLocaleRegex } from '../../../src/helpers/profileUrlLocales/profileUrlLocaleRegex';

describe('getAllProfileUrlLocales', () => {
  it('should match snapshot', () => {
    expect(profileUrlLocaleRegex).toMatchSnapshot();
  });
});
