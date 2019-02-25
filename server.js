const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const rendertron = require('rendertron-middleware');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const newsApi = require('./fetchRequest.js'); //example newsApi(country, sources, path)

//data all

const time = require('./public/DataToJson/time.json');
const bbc = require('./public/DataToJson/bbc-news.json');
const usa_today = require('./public/DataToJson/usa-today.json');
const sport = require('./public/DataToJson/fox-sports.json');
const policy = require('./public/DataToJson/politico.json');
const newsweek = require('./public/DataToJson/newsweek.json');
const nbcNews = require('./public/DataToJson/nbc-news.json');
const money = require('./public/DataToJson/fortune.json');
const cbcNews = require('./public/DataToJson/cbc-news.json');
const abcNews = require('./public/DataToJson/abc-news.json');
var request = require('request');

var redis = require("redis");
var client = redis.createClient({host : 'localhost', port : 6379})



app.use(require('prerender-node')  // Prerender io implementation
.set('prerenderServiceUrl', 'http://localhost:3000/')
.set('beforeRender', function(req, done) {
  client.get(req.url, done);
}).set('afterRender', function(err, req, prerender_res) {
  client.set(req.url, prerender_res.body)
}));

app.use(express.static('public'));

// Rendertron imprementation
/* 
app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render'
}));

request('http://localhost:3000/screenshot/http://localhost:8080/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log('screenshoted');
  }
});
*/


app.get('/*', function(req, res) {
  res.sendFile('./public/index.html', { root: __dirname })
})

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {

    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', time);
      client.emit('usa_today', usa_today);
      client.emit('sport', sport);
      client.emit('money', money);
      client.emit('policy', policy);
      client.emit('newsweek', newsweek);
      client.emit('nbcNews', nbcNews);
      client.emit('cbcNews', cbcNews);
      client.emit('bbc', bbc);
      client.emit('abc', abcNews);
    }, interval);
  });

});

server.listen(8080, function() {
    console.log('listening on *:8080');
});
