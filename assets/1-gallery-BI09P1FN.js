import{S as c}from"./vendor-CgTBfC_f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s=[{preview:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",original:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",description:"Beautiful Tree in Field"},{preview:"https://cdn.pixabay.com/photo/2016/02/19/11/23/iceberg-1209494__340.jpg",original:"https://cdn.pixabay.com/photo/2016/02/19/11/23/iceberg-1209494_1280.jpg",description:"Floating Iceberg"},{preview:"https://cdn.pixabay.com/photo/2015/03/26/09/41/landscape-690588__340.jpg",original:"https://cdn.pixabay.com/photo/2015/03/26/09/41/landscape-690588_1280.jpg",description:"Mountain Landscape"}],l=document.querySelector(".gallery"),p=s.map(({preview:a,original:o,description:r})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${r}"
          />
        </a>
      </li>
    `).join("");l.innerHTML=p;new c(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery-BI09P1FN.js.map
