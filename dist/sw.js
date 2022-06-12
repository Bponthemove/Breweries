importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

console.log('custom sw being generated');

workbox.routing.registerRoute(
    /(\/|\.html)$/,
    new workbox.strategies.NetworkFirst()
  );

workbox.precaching.precacheAndRoute([{"revision":"29e664fc9b5316b207843e636a009a08","url":"index.html"},{"revision":"cec1ccfa13cd8e6d04f07af4addaa6a4","url":"index.js"}]);