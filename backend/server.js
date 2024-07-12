// server.js

import express from 'express';
import connectDB from './config/db.js';
import teacherRoutes from './routes/teacherRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

// dotenv.config(); // Comment this out for Azure deployment

connectDB();

const app = express();

app.use(express.json()); // Middleware

app.get('/', (req, res) => {
  res.send("Let's go!!");
});

app.use('/api/teacher', teacherRoutes);
app.use('/api/course', courseRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
