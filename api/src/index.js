import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
routes(app);
app.listen(3000);
console.log('Server iniciado');
