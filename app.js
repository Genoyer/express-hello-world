const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    console.log(request);
    response.sendfile(__dirname + '/views/home-page.html');
});

app.get('/ye', (request, response, next) => {
    response.sendFile(__dirname + '/views/ye-page.html');
});

app.listen(3000, () => {
    console.log("We Live");
});

