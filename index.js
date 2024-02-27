import express from "express";
import cors from "cors";
import * as dotenv from "dotenv" ;
dotenv.config();

const app = express();
app.use(cors());
let i = [1,3,4,5,6,7,8]
app.get("/",(req, res)=>{
    res.status(200).send(i);
});


app.post("/",(req,res)=>{
    res.send({Salom:"Jamshid"})
})

console.log(process.env.PORT);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Ulanish hosil qilindi")
})
