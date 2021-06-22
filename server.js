// const express = require('express');
// const app = express();

// // const path = require('path');
// // const express = require('express');
// // const app = express();
// const port = process.env.PORT || 3000;
// const publicPath = path.join(__dirname, '..', 'public');


// app.use(express.static(publicPath));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });

// app.get('/',(req,res)=>{
//    res.json({status:'success'});
// })

// app.listen(port, () =>{
//    console.log(port)
// })


const express=require("express");
const app=express();
const port=process.env.PORT ;








//base route to ensure working 
app.get("/",(req,res)=>{
    res.status(200).json({Message:"success",Data:"application running"})
});






app.listen(port,()=>{
   console.log(`node js application is running on ${port}`);
});