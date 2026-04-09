import{i as u,S as B,a as w}from"./assets/vendor-CF_gOPOZ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}})();function E({id:e,comments:a,views:i,downloads:s,likes:t,largeImageURL:l,webformatURL:n,tags:b}){return`<li data-id=${e} class="gallery-card">
    <a href="${l}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${n}"
    alt="${b}"
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
      <p class="gallery-card__text">${s}</p>
    </li>
  </ul>
</a></li>`}function f(e){return e.map(E).join("")}function I(){u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function y(){u.error({title:"",message:"Something went wrong!"})}function v(){u.info({title:"",message:"Were sorry, but you have reached the end of search results."})}let m=null;function x(e,a){e.innerHTML=f(a),m||(m=new B(".gallery a",{captionsData:"alt",captionDelay:250})),m.refresh()}function h(e){e.innerHTML=""}function p(e){e.classList.remove("is-hidden")}function _(e){e.classList.add("is-hidden")}const S=w.create({baseURL:"https://pixabay.com/api/"});async function L(e,a){const i={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${e}`,orientation:"horizontal",safesearch:"true",per_page:"15",page:`${a}`};return(await S.get("",{params:i})).data}const r={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.getElementById("gallery-loader"),loaderBtn:document.querySelector(".js-load-btn")};let c,o=1,g;const $=15;let d;r.formElem.addEventListener("submit",D);async function D(e){if(e.preventDefault(),o=1,c={searchImg:new FormData(e.currentTarget).get("search-text").trim()},r.loaderBtn.classList.add("is-hidden"),h(r.listItemElem),c.searchImg.length!==0){p(r.loader);try{const s=await L(c.searchImg,o);if(s.hits.length===0){I(),h(r.listItemElem);return}g=s.totalHits,d=Math.ceil(g/$),x(r.listItemElem,s.hits),d>o&&r.loaderBtn.classList.remove("is-hidden"),o===d&&r.loaderBtn.classList.add("is-hidden")}catch{y()}finally{_(r.loader)}}}r.loaderBtn.addEventListener("click",P);async function P(e){e.preventDefault(),o+=1,r.loaderBtn.classList.add("is-hidden"),p(r.loader);try{const a=await L(c.searchImg,o),i=f(a.hits);if(r.listItemElem.insertAdjacentHTML("beforeend",i),q(),o>=d){r.loaderBtn.classList.add("is-hidden"),v();return}r.loaderBtn.classList.remove("is-hidden")}catch{y(),o-=1,r.loaderBtn.classList.remove("is-hidden")}finally{_(r.loader)}}function q(){const e=r.listItemElem.firstElementChild;if(!e)return;const{height:a}=e.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
