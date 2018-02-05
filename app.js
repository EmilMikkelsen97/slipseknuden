const express = require('express');
const app = express();
const path       = require('path');
const session    = require('express-session');
const bodyParser = require("body-parser");

const port = process.env.PORT || 1337;

app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 50 * 60 * 1000 } // 5 minutter
}));

require('./routes/index')(app);

app.listen(port);
console.log(`Serveren køre på port ${port}`);