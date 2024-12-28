import express from "express";
import { generateImage } from "../controllers/imageController.js"; // Added .js extension
import userAuth from "../middlewares/auth.js"; // Ensure the .js extension is added here as well

const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuth, generateImage);

export default imageRouter;
