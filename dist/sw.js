importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

console.log('custom sw being generated');

workbox.routing.registerRoute(
    /(\/|\.html)$/,
    new workbox.strategies.NetworkFirst()
  );

workbox.precaching.precacheAndRoute([{"revision":"2e8f6a05d0aedf38ff97646e872ae3a8","url":"index.html"},{"revision":"f5b6827e3b9abcb5f42b4628069f5235","url":"main.js"}]);