//*  ======================================================
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//*  ======================================================

export function toMarkup({ id, comments, views, downloads, likes, largeImageURL, webformatURL, tags }) {
    
    return `<li data-id=${id} class="gallery-card">
    <a href="${largeImageURL}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${webformatURL}"
    alt="${tags}"
    width="360"
    height="240"
  />

  <ul class="gallery-card__info">
    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Likes</h3>
      <p class="gallery-card__text">${likes}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Views</h3>
      <p class="gallery-card__text">${views}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Comments</h3>
      <p class="gallery-card__text">${comments}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Downloads</h3>
      <p class="gallery-card__text">${downloads}</p>
    </li>
  </ul>
</a></li>` }
//*  ======================================================
// 
export function toTotalmarkup(array)
{ return array.map(toMarkup).join('') }

//*  ======================================================

export function notFoundImage() {
    iziToast.error({
        title: '',
        message: 'Sorry, there are no images matching your search query. Please try again!'
    });
}
export function somethingWrong() {
    iziToast.error({
        title: '',
        message: 'Something went wrong!'
    });
}

//*  ======================================================

let lightbox = null;

export function renderGallery(element, data) {
  element.innerHTML = toTotalmarkup(data);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  lightbox.refresh();
}
//*  ======================================================

 export function clearGallery(element) {
    element.innerHTML = '';
}
 export function showLoader(loader) {
    loader.classList.add('is-active');
}

 export function hideLoader(loader) {
    loader.classList.remove('is-active');
}

//*  ======================================================


//*  ======================================================

