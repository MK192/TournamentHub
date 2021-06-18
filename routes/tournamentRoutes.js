const requireLogin = require('../middlewares/requireLogin');
const mongoose= require('mongoose');


const Tournament=mongoose.model('tournaments');

module.exports=app=>{

    app.post('/api/createTournament',requireLogin, async (req,res)=>{
      
        const {title, tournamentCreator,type,numberOfPlayers, participation,
            prizesForFirstPlace, prizesForSecoundPlace, prizesForThirdPlace }=req.body
console.log(req.body);
       
             
            const tournament= new Tournament ({
                title,
                tournamentCreator : req.user.gmail,
                type,
                numberOfPlayers,
                participation,
                prizesForFirstPlace,
                prizesForSecoundPlace,
                prizesForThirdPlace,
                fild1:'',
                fild2:"",
                fild3:"",
                fild4:"",
                fild5:"",
                fild6:"",
                fild7:"",
                fild8:"",
                fild9:"",
                fild10:"",
                fild11:"",
                fild12:"",
                fild13:"",
                fild14:"",
                fild15:"",
                _user: req.user.id,
            });
           
            try {
               
                await tournament.save();
                
                const user = await req.user.save();
          
                res.send(user);
              } catch (err) {
                res.status(422).send(err);
              }
            });
          
          

          
   
    app.get('/api/findTournament',requireLogin,async(req,res)=>{
     const  allTournaments= await Tournament.find({});
     res.send(allTournaments);
    });
    app.get('/api/createTournament',requireLogin,async (req,res)=>{

      const myTournaments=await Tournament.find({_user : req.user.id});
     
 
      res.send(myTournaments);
     });

     app.post('/api/addplayer',requireLogin,async(req,res)=>{
       
       
                   
   const br=parseInt(req.body.numberofp,10);
  
  if(br>req.body.arrofplayers.length)
{
 
    const PlayerId= await Tournament.find({players : req.user.gmail,_id:req.body.playerId});

  

    if(PlayerId.length === 0 && req.user.credits>=req.body.parti)
   
      {
       
   const doc=await Tournament.updateOne(
    

    {_id : req.body.playerId },
            { $push: { players :req.user.gmail } }
        )

     
     
     
      try
      { req.user.credits-=req.body.parti;
        const user = await req.user.save();
        res.send(user);
      }catch(err){
        res.status(422).send(err);
      }
     

      }
  }

     });
     
     app.post('/api/fields',requireLogin,async(req,res)=>{
      
      if(req.body.tournamentC===req.user.gmail){
      const doc=await Tournament.updateOne(
       
       

        {_id : req.body.playerId },
                { $set: { fild1 :req.body.field1,fild2:req.body.field2,fild3:req.body.field3,
                  fild4 :req.body.field4,fild5 :req.body.field5, fild6 :req.body.field6,
                  fild7 :req.body.field7,fild8 :req.body.field8, fild9 :req.body.field9,
                  fild10 :req.body.field10, fild11 :req.body.field11,fild12 :req.body.field12,
                  fild13 :req.body.field13, fild14 :req.body.field14,fild15 :req.body.field15} }
            )
    
         res.send(doc);
        }
         
     })
  }
