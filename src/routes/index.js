import { Router } from "express";
import routerContact from "./contact";
const router = Router();

router.use("/api", routerContact);

export default router;
