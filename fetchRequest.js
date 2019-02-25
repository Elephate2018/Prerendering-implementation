const NewsAPI = require('newsapi');

const fs = require('fs');
//To Home
//create fetch api from https://newsapi.org/docs/client-libraries/node-js
function fetchReq(country, source, path) {
  const array = require(path);
  const newsapi = new NewsAPI('7aa89004bfac4598b5c38740c93cc5bf');
  newsapi.v2.everything({
    country: 'us',
    sources: source,
    language: 'en',
    pageSize: 100
  }).then(response => {
    if(response.status == "ok") {
      fs.readFile(path, function (err, data) {
          var json = JSON.parse(data);
          var activeObj = response.articles;
          console.log( activeObj[0].title)
          //console.log(activeObj[0].source.id)

          //console.log('response.status: ', response.status)

          // console.log(activeObj[0].title, ':::' , array[0].title, )
          // console.log(activeObj[0])
          if(!array.some(item=> item.title===activeObj[0].title) && activeObj[0].source.id !== null ) {
            json.splice(0,0,activeObj[0])
          }
           //json.push(activeObj)
           console.log(array.length)
          fs.writeFile(path, JSON.stringify(json, null, 2), function(err){
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });
      })
    };
  });
}
 exports.newsAPIFetch = fetchReq;
