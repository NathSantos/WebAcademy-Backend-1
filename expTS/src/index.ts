import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});