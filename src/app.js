import express from "express";   
import morgan from 'morgan'; 
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', 'https://ezekiel-dev.netlify.app');
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.append("Access-Control-Allow-Headers", "Content-Type");
    res.append('Access-Control-Allow-Credentials', 'true');
    next();
})



app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

export default app;
