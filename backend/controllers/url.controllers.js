import { nanoid } from "nanoid";
import Url from "../models/url.model.js"; // Assuming you have a URL model defined

async function handleShortenUrl(req, res) {
  const shortUrl = nanoid(7);
  const body = req.body;

  if (!body || !body.originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  try {
    const newUrl = new Url({ originalUrl: body.originalUrl, shortUrl });
    await newUrl.create();
    res.status(201).json({ shortUrl: `http://short.url/${shortUrl}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to shorten URL" });
  }
}

export default handleShortenUrl;
