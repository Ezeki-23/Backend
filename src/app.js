import express from "express";   
import morgan from 'morgan'; 
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Allow-Methods', 'get, put, post, delete');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

app.use(cors({
    credentials: true,
    origin: 'https://ezekiel-dev.netlify.app'
}));

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

export default app;
