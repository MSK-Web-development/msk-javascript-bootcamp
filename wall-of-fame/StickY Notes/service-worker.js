/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
"use strict";

var precacheConfig = [
  ["css/styles.css", "0035a936e7564364ea596d82b99f9f2b"],
  [
    "favicon_package_v0.16/android-chrome-192x192.png",
    "6f8de67e94d660023453479d677402ce",
  ],
  [
    "favicon_package_v0.16/browserconfig.xml",
    "a493ba0aa0b8ec8068d786d7248bb92c",
  ],
  [
    "favicon_package_v0.16/favicon-16x16.png",
    "dcfbdedd552320ca05d5c53d99599607",
  ],
  [
    "favicon_package_v0.16/favicon-32x32.png",
    "c3c36d309be8dd5122be100edb49669d",
  ],
  ["favicon_package_v0.16/favicon.ico", "9f492ddbf4281a2ec0ee5c0cb8e26aaf"],
  ["favicon_package_v0.16/logo.png", "588c48a93e127adddb717bf616e1c59e"],
  [
    "favicon_package_v0.16/mstile-150x150.png",
    "3bf59f35025555a61d8471f59510d041",
  ],
  [
    "favicon_package_v0.16/safari-pinned-tab.svg",
    "0c392990ecc5e4885d5344f6df6f3c2e",
  ],
  [
    "favicon_package_v0.16/site.webmanifest",
    "c2f552420ee251e4422ca9294463ba95",
  ],
  ["index.html", "850204f79c69061ed0ba8fbbd56c3a32"],
  ["javascript/script.js", "64cec3bc9fed28581b7fa11ce298ee9d"],
  ["logo.png", "588c48a93e127adddb717bf616e1c59e"],
  ["logoImg.png", "0ba59f625afc01e2fcb8cc770c084c63"],
  ["manifest.json", "88529b1f3ab81c850923c29dcd8cf742"],
  ["practice/class.js", "4d2803b76873113502f14ac91ee06d50"],
  ["practice/cookies.html", "69a54f7e846411e9c9b3026e00127b54"],
  ["practice/dialogbox.html", "3a3dbac1556e75273cb693aa8d1ac77f"],
  ["practice/es6arrow.js", "0261556619e5bef358ad2983998ddead"],
  ["practice/localStorage.html", "583b7a0055b938b4a2891869505862a4"],
  ["practice/objects.js", "0eb8739ae93602801e5b7a21fba8ffb8"],
  ["practice/pageRedirection.html", "d142d1bdad9fc4bf990b2621da1a9645"],
  ["practice/promise.js", "4fd21234b7d44c522d64d724bc88179f"],
  ["practice/querySelector.html", "aaffa6a751c9e527e0063886a15b7b27"],
];
var cacheName =
  "sw-precache-v3-sw-precache-" +
  (self.registration ? self.registration.scope : "");

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === "/") {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise =
    "body" in originalResponse
      ? Promise.resolve(originalResponse.body)
      : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (
  originalUrl,
  paramName,
  paramValue,
  dontCacheBustUrlsMatching
) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (
    !dontCacheBustUrlsMatching ||
    !url.pathname.match(dontCacheBustUrlsMatching)
  ) {
    url.search +=
      (url.search ? "&" : "") +
      encodeURIComponent(paramName) +
      "=" +
      encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (
  originalUrl,
  ignoreUrlParametersMatching
) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = "";

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split("&") // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split("="); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join("="); // Join each [key, value] array into a 'key=value' string
    })
    .join("&"); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = "_sw-precache";
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {
                  credentials: "same-origin",
                });
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error(
                      "Request for " +
                        cacheKey +
                        " returned a " +
                        "response with status " +
                        response.status
                    );
                  }

                  return cleanResponse(response).then(function (
                    responseToCache
                  ) {
                    return cache.put(cacheKey, responseToCache);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            })
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(
      event.request.url,
      ignoreUrlParametersMatching
    );
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = "index.html";
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = "";
    if (
      !shouldRespond &&
      navigateFallback &&
      event.request.mode === "navigate" &&
      isPathWhitelisted([], event.request.url)
    ) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache
              .match(urlsToCacheKeys.get(url))
              .then(function (response) {
                if (response) {
                  return response;
                }
                throw Error(
                  "The cached response that was expected is missing."
                );
              });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              event.request.url,
              e
            );
            return fetch(event.request);
          })
      );
    }
  }
});
