import profileUrlRegex from './profileUrlRegex';

/**
 * Verifies whether profile URL locale matches regex pattern
 *
 * @param profileUrl Profile URL locale (e.g. 'en-us')
 * @return true if profile URL matches the pattern, false if not
 */
export default (profileUrl: string) =>
  profileUrlRegex.test(profileUrl);
