export const removeBaseUrl = (url: string) => {
  const baseUrl = 'https://swapi.py4e.com/api/';

  if (url.startsWith(baseUrl)) {
    return url.substring(baseUrl.length);
  }
  return url;
}
