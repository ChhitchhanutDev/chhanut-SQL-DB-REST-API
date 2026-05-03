import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Start server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});