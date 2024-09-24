
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => `
        <div class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
    </div>
    `).join('');
}

export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: 'message',
    });
}