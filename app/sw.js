/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox/workbox-v4.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "730c5185fc5bde3d10e48a39494772cd"
  },
  {
    "url": "styles/style.css",
    "revision": "16358a7b5a71506bd7aecfc6fbe5054c"
  },
  {
    "url": "js/cities.js",
    "revision": "56e105c11f3ecbf339826a282fbd8c38"
  },
  {
    "url": "js/content.js",
    "revision": "50437b1179edacf144d213782083b6b2"
  },
  {
    "url": "js/dialog.js",
    "revision": "854d1e671ddf347d0f7dc8b0a5ca7cc9"
  },
  {
    "url": "js/main.js",
    "revision": "6c42bb01d84810f8f3acf09262bf121d"
  },
  {
    "url": "js/model.js",
    "revision": "d4fa0b056e769b2c10440c5cb5acfdd0"
  },
  {
    "url": "resources/travel.jpg",
    "revision": "1a7ecf0809b9380718d2a1b59ad0cd0f"
  },
  {
    "url": "resources/img/birdnest.jpg",
    "revision": "1cca35738c3707446788cc4b8cdf7f56"
  },
  {
    "url": "resources/img/bund.jpg",
    "revision": "785815dce08f9801e385c1d3b332396e"
  },
  {
    "url": "resources/img/centrypark.jpg",
    "revision": "45bb809a16bf60599803ab639ce1e0cb"
  },
  {
    "url": "resources/img/dianchi.JPG",
    "revision": "52ac6352ad187ce43b831cd51fc818f6"
  },
  {
    "url": "resources/img/disney.jpg",
    "revision": "d7e26fcd53eea061c3466f279244a54c"
  },
  {
    "url": "resources/img/gong.jpg",
    "revision": "4d6e2ef6106d87b6b15be6630fcfde5f"
  },
  {
    "url": "resources/img/greatwall.jpg",
    "revision": "11dfe939164b8962fb9e346e7f65d4e9"
  },
  {
    "url": "resources/img/greatwall1.jpg",
    "revision": "4a84bfc2ddef49b1ed29bf9c5657c1f1"
  },
  {
    "url": "resources/img/gubei.jpg",
    "revision": "251c9aacd3c5d34aaed0eb3f755d9fce"
  },
  {
    "url": "resources/img/gugong.jpg",
    "revision": "11804bf68778dd1e3ff18c50591f69a3"
  },
  {
    "url": "resources/img/gugong2.jpg",
    "revision": "2308a7a6dfabe29d5779bab8e6e89ea8"
  },
  {
    "url": "resources/img/heaven.jpg",
    "revision": "86bce592325287b41a2b45db48d31c22"
  },
  {
    "url": "resources/img/longhua.jpg",
    "revision": "4ad164c015ac4b17449d30a8201629ac"
  },
  {
    "url": "resources/img/observatory.jpg",
    "revision": "7c650f5420a243f95a659da46e862dd7"
  },
  {
    "url": "resources/img/Œƒ±æ.txt",
    "revision": "557be5021010580cd653addb7b791b40"
  },
  {
    "url": "resources/img/olympic.jpg",
    "revision": "c71aebd0037a12f5e222a6b85c689f14"
  },
  {
    "url": "resources/img/optower.jpg",
    "revision": "5050e9727a9ce78b26777301ea25bb89"
  },
  {
    "url": "resources/img/psquare.jpg",
    "revision": "80635dd53814cee78feef81f744c2761"
  },
  {
    "url": "resources/img/sf.JPG",
    "revision": "5dd428821c0fc053dd209358b86bfe4e"
  },
  {
    "url": "resources/img/shnjroad.jpg",
    "revision": "1b67d228496089304b15287bc8feb440"
  },
  {
    "url": "resources/img/shsm.jpg",
    "revision": "16c19e77e60a9570e0bcffd148a414db"
  },
  {
    "url": "resources/img/shzoo.jpg",
    "revision": "5aab9acc1f3e5899eca5eda419ebe78f"
  },
  {
    "url": "resources/img/smuseum.jpg",
    "revision": "ac545fa87926f618cac243e718b2de9b"
  },
  {
    "url": "resources/img/stoneforest.webp",
    "revision": "72aa02cc9709c440454c5b649bf1f950"
  },
  {
    "url": "resources/img/summerpalace.jpg",
    "revision": "91af6001325f314b54033b9d49763fcd"
  },
  {
    "url": "resources/img/tam.jpg",
    "revision": "d8b6e261d93f30f3d807d5f849d89ec1"
  },
  {
    "url": "resources/img/tiananmen.jpg",
    "revision": "28420acbec888e2a0bf17422ee65ef93"
  },
  {
    "url": "resources/img/wfinancial.jpg",
    "revision": "5f33755883ccf53cebb602240daf568a"
  },
  {
    "url": "resources/img/yugarden.jpg",
    "revision": "d53e8df6fb093d3c7d326fa9a50c5773"
  }
]);
