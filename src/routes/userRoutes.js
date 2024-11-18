import express from "express";
import { createUsers, deleteUser, getAllUsers, getAllUsersById, updateUser } from "../controller/userController.js";
import validateUser from "../middlewares/inputValidator.js";
const router = express.Router();

router.post("/user",validateUser,createUsers);
router.get("/user",getAllUsers);
router.get("/user/:id",getAllUsersById);
router.put("/user/:id",validateUser,updateUser);
router.delete("/user/:id",deleteUser);

export default router;