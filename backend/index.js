import express from 'express'; 
import PORT from './config.js';
import urlRoutes from './routes/url.routes.js';
import connectDB from './connect.js';
import urlSchema from './models/url.model.js'; 

// checking for the git push 
const app = express();
app.use(express.json());

connectDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(urlRoutes);

app.get('/all', async (req, res) => {
  try {
    const urls = await urlSchema.find(); // fetch all documents
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch URLs" });
  }
});

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const url = await urlSchema.findOne({ shortUrl: shortId });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }
    url.clicks += 1;
    await url.save();
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ error: "Failed to redirect" });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API');
});

app.listen(PORT || process.env.PORT || 3000, () => {
  console.log(`Server is on: http://localhost:${PORT || process.env.PORT || 3000}`);
});
