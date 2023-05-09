const LOCAL_STORAGE_PREFIX = "agendaBeachPrefix";
const ACCESS_TOKEN = "accessToken";

export const useLocalStorage = () => {
  const set = (key: string, value: string) => {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}:${key}`, value);
  };
  const get = (key: string): string => {
    return localStorage.getItem(`${LOCAL_STORAGE_PREFIX}:${key}`) ?? "";
  };
  const remove = (key: string) => {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}:${key}`);
  };

  return { set, get, remove };
};

export const getAccessToken = (): string => {
  return localStorage.getItem(`${LOCAL_STORAGE_PREFIX}:${ACCESS_TOKEN}`) ?? "";
};

export const setAccessToken = (value: string): void => {
  localStorage.setItem(`${LOCAL_STORAGE_PREFIX}:${ACCESS_TOKEN}`, value);
};
