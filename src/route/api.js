import express from "express";
import userController from "../controller/user-controller.js";
import { AuthMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(AuthMiddleware)
userRouter.get('/api/users/current', userController.get);

export {
    userRouter
}