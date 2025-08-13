import { nanoid } from "nanoid";
import Url from "../models/url.model.js"; // Assuming you have a URL model defined

async function handleShortenUrl(req, res) {
  const body = req.body;

  if (!body || !body.originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  try {
    const shortId = nanoid(7);
    const fullShortUrl = `http://shiwani.url/${shortId}`; // Adjust the base URL as needed
    const newUrl = new Url({ originalUrl: body.originalUrl, shortId, shortUrl: fullShortUrl });
    await newUrl.save();
    res.status(201).json({ shortUrl: fullShortUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to shorten URL" });
  }
}

export default handleShortenUrl;
