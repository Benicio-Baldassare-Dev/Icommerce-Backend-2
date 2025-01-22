import express, { json } from 'express';
import { connectDB } from './config/mongoDB.config.js';
import routes from './router/index.routes.js';
import 'dotenv/config';

const app = express();
connectDB(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`);
})