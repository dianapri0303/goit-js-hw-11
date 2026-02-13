import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54642224-9d417958e63225927c81dbcc1';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
