import fetch from 'isomorphic-unfetch';
import { URL, URLSearchParams } from 'url';

export const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const youtubeSearch = (options = {}) => new Promise((resolve, reject) => {
  if (!options.key || !options.term || !options.part || !options.type) {
    reject(new Error('Please make sure that the required fields are inserted'));
  }

  const url = new URL(ROOT_URL);
  url.search = new URLSearchParams(options);

  fetch(url.href)
    .then((response) => resolve(response.json()))
    .catch(reject);
});

export default youtubeSearch;
