!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u={firstDelay:document.querySelector("[name='delay']"),delayStep:document.querySelector("[name='step']"),amount:document.querySelector("[name='amount']"),btnSubmit:document.querySelector("[type='submit']")};function a(n,t){return new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}u.btnSubmit.addEventListener("click",(function(e){e.preventDefault();for(var n=Number(u.firstDelay.value),t=Number(u.delayStep.value),o=Number(u.amount.value),i=0;i<o;i++){a(i+1,n),n+=t}}))}();
//# sourceMappingURL=03-promises.88ef1eb6.js.map