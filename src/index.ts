import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoutes from "./routes/MyUserRoutes";
import {v2 as cloudinary} from "cloudinary";
import MyRestaurantRoute from "./routes/MyRestaurantRoute";
import RestaurantRoute from "./routes/RestaurantRoute";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("connected to database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,

});



const app= express();
app.use(express.json());
app.use(cors());


app.get("/health",async(req:Request, res:Response)=>{
  res.send({message:"health Ok!"});

});


 ///api/my/user
app.use("/api/my/user", MyUserRoutes)
app.use("/api/my/restaurant", MyRestaurantRoute);

app.use("/api/restaurant",RestaurantRoute);


  app.listen(10000,()=>{
    console.log("server started on localhost:10000");
    
  });

  








