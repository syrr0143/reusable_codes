const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const port = process.env.port || 4000;
const { logger } = require('./logEvent')
// const whitelistIp = ['https://www.google.com', 'http://localhost:4000'];
app.use(logger);

const allowlist = ['https://www.google.com', 'https://expressjs.com'];

const corsOptionsDelegate = (req, callback) => {
    const origin = req.header('Origin');
    if (!origin) {
       callback(new Error('Missing Origin header'), false);
    }
    
    if (allowlist.includes(origin)) {
       callback(null, { origin: true });
    } else {
       callback(new Error('Not allowed by CORS'), false);
    }
  };

  app.use(cors(corsOptionsDelegate));
app.get('/', (req, res) => {
    console.log("suucessful");
    res.send("hello its ok for cors");
})
app.get('/link1', (req, res) => {
    console.log("suucessful");
    res.send("hello its ok for cors");
})
app.get('/link2', (req, res) => {
    console.log("suucessful");
    res.send("hello its ok for cors");
})
app.get('/link3', (req, res) => {
    console.log("suucessful");
    res.send("hello its ok for cors");
})
app.use(function(err,req,res,next){
console.error(err.stack)
res.status(500).send(err.message)
})
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//serve as the static file provider for the server 
app.use(express.static(path.join(__dirname, '/public')));


app.listen(port, () => {
    console.log(`app is running in port ${port}`);
})