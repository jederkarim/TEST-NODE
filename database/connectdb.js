const mongoose = require('mongoose');

mongoose.connect(process.env.DB);
mongoose.promise = global.promise;