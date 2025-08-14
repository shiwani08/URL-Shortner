import { nanoid } from "nanoid";
import Url from "../models/url.model.js";

// POST /shorten - Shorten a URL
export async function handleShortenUrl(req, res) {
  const body = req.body;

  if (!body || !body.originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  try {
    const shortId = nanoid(7);
    const fullShortUrl = `http://shiwani.url/${shortId}`;
    const newUrl = new Url({ originalUrl: body.originalUrl, shortId, shortUrl: fullShortUrl });
    await newUrl.save();
    res.status(201).json({ shortUrl: fullShortUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to shorten URL" });
  }
}

// GET /all - Fetch all URLs
export async function handleGetAllUrls(req, res) {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch URLs" });
  }
}

// GET /:shortId - Redirect to original URL
export async function handleRedirectShortUrl(req, res) {
  const shortId = req.params.shortId;
  try {
    const url = await Url.findOne({ shortId });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }
    url.clicks += 1;
    await url.save();

    // For API debugging:
    // res.redirect(url.originalUrl);
    res.status(200).json({ originalUrl: url.originalUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to redirect" });
  }
}
