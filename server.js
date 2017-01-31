
var fs = require('fs');
var data = fs.readFileSync('artists.json');
var artists = JSON.parse(data);
var express = require('express');

var app = express();

var server = app.listen(8000, listening);

function listening() {
  console.log("listening on port 8000");
}

app.use(express.static('views'));

app.get('/all', sendAll);
function sendAll(request, response) {
  console.log('in the all method')
  response.send(artists);
}

// app.get('/search/:word/', searchWord);
//
// function searchWord(request, response) {
//   var word = request.params.word;
//   var reply;
//   if (words[word]) {
//     reply = {
//       status: "found",
//       word: word,
//       score: words[word]
//     }
//   } else {
//     reply = {
//       status: "not found",
//       word: word
//     }
//   }
//   response.send(reply);
// }
