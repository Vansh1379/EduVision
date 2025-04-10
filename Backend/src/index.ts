import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRouter from "./routes/mainRouter"

const port = process.env.PORT || 3001;
const app = express();
dotenv.config();

app.use(express.json()); // converts the json data to redable for express so that req.body can access it 
app.use(express.urlencoded({ extended: true })); // converst the data to json coming from html
app.use(cors());

app.get("/api/v1", mainRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})