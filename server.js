const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/githubuser-dashboard'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/githubuser-dashboard/index.html'));
});


/*
const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
  })
  .catch(error => {
    console.log(error);
  });
 */

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);

