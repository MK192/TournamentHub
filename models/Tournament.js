const mongoose=require('mongoose');
const {Schema}= mongoose;
const UserSchema=require('./User');

const tournamentSchema=new Schema({
    
    title : String,
    tournamentCreator: String,
    type : String,
    numberOfPlayers : String,
    participation : {type :Number, default : 0},
    prizesForFirstPlace : {type : Number, default : 0},
    prizesForSecoundPlace : {type : Number, default : 0},
    prizesForThirdPlace : {type : Number, default : 0},
    players:[{type:String}],
    fild1:String,
    fild2:String,
    fild3:String,
    fild4:String,
    fild5:String,
    fild6:String,
    fild7:String,
    fild8:String,
    fild9:String,
    fild10:String,
    fild11:String,
    fild12:String,
    fild13:String,
    fild14:String,
    fild15:String,
    _user : {type : Schema.Types.ObjectId, ref: 'User'}, /*referenca na onog ko je 
    napravio turnir */

});
mongoose.model('tournaments',tournamentSchema);