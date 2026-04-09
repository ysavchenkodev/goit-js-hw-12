import{i as f,S as p,a as I}from"./assets/vendor-CF_gOPOZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function S({id:e,comments:t,views:n,downloads:o,likes:r,largeImageURL:l,webformatURL:c,tags:E}){return`<li data-id=${e} class="gallery-card">
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
      <p class="gallery-card__text">${r}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Views</h3>
      <p class="gallery-card__text">${n}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Comments</h3>
      <p class="gallery-card__text">${t}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Downloads</h3>
      <p class="gallery-card__text">${o}</p>
    </li>
  </ul>
</a></li>`}function _(e){return e.map(S).join("")}function x(){f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function L(){f.error({title:"",message:"Something went wrong!"})}function D(){f.info({title:"",message:"Were sorry, but you have reached the end of search results."})}let s=null;function $(e,t){e.innerHTML=_(t),s||(s=new p(".gallery a",{captionsData:"alt",captionDelay:250})),s.refresh()}function v(e,t){e.insertAdjacentHTML("beforeend",_(t)),s||(s=new p(".gallery a",{captionsData:"alt",captionDelay:250})),s.refresh()}function h(e){e.innerHTML=""}function b(e){e.classList.remove("is-hidden")}function w(e){e.classList.add("is-hidden")}function M(e){e.classList.remove("is-hidden")}function g(e){e.classList.add("is-hidden")}function m(e,t,n){if(t>=n){g(e),D();return}M(e)}const P=I.create({baseURL:"https://pixabay.com/api/"});async function B(e,t){const n={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${e}`,orientation:"horizontal",safesearch:"true",per_page:"15",page:`${t}`};return(await P.get("",{params:n})).data}const a={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.getElementById("gallery-loader"),loaderBtn:document.querySelector(".js-load-btn")};let d,i=1,y;const q=15;let u;a.formElem.addEventListener("submit",C);async function C(e){if(e.preventDefault(),i=1,d={searchImg:new FormData(e.currentTarget).get("search-text").trim()},g(a.loaderBtn),h(a.listItemElem),d.searchImg.length!==0){b(a.loader);try{const o=await B(d.searchImg,i);if(o.hits.length===0){x(),h(a.listItemElem);return}y=o.totalHits,u=Math.ceil(y/q),$(a.listItemElem,o.hits),m(a.loaderBtn,i,u)}catch{L()}finally{w(a.loader)}}}a.loaderBtn.addEventListener("click",O);async function O(e){e.preventDefault(),i+=1,g(a.loaderBtn),b(a.loader);try{const t=await B(d.searchImg,i);v(a.listItemElem,t.hits),T(),m(a.loaderBtn,i,u)}catch{L(),i-=1,m(a.loaderBtn,i,u)}finally{w(a.loader)}}function T(){const e=a.listItemElem.firstElementChild;if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
