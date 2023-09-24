import app from './app.js'
import {connectDB} from './db.js'
import express from "express";   

connectDB(); 

const express = require('express');
const app = express();
const cors = require('cors');   

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(cors({credentials: true, origin: 'https://ezekiel-dev.netlify.app'}));

app.listen(3000)
console.log('Server on port', 3000)
