//server.js

/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');
const app = express();


const directoryPath = __dirname + '/app';
const handler = express.static(directoryPath);
console.log("server starting hosting for: " + directoryPath);
// This serves static files from the specified directory
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get(['/', '/index.html'], (req, res) => {
  console.log("redirect /");
  res.sendFile(__dirname + 'app/index.html');
});
/*
const server = https.createServer({
    cert: fs.readFileSync('./certification/certificate.pem'),
    key: fs.readFileSync('./certification/key.pem')
  }, app);//*/
/*
app.get('/api/getAll', (req, res) => {
  let options = {
    root: __dirname + '/data/'
  };

  const fileName = 'citys.json';
  res.sendFile(fileName, options, (err) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
  });
});
app.post('/api/add', (req, res) => {
  let jsonFile = __dirname + '/data/citys.json';
  let newEvent = req.body;
  console.log('Adding new event:', newEvent);
  fs.readFile(jsonFile, (err, data) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    let cities = JSON.parse(data);
    cities.push(newEvent);
    let eventsJson = JSON.stringify(events, null, 2);
    fs.writeFile(jsonFile, eventsJson, err => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      // You could also respond with the database json to save a round trip
      res.sendStatus(200);
    });
  });
});

//
app.post('/api/delete', (req, res) => {
  let jsonFile = __dirname + '/data/citys.json';
  let id = req.body.id;
  fs.readFile(jsonFile, (err, data) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    let events = JSON.parse(data);
    let index = events.findIndex(event => event.id == id);
    events.splice(index, 1);

    let eventsJson = JSON.stringify(events, null, 2);

    fs.writeFile(jsonFile, eventsJson, err => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    });
  });
});
*/

/*
  server.addListener("request", handler);
  server.listen(8443);
//*/
///*
const server1 = app.listen(443,'0.0.0.0', () => {//10.4.142.238
  const host = server1.address().address;
  const port = server1.address().port;

  console.log(server1.address())
  console.log('App listening at http://%s:%s', host, port);
});
//*/