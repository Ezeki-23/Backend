import express from "express";   
import morgan from 'morgan'; 
import cookieParser from 'cookie-parser'
import cors from 'cors'

const express = require("express");
const cors = require("cors");

import authRoutes from './routes/auth.routes.js';

const corsOptions = {
  credentials: true,
  origin: 'https://ezekiel-dev.netlify.app'
};

const app = express();
app.use(cors(corsOptions));

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

export default app;
