//build.js
const workboxBuild = require('workbox-build');

workboxBuild.injectManifest({
   swSrc: 'app/sw-raw.js',
   swDest: 'app/sw.js',
   globDirectory: 'app', 
   globPatterns: ["**/*.{html,css}","js/*.js","resources/*.*","resources/img/*.*","*.json"],
}).then(resources => {
   console.log(`Injected ${resources.count} resources for precaching, ` + `totaling ${resources.size} bytes.`);
}).catch(err => {
   console.log('Uh oh', err);
});