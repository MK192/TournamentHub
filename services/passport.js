const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../keys');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
      done(null,user.id);
});

passport.deserializeUser((id,done)=>{
 User.findById(id).then(user=>{
   done(null,user);
 });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId:profile.id}).then((existingUser=>{
        if(existingUser){
          //postoji user sa tim googleId-om
           
          done(null,existingUser)//error objekat
        }
        else{
          new User({ googleId: profile.id, gmail : profile.emails[0].value}).save()
          .then(user=>done(null,user));
        
        }
      })
      );
      
    }
  )
);
