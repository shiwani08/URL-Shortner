import express from "express";
import shortUrl from "../controllers/url.controllers.js";
const router = express.Router();

router.get("/shorten", shortUrl);
router.post("/shorten", shortUrl);

export default router;
