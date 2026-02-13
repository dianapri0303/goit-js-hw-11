import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import 'loaders.css/loaders.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching <br> your search query. Please try again!',
          messageColor: '#FFFFFF',
          backgroundColor: '#EF4040',
          position: 'topRight',
          maxWidth: 432,
          theme: 'dark',
          iconColor: '#FFFFFF',
          progressBarColor: '#B51B1B',
          displayMode: 0,
          close: true,
          messageSize: '16',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
