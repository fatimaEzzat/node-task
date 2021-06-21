"use strict";

// const expr= require('express')
// const app = expr()
// app.use(expr.json())
// app.get('/',(req,res)=>{
//     res.send('mostafa')
// })
var express = require("express");

var app = express();
app.use(express.json()); // app.get('/',(req,res)=>{
//         res.send('mostafa')
//     })

var data = [];
app.post('/todos', function (req, res) {
  // console.log(req.body)
  res.status(204).end();
});
app.get('/todos', function (req, res) {
  res.json(data);
});
app.end(3000);