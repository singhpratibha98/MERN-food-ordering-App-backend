import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoutes from "./routes/MyUserRoutes";



mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("connected to database!"));


const app= express();
app.use(express.json());
app.use(cors());


app.get("/health",async(req:Request, res:Response)=>{
  res.send({message:"health Ok!"});

});


 ///api/my/user
app.use("/api/my/user", MyUserRoutes)


  app.listen(10000,()=>{
    console.log("server started on localhost:10000");
    
  });

  








// const app = express();

// app.use(express.json())

// app.use(cors())

// app.get("/test", async(req: Request, res: Response)=>{
//    res.json({
//     message:"Hello"
//    });

// });

// app.listen(10000,()=>{
//     console.log("server started on port 10000");
    
// });

