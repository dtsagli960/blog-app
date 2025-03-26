import express from 'express';
// import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);

db
  .sync({ force: false }) // Set `force: true` to drop tables (use cautiously!)
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  })
  .catch((error) => console.error('Database connection failed:', error));
