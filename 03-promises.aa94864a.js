var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("eWCmQ");const r=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]');let d=0,a=0,c=0,f=0;r.addEventListener("submit",(e=>{e.preventDefault(),a=Number(u.value),c=Number(l.value),f=Number(i.value),function(){if(d===f)return;setTimeout((()=>{d+=1,a+=c,console.log(d),console.log(a)}),a)}()}));
//# sourceMappingURL=03-promises.aa94864a.js.map
