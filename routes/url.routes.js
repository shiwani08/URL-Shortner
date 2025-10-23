import express from "express";
import { handleShortenUrl, handleGetAllUrls, handleRedirectShortUrl, handleGetUrlsByUserId } from "../controllers/url.controllers.js";

const router = express.Router();

// Shorten a URL
router.post("/shorten", handleShortenUrl);

// Get all shortened URLs
router.get("/all", handleGetAllUrls);

// Get URLs by user ID
router.get("/user/:id", handleGetUrlsByUserId);

// Redirect short URL to original
router.get("/:shortId", handleRedirectShortUrl);

export default router;
