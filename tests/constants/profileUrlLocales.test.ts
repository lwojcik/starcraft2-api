import { profileUrlLocales } from '../../src/constants/profileUrlLocales';

describe('profileUrlLocales', () => {
  it('should match snapshot', () => {
    expect(profileUrlLocales).toMatchSnapshot();
  });
});
