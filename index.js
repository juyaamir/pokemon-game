import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/pokemon/pokemonRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use(`/api/v1/pokemon`, router);

app.get(`/`, async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', index.html));
})
app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`))