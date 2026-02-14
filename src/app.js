import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from '#config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '#routes/auth.routes.js';
import usersRoutes from '#routes/users.routes.js';

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend origin
  credentials: true, // Allow cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  morgan('combined', {
    stream: {
      write: message => logger.info(message.trim()),
    },
  })
);

app.get('/', (req, res) => {
  logger.info('Hello from Acquisition!');
  res.status(200).send('Hello, World!');
});

app.get('/health', (req, res) => {
  res
    .status(200)
    .json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
});

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Acquisition API is running!' });
});
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

// Serve Static Frontend Files from the 'public' folder
// (This folder is created by the Dockerfile COPY command)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(process.cwd(), 'public');
app.use(express.static(publicPath));

// For any route NOT handled by the API, send back index.html
// This allows React Router to handle the pages (SPA behavior)
app.get('*splat', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// 404 handler for API routes (if needed, but * catches everything)
// If you want strict API 404s, ensure accessing /api/* that doesn't exist hits this, 
// but express might match * first if not careful. 
// Actually, since API routes are defined above with app.use('/api/...'), 
// specific API 404s should be handled within those routers or by checking if req.path starts with /api
// For now, simpler is better: if it's not an API route (caught above), it serves frontend.

export default app;
