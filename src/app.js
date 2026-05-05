import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js'

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);
app.use('/', productRoutes);

// Start server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});