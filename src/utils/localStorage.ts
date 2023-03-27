export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  return window.localStorage.setItem(key, value);
};

export const removeLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key);
}