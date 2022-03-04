// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// Article page 
app.get('/', function(req, res) {
    var articles = [
        { title: 'Article 1', description: "DigitalOcean", creation_date: 2012},
        { title: 'Article 2', description: "Linux", creation_date: 2014},
        { title: 'Article 3', description: "Docker", creation_date: 2013}
    ];
    var tagline = "lorem";

    var learticle = 



    res.render('pages/article', {
        articles: articles,
        tagline: tagline
    });
});

// qcm page
app.get('/qcm', function(req, res) {
    var qcms = [
        { title: 'Article 1', description: "DigitalOcean", creation_date: 2012},
        { title: 'Article 2', description: "Linux", creation_date: 2014},
        { title: 'Article 3', description: "Docker", creation_date: 2013}
    ];
    res.render('pages/qcm', {
        qcms: qcms
    });
});

app.listen(8080);
console.log('port 8080 is open');
