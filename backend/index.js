  const express =  require('express');
  const app =  express();
  const cors = require("cors")
  const mongoose = require("mongoose")
  const dotenv = require("dotenv")
  dotenv.config()
  const authRoute = require("./routes/auth")
  const usersRoute = require("./routes/users")
  const cartsRoute = require("./routes/carts")
  const bodyParser = require ('body-parser')
  const cookieParser = require('cookie-parser')
  const request = require('request');
  const updateRoute = require('./routes/users');
  const orderRoute = require('./routes/orders')
  const ticketRoute = require('./routes/tickets')


  const url = process.env.MONGO_KEY
  const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  connect
    .then(db => {
      console.log("connected to MongoDB")
    })
    .catch(err => {
      console.log(err)
    })

    //middlewares
  app.use(cors())
  app.use(cookieParser())
  app.use(bodyParser.json())
  app.all('/ticket/*', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
      var targetURL = req.query.url;
      if (!targetURL) {
          res.send(500, { error: 'There is no Target-Endpoint header in the request' });
          return;
      }

      request({ url: targetURL, method: req.method, json: req.body }, function (error, response, body) {
        if (error) {
          console.error('Request error:', error);
          return res.status(500).send({ error: 'Request failed' });
        }
        if (!response) {
          console.error('Response is undefined');
          return res.status(500).send({ error: 'No response from target URL' });
        }
        
        // If there's a statusCode, log it and continue
        console.log('Status code:', response.statusCode);
        res.status(response.statusCode).send(body);
      });
    }
  });
  app.get("/ticket/getPopular",async (req,res)=>{
    const data = fetch("/ticket").then(data=>data.json().then(dt=>console.log(dt)));

    
  })
  app.use("/api/auth", authRoute)
  app.use("/api/users", usersRoute)
  app.use("/api/", cartsRoute)
  app.use("/api/profile", updateRoute)
  app.use("/api/order", orderRoute)
  app.use("/api/ticket", ticketRoute)

  app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message|| "Something went wrong!"
    return res.status(errorStatus).json({
      success : false,
      status : errorStatus,
      message : errorMessage,
      stack : err.stack,
    })
  })


  app.listen(4000, ()=> {
      
      console.log("Connected to backend")
      });
