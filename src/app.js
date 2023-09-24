import express from "express";   
import morgan from 'morgan'; 
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors({
    origin: 'https://ezekiel-dev.netlify.app',
    methods: ["POST", "GET"],
    credentials: true
    })
);

app.get("/", (req, res) => {
    res.json("HOLA");
})

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

export default app;
