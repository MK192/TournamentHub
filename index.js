const express=require('express');
const app=express();



app.get('/',(req,res)=>{
res.send({hi:'there'})
});

const PORT = process.env.PORT || 5000;/*process.env=production,
5000-dev*/
app.listen(PORT);