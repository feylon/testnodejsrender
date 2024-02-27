import express from "express";
import cors from "cors";
import * as dotenv from "dotenv" ;
dotenv.config();

const app = express();

let i = [1,3,4,5,6,6]
app.get("/",(req, res)=>{
    res.status(200).send(i);
});
console.log(process.env.PORT);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Ulanish hosil qilindi")
})
