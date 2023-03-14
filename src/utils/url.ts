export const format = (rawUrl: string): string => {
  return `${process.env.API_BASE_URL}/${rawUrl}`;
};
