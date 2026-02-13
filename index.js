import{a as d,S as u,i as a}from"./assets/vendor-DhPgeubX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="54642224-9d417958e63225927c81dbcc1";function p(s){return d.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),h=new u(".gallery a",{captionsData:"title"});function y(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img 
  src="${t.webformatURL}" 
  alt="${t.tags}" 
  title="${t.tags.split(", ").slice(0,3).join(", ")}"
/>
        </a>
        <div class="info">
        <p><b>Likes</b> ${t.likes}</p>
                <p><b>Views</b> ${t.views}</p>
        <p><b>Comments</b> ${t.comments}</p>
        <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}const F=document.querySelector(".form");F.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();o&&(g(),b(),p(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",maxWidth:432,theme:"dark",iconColor:"#FFFFFF",progressBarColor:"#B51B1B",displayMode:0,close:!0,messageSize:"16"});return}y(t.hits)}).catch(()=>{a.error({message:"Something went wrong. Try again later."})}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
