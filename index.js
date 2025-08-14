import express from 'express';
// import PORT from './config.js';
import urlRoutes from './routes/url.routes.js';
import connectDB from './connect.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch(err => {
    console.error("Failed to connect to MongoDB ❌", err);
    process.exit(1);
  });

app.use(urlRoutes); // all URL routes in one place

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
