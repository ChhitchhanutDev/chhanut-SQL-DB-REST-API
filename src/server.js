import 'dotenv/config';
import app from './app.js';
import { initPool } from './config/db.js';

async function startServer() {
  try {
    await initPool();
    console.log('DB connected');

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('DB error:', err.message);
  }
}

startServer();