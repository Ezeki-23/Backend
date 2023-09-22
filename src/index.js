import app from './app.js'
import {connectDB} from './db.js'

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

connectDB(); 

app.listen(3000)
console.log('Server on port', 3000)
