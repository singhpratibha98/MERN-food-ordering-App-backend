import express from "express";
import MyUserController from "../Controller/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateHeaderName } from "http";
import { validateMyUserRequest } from "../middleware/validation";



const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCureentUSer)
router.post("/", jwtCheck , MyUserController.createCurrentUSer);
router.put("/", jwtCheck,jwtParse,validateMyUserRequest, MyUserController.updateCurrentUSer);

export default router;




