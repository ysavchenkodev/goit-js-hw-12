//*  ======================================================

import { notFoundImage,somethingWrong, clearGallery, showLoader, hideLoader, renderGallery, toTotalmarkup, reachedSearch} from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";

//*  ======================================================
// 
const refs = {
    listItemElem: document.querySelector('.gallery'),
    formElem: document.querySelector('.form'),
    loader: document.getElementById('gallery-loader'),
    loaderBtn: document.querySelector('.js-load-btn'),
}

//*  ======================================================
let objFormData;
let currentPage = 1;
let totalPage;
const countPage = 15;
let maxPage;
refs.formElem.addEventListener('submit', handleFormElemSubmit);
async function handleFormElemSubmit(event) {
    event.preventDefault();
    currentPage = 1;
    const formData = new FormData(event.currentTarget);
      objFormData = {
        searchImg: formData.get('search-text').trim(),
    };
    refs.loaderBtn.classList.add('is-hidden');
    clearGallery(refs.listItemElem)
    const len = objFormData.searchImg.length;
    if (len === 0) return;
    showLoader(refs.loader)

    try {
        const result = await getImagesByQuery(objFormData.searchImg, currentPage);
        const len = result.hits.length
            if (len === 0) {
                notFoundImage();
                clearGallery(refs.listItemElem);
                return;
            }
        totalPage = result.totalHits;
        maxPage = Math.ceil(totalPage / countPage);
        renderGallery(refs.listItemElem, result.hits);
        if (maxPage > currentPage) {
            refs.loaderBtn.classList.remove('is-hidden')
        }
        if (currentPage === maxPage) {
             refs.loaderBtn.classList.add('is-hidden')
        }
        
    } catch {
        somethingWrong();
    } finally {
        hideLoader(refs.loader) 
    }
    
};

//*  ======================================================

refs.loaderBtn.addEventListener('click', handleLoaderBtnClick);

async function handleLoaderBtnClick(event) {
    event.preventDefault();
    currentPage += 1;
    refs.loaderBtn.classList.add('is-hidden');
    showLoader(refs.loader);

    try {
        const result = await getImagesByQuery(objFormData.searchImg, currentPage);
        const markup = toTotalmarkup(result.hits);
        refs.listItemElem.insertAdjacentHTML('beforeend', markup);
        smoothScrollByCardHeight();

        if (currentPage >= maxPage) {
            refs.loaderBtn.classList.add('is-hidden');
            reachedSearch();
            return;
        }

        refs.loaderBtn.classList.remove('is-hidden');
    } catch {
        somethingWrong();
        currentPage -= 1;
        refs.loaderBtn.classList.remove('is-hidden');
    } finally {
        hideLoader(refs.loader);
    }
}

function smoothScrollByCardHeight() {
    const galleryCard = refs.listItemElem.firstElementChild;

    if (!galleryCard) {
        return;
    }

    const { height } = galleryCard.getBoundingClientRect();

    window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
    });
}

