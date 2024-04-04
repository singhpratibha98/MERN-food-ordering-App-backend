import express from "express";
import multer from "multer";
import MyRestaurantController from "../Controller/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 5 *1024* 1025 //5mb

    },
});


router.get("/", jwtCheck,jwtParse,MyRestaurantController.getMyRestaurat);

//api/my/restaurant

router.post(
    "/", 
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
  

 MyRestaurantController.createMyRestaurant

 );

 router.put("/",upload.single("imageFile"),
 validateMyRestaurantRequest,
 jwtCheck,
 jwtParse,
 MyRestaurantController.updateMyRestaurant
 
 );


 export default router;
 