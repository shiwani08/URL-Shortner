import express from 'express'; 
import PORT from './config.js';
import urlRoutes from './routes/url.routes.js';
import connectDB from './connect.js';

const app = express();
app.use(express.json());

connectDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api/urls', urlRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API');
});

app.listen(PORT || process.env.PORT || 3000, () => {
  console.log(`Server is on: http://localhost:${PORT || process.env.PORT || 3000}`);
});
