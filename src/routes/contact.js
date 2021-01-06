import { Router } from "express";
import { contactInfo } from "../controllers/contact";
const router = Router();

router.post("/contact", contactInfo);

export default router;
