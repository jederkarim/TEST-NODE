const express = require('express');
const cors = require ('cors');
const morgan =require('morgan');
const bodyParser = require('body-parser')
const passport = require('passport')


const app= express();

require('./passport-strategies/bearer')


require('dotenv').config();
require('./database/connectdb');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(require('express-session')({ secret: process.env.JWT_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


const produitrouter = require('./routes/produitroute');
const clientroute = require('./routes/clientroute');




app.use('/api',produitrouter);
app.use('/api',clientroute);



const port = process.env.PORT || 4000;

app.listen(port,()=> console.log(`Listening on port ${port}...`));
