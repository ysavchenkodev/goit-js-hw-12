import{i as g,S as p,a as I}from"./assets/vendor-CF_gOPOZ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}})();function x({id:e,comments:a,views:i,downloads:o,likes:t,largeImageURL:l,webformatURL:c,tags:E}){return`<li data-id=${e} class="gallery-card">
    <a href="${l}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${c}"
    alt="${E}"
    width="360"
    height="240"
  />

  <ul class="gallery-card__info">
    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Likes</h3>
      <p class="gallery-card__text">${t}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Views</h3>
      <p class="gallery-card__text">${i}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Comments</h3>
      <p class="gallery-card__text">${a}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Downloads</h3>
      <p class="gallery-card__text">${o}</p>
    </li>
  </ul>
</a></li>`}function _(e){return e.map(x).join("")}function D(){g.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function L(){g.error({title:"",message:"Something went wrong!"})}function S(){g.info({title:"",message:"Were sorry, but you have reached the end of search results."})}let s=null;function $(e,a){e.innerHTML=_(a),s||(s=new p(".gallery a",{captionsData:"alt",captionDelay:250})),s.refresh()}function v(e,a){e.insertAdjacentHTML("beforeend",_(a)),s||(s=new p(".gallery a",{captionsData:"alt",captionDelay:250})),s.refresh()}function h(e){e.innerHTML=""}function b(e){e.classList.remove("is-hidden")}function B(e){e.classList.add("is-hidden")}function f(e){e.classList.remove("is-hidden")}function m(e){e.classList.add("is-hidden")}const P=I.create({baseURL:"https://pixabay.com/api/"});async function w(e,a){const i={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${e}`,orientation:"horizontal",safesearch:"true",per_page:"15",page:`${a}`};return(await P.get("",{params:i})).data}const r={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.getElementById("gallery-loader"),loaderBtn:document.querySelector(".js-load-btn")};let d,n=1,y;const M=15;let u;r.formElem.addEventListener("submit",q);async function q(e){if(e.preventDefault(),n=1,d={searchImg:new FormData(e.currentTarget).get("search-text").trim()},m(r.loaderBtn),h(r.listItemElem),d.searchImg.length!==0){b(r.loader);try{const o=await w(d.searchImg,n);if(o.hits.length===0){D(),h(r.listItemElem);return}y=o.totalHits,u=Math.ceil(y/M),$(r.listItemElem,o.hits),u>n&&f(r.loaderBtn),n===u&&m(r.loaderBtn)}catch{L()}finally{B(r.loader)}}}r.loaderBtn.addEventListener("click",C);async function C(e){e.preventDefault(),n+=1,m(r.loaderBtn),b(r.loader);try{const a=await w(d.searchImg,n);if(v(r.listItemElem,a.hits),O(),n>=u){m(r.loaderBtn),S();return}f(r.loaderBtn)}catch{L(),n-=1,f(r.loaderBtn)}finally{B(r.loader)}}function O(){const e=r.listItemElem.firstElementChild;if(!e)return;const{height:a}=e.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
