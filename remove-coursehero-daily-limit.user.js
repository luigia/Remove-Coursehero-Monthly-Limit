// ==UserScript==
// @name Remove Coursehero Daily Limit
// @author Luigi Agcaoili - https://github.com/luigia
// @license MIT
// @include *coursehero.com/file/*
// @grant none
// ==/UserScript==
// remove dynamically added styles
document.body.className = '';
document.body.style.overflow = 'scroll';
// wait for element to load before removing it
const checkExist = setInterval(() => {
  if (document.querySelector('.mfp-wrap')) {
      document.querySelector('.mfp-wrap').remove();
      document.querySelector('.mfp-bg').remove(); 
      clearInterval(checkExist);
  }
}, 100);
