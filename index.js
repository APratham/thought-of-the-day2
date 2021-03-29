const lib = require('thoughts');
const express = require('express');
const app = express();

var random = lib.random();    // gives random object from any category
var anotherRandom = lib.random("anonymous");  //gives random object from specified category
var particular = lib.particular("anonymous",2);   //gives particular object from specified category

app.get('/', (req, res) => {
  console.log('The app received a request.');
  res.send(random.thought);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
