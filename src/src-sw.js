importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

console.log('custom sw being generated');

workbox.routing.registerRoute(
    /(\/|\.html)$/,
    new workbox.strategies.NetworkFirst()
  );

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);