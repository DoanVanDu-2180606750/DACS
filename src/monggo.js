var express = require("express");
var mongodb = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const { MongoClient } = require("mongodb");

var app = express();

app.use(cors());

var CONNETION_STRING = "mongodb+srv://vdyla2020:vd21022003@cluster0.ge65nan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

var DATABASENAME ="DACS";
var database;

app.listen(5038, () => {
    MongoClient.connect(CONNETION_STRING,(error,client) =>{
        database = client.db(DATABASENAME);
        console.log("Mongo DB Connetion successful")
    } )
})