const express =  require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: true })); 
const port = process.env.PORT || 3000;

const request =  require('request');

const API = 'cb66ab00106b49dfc380002e84e225a8'

app.listen(port,() => {
     console.log("Server is listening at port:",port);
 })

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')

 });
 
app.post('/',(req,res) =>{
  
  var city = req.body.city
   
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
   axios.get(url)
   .then(response => {
       console.log(response.data)
       var temp = (response.data.main.temp) - 273.15
       res.status(200).send((`The current tempearture in ${city} is ${temp} degree`).toString())
   })
  
})

   

