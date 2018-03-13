const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('tran tien');
});
setInterval(function () {
    console.log('hello');
},10*1000);

app.listen(port);
console.log('listen port ',port);