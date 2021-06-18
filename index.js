const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
require('./models/User');
require('./models/Tournament');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();
    app.use(bodyParser.json());

    app.use(
    cookieSession({
        maxAge:30*24*60*60*1000 /*30 dana*/,
        keys:[keys.cookieKey]
    })
);

    app.use(passport.initialize());
    app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/tournamentRoutes')(app);
const PORT = process.env.PORT || 5000;/*process.env=production,
5000-dev*/
app.listen(PORT);
