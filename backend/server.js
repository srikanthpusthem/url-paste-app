
import express from 'express'
import mongoose from 'mongoose';
import Urls from './dbUrl.js';
import Cors from 'cors';



//app configuration
const app = express();
const port = process.env.PORT||8001;
const connection_url = `mongodb+srv://srikanthpusthem:Srikanth9*@cluster0.3cn6s.mongodb.net/urlDataBase?retryWrites=true&w=majority`


//middle-wares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//api endpoints

app.get('/',(req,res)=>res.status(200).send('hello browser'));

app.post('/urls',(req,res)=>{
    const dbUrl = req.body;
    Urls.create(dbUrl,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    });

});

//listener

app.listen(port, ()=>console.log(`listening on localhost :${port}`));