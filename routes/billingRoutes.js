const  keys=require('../keys');
const stripe=require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports=app=>{
    app.post('/api/stripe',requireLogin,async (req,res)=>{


      const charge=await stripe.charges.create({
            
            amount : 1000,
            currency : 'usd',
            description : 'buy 10 credits for 10 dollars',
            source : req.body.id,
    });

    req.user.credits=req.user.credits + 10;
    const user=await req.user.save();
    res.send(user);
})
}