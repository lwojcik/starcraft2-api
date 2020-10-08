import profileUrlLocaleRegex from './profileUrlLocaleRegex';

/**
 * Verifies whether profile URL locale matches regex pattern
 *
 * @param profileUrlLocale Profile URL locale (e.g. 'en-us')
 * @return true if profile URL locale matches the pattern, false if not
 */
export default (profileUrlLocale: string) =>
  profileUrlLocaleRegex.test(profileUrlLocale);
