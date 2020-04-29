
import galleryItems from './gallery-items.js';

const refs = {
    ul: document.querySelector('.gallery'),
    div: document.querySelector('.lightbox'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightbox: document.querySelector('.lightbox'),
    closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
    lightboxContent: document.querySelector('.lightbox__content'),
};

const galleryMarkup = galleryItems.reduce((acc, item) => {
    const itemMarkup = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
  </li>`;

    acc += itemMarkup;

    return acc;
}, '');

refs.ul.insertAdjacentHTML('beforeend', galleryMarkup);
refs.ul.addEventListener('click', handleImgClick);

function handleImgClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    }

    refs.lightboxImage.src = e.target.dataset.source;
    refs.lightboxImage.alt = e.target.getAttribute('alt');

    refs.div.classList.add('is-open');
    window.addEventListener('keydown', handleKeyPress);
}
refs.closeModalBtn.addEventListener('click', closeModal);
refs.lightboxContent.addEventListener('click', handleOverlayClick);

function closeModal() {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
    window.removeEventListener('keydown', handleKeyPress);
}

function handleOverlayClick(event) {
    if (event.target !== event.currentTarget) {
        return;
    }

    closeModal();
}

function handleKeyPress(event) {
    if (event.code !== 'Escape') {
        return;
    }

    closeModal();
}
