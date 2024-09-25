import{S as u,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f="46168146-32b0147d59d6daaf7b97d8253",p="https://pixabay.com/api/";async function m(t){const o=await fetch(`${p}?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`);if(!o.ok)throw new Error("Failed to fetch images");return o.json()}let i;function y(t){const o=document.querySelector(".gallery");o.innerHTML=t.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join(""),i?i.refresh():i=new u(".gallery a")}function a(t){d.error({title:"Error",message:t})}function h(){const t=document.querySelector(".loader");t.style.display="block"}function l(){const t=document.querySelector(".loader");t.style.display="none"}const g=document.querySelector(".search-form"),L=document.querySelector(".search-input");g.addEventListener("submit",async t=>{t.preventDefault();const o=L.value.trim();if(o===""){a("Please enter a search query");return}h();try{const r=await m(o);l(),r.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!"):y(r.hits)}catch{l(),a("Failed to fetch images. Please try again later.")}});
//# sourceMappingURL=index.js.map
