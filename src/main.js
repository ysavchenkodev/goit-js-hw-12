//*  ======================================================

import {
    notFoundImage,
    somethingWrong,
    clearGallery,
    showLoader,
    hideLoader,
    renderGallery,
    appendGallery,
    reachedSearch,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions";
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
    hideLoadMoreButton(refs.loaderBtn);
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
            showLoadMoreButton(refs.loaderBtn);
        }
        if (currentPage === maxPage) {
             hideLoadMoreButton(refs.loaderBtn);
             reachedSearch();
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
    hideLoadMoreButton(refs.loaderBtn);
    showLoader(refs.loader);

    try {
        const result = await getImagesByQuery(objFormData.searchImg, currentPage);
        appendGallery(refs.listItemElem, result.hits);
        smoothScrollByCardHeight();

        if (currentPage >= maxPage) {
            hideLoadMoreButton(refs.loaderBtn);
            reachedSearch();
            return;
        }

        showLoadMoreButton(refs.loaderBtn);
    } catch {
        somethingWrong();
        currentPage -= 1;
        showLoadMoreButton(refs.loaderBtn);
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
