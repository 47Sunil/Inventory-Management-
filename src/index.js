const express = require('express');
const bodyparser = require('body-parser');
// const route = require('./routes/route.js');
const mongoose = require('mongoose');
const route = require('./routes/route');

const app = express();



app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: true}));

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://hiFunctionup:dpD2Y2FP5bnyaJD3@cluster0.zclrt.mongodb.net/sunil-47", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


const serverDetails= {
    runningPort: process.env.PORT || 3000
}

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

module.exports.serverDetails = serverDetails

app.get('/product',(req,res)=>{
    res.send("app is runing...")
});