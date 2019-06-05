const express 			= require('express'),
	  app 				= express(),
	  bodyParser 		= require('body-parser'),
	  methodOverride 	= require('method-override'),
	  expressSanitizer	= require('express-sanitizer'),
	  mongoose 			= require('mongoose');

// ***************
// MONGOOSE CONGIF
// ***************

const url = 'mongodb://localhost:27017/codingStoicBlog';
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

app.get('/', (req, res) => {
	res.render('./posts');
});

app.listen(3000, process.env.IP, () => {
	console.log('Server is running');
});