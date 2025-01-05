export const urlValidator = (url: string) => {
  const regex = /^https?:\/\//;
  return regex.test(url);
};
