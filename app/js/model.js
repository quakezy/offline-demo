//model.js for other user's data, will pull from server every 5 seconds
/*
function createIndexedDB() {
  if (!('indexedDB' in window)) {return null;}
  return idb.open('dashboardr', 1, function(upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains('events')) {
      const eventsOS = upgradeDb.createObjectStore('events', {keyPath: 'id'});
    }
  });
}
const dbPromise = createIndexedDB();*/