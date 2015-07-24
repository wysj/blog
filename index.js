var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(cookieParser());
app.get('/', function(req, res, next) {
    if (req.cookies.isVisit) {
        console.log(req.cookies);
        res.send("Welcome to mmz nodejs project...again..");
    } else {
        res.cookie('isVisit', 1, {
            maxAge: 60 * 1000
        });
        res.send("Welcome to mmz nodejs project...");
    }
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
