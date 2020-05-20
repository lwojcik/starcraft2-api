import constants from '../constants';

type ProfileUrlLocale = string;

/**
 * Returns a list of all profile URL locales
 *
 * @return List of all available profile URL locales as array of strings.
 */
export const getAllProfileUrlLocales = () => constants.PROFILE_URL_LOCALES;

/**
 * Verifies whether profile URL locale matches the regex pattern
 *
 * @param locale Profile URL locale
 * @return true if profile URL locale matches the pattern, false if not
 */
export const checkIfProfileUrlLocaleLooksValid = (profileUrlLocale: ProfileUrlLocale) => {
  const profileUrlLocaleRegex = /^(?:[a-z]{2}-[a-z]{2})$/gi;
  const doesProfileUrlLocaleLookValid = profileUrlLocaleRegex.test(profileUrlLocale);

  // tslint:disable-next-line: no-object-mutation
  profileUrlLocaleRegex.lastIndex = 0;
  return doesProfileUrlLocaleLookValid;
};

/**
 * Validates locale profile URL locale against profile URL locale list
 * (whether it exists in the constants object)
 *
 * @param locale Locale name
 * @return true if profile URL locale exists, false if not.
 * Throws RangeError if profile URL locale doesn't match regex pattern
 */
export const validateProfileUrlLocale = (profileUrlLocale: ProfileUrlLocale) => {
  const isProfileUrlLocaleValid = checkIfProfileUrlLocaleLooksValid(profileUrlLocale);
  const availableProfileUrlLocales = getAllProfileUrlLocales();
  const lowerCaseLocale = profileUrlLocale.toLowerCase();

  if (!isProfileUrlLocaleValid) {
    throw new RangeError(`${profileUrlLocale} is not a valid parameter for validateProfileUrlLocale()`);
  }

  return availableProfileUrlLocales.includes(lowerCaseLocale);
};
