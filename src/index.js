import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port =process.env.PORT || 4000;
//middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api",userRoutes);
//Error handling middleware
app.use(errorHandling);
 
//create user table before starting server
createUserTable();

//Testing conncetion
app.get("/",async (req,res)=>{
    console.log("Start");
    const result= await pool.query("SELECT current_database()");
    console.log("end" );
    res.send(`The database name is : ${result.rows[0].current_database}`);
});

//server running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});