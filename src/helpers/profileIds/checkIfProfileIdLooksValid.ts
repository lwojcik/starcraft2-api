export default (profileId: number | string) =>
  profileId.toString() === parseInt(profileId as string, 10).toString();
