const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set("view-engine", "ejs");
var items = [];
app.get('/', function (req, res) {
    var today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    }

    today = today.toLocaleDateString("en-US", options);

    res.render('list.ejs', { data: items, date: today });

});

app.post('/', function (req, res) {
    items.push(req.body.data);
    res.redirect('/');
});
app.post('/delete', function (req, res) {
    items.pop();
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server in on");
});