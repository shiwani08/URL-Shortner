import express from "express";
import { handleShortenUrl, handleGetAllUrls, handleRedirectShortUrl } from "../controllers/url.controllers.js";

const router = express.Router();

// Shorten a URL
router.post("/shorten", handleShortenUrl);

// Get all shortened URLs
router.get("/all", handleGetAllUrls);

// Redirect short URL to original
router.get("/:shortId", handleRedirectShortUrl);

export default router;
