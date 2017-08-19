/**
 * Created by Yalovich on 19/08/2017.
 */
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const serverApp = require('./src/app');

app.get('/', function (req, res) {
    res.send('Apollo Souvlaki')
})

app.get('/menu', function(req, res) {

    serverApp.getMenu().then(function(menu) {
        res.header("Content-Type", "application/json");
        res.send(JSON.stringify(menu));
    });
});

app.listen(3000, function () {
    console.log('Apollo Server is running on port 3000!')
})


