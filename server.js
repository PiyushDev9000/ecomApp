import express  from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path';
import { fileURLToPath } from "url";


//rest object
const app = express() 

//configure env
dotenv.config()

//database config
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)


app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});



//port
const PORT = process.env.PORT || 8800;


//run listen 
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})