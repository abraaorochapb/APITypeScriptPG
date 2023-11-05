import { Request, Response } from 'express';
const Express = require('express');
const Alimentos = require('../Models/AlimentosModel');
const router = Express.Router();
const port = 3000;
import { app } from '../app';

// rota server
app.get("/", (req: Request, res: Response) => {
    res.send("Typescript API");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Rota para buscar todos os alimentos
router.get('/alimentos', Alimentos.getAllAlimentos);

// Rota para buscar um alimento por ID
router.get('/alimentos/:id', Alimentos.getAlimentoById);

export default router;


