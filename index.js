import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="46168146-32b0147d59d6daaf7b97d8253",l="https://pixabay.com/api/";async function f(s){const r=await fetch(`${l}?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}function d(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(o=>`
        <div class="gallery-item">
      <img src="${o.webformatURL}" alt="${o.tags}" />
    </div>
    `).join("")}function n(s){a.error({title:"Error",message:"message"})}const m=document.querySelector(".search-form"),y=document.querySelector(".search-input");m.addEventListener("submit",async s=>{s.preventDefault();const r=y.value.trim();if(r===""){n();return}try{const o=await f(r);o.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):d(o.hits)}catch{n()}});
//# sourceMappingURL=index.js.map
