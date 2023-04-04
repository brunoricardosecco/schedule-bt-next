export const useLocalStorage = () => {
  const set = (key: string, value: string) => {
    localStorage.setItem(`agendaBeach:${key}`, value);
  };
  const get = (key: string) => {
    localStorage.getItem(`agendaBeach:${key}`);
  };
  const remove = (key: string) => {
    localStorage.removeItem(`agendaBeach:${key}`);
  };

  return { set, get, remove };
};
