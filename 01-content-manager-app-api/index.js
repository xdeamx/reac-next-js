const express = require("express");
const cors = require('cors');

const app = express();
const PORT = 3001;

const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const pathToFile = path.resolve("./data.json");

//this is the way to enable CORS, it is no required for now
// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

// app.use(cors());

const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

app.get("/", (req,res) =>{
    res.send("HEllo world")
})


app.get("/api/resources", (req,res) =>{
    res.send(getResources())
})

app.listen(PORT, () => {
    console.log("Server is listening on port:"+PORT)
});
