import { Router } from "express";
import { addClient } from "../controllers/cliantControllers.js";

const clientRoutes = Router();
clientRoutes.get("/addClient", addClient);

export default clientRoutes;
