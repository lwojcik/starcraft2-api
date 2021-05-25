import { getAllProfileUrlLocales } from '../../../src/helpers/profileUrlLocales/getAllProfileUrlLocales';

describe('getAllProfileUrlLocales', () => {
  it('should match snapshot', () => {
    expect(getAllProfileUrlLocales()).toMatchSnapshot();
  });
});
