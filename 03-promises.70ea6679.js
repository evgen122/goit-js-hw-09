function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l={firstDelay:document.querySelector("[name='delay']"),delayStep:document.querySelector("[name='step']"),amount:document.querySelector("[name='amount']"),btnSubmit:document.querySelector("[type='submit']")};function u(t,n){return new Promise(((e,o)=>{setTimeout((()=>{Math.random()>.3?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}))}l.btnSubmit.addEventListener("click",(function(e){e.preventDefault();let t=Number(l.firstDelay.value);const n=Number(l.delayStep.value),o=Number(l.amount.value);for(let e=0;e<o;e++){u(e+1,t),t+=n}}));
//# sourceMappingURL=03-promises.70ea6679.js.map
