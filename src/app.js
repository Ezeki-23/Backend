import express from "express";   
import morgan from 'morgan'; 
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://ezekiel-dev.netlify.app"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS, CONNECT, TRACE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.Header("Access-Control-Allow-Credentials", true);
  res.Header("Access-Control-Allow-Private-Network", true);
  res.Header("Access-Control-Max-Age", 7200);

  next();
});

app.use(cors({
  allowedHeader: "Access-Control-Allow-Origin",
  allowHeader: "Access-Control-Allow-Origin",
  allowMethods: "*",
  origin: "https://ezekiel-dev.netlify.app",
}));

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

export default app;
