// src/app.ts
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json()); 
app.use(cors()); 


app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Test_School Backend!');
});

export default app;