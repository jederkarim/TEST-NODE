const jwt = require('jsonwebtoken')
const users = require('../models/clients');
const BearerStrategy = require('passport-http-bearer').Strategy;
const passport =require ('passport')



passport.use(new BearerStrategy(
    function(token, done) {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
      users.findOne({ _id : decoded.userId }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
  ));