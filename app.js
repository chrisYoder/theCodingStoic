const express 			= require('express'),
	  app 				= express(),
	  bodyParser 		= require('body-parser'),
	  methodOverride 	= require('method-override'),
	  expressSanitizer	= require('express-sanitizer'),
	  mongoose 			= require('mongoose');

// ***************
// MONGOOSE CONGIF
// ***************

const url = 'mongodb+srv://theCodingStoic:martin9338@cluster0-xa4o6.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, { 
	useNewUrlParser: true,
	useCreateIndex: true
}).then( () => {
	console.log('Connected to Database');
}).catch( err => {
	console.log('ERROR:', err.message);
});

// ***************
// APP CONGIF
// ***************

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// ****************
// Requiring Routes
// ****************

const newPost = require('./routes/newPost');

app.get('/', (req, res) => {
	res.render('posts');
});



app.get('/posts/new', (req, res) => {
	res.render('new');
});



app.listen(3000, process.env.IP, () => {
	console.log('Server is running');
});