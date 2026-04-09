//*  ======================================================

import { notFoundImage,somethingWrong, clearGallery, showLoader, hideLoader, renderGallery} from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";
import 'pure-css-loader/dist/css-loader.css';

//*  ======================================================

const refs = {
    listItemElem: document.querySelector('.gallery'),
    formElem: document.querySelector('.form'),
    loader: document.querySelector('.loader'),
}

//*  ======================================================


refs.formElem.addEventListener('submit', handleFormElemSubmit);

function handleFormElemSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const objFormData = {
        searchImg: formData.get('search-text'),
    };
    clearGallery(refs.listItemElem)
    const len = objFormData.searchImg.length;
    if (len === 0) return;
    showLoader(refs.loader)
    getImagesByQuery(objFormData.searchImg)
       .then((res) => {
            const len = res.hits.length
            if (len === 0) {
                notFoundImage();
                clearGallery(refs.listItemElem);
                return;
            }
           renderGallery(refs.listItemElem, res.hits)
       }).catch((error) => {
            somethingWrong();
        }).finally(() => {
            hideLoader(refs.loader) 
        })
};


//*  ======================================================

