"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Express = require('express');
const Alimentos = require('../Models/AlimentosModel');
const router = Express.Router();
exports.router = router;
const port = 3000;
// rota server
router.get("/", (req, res) => {
    res.send("Typescript API");
});
router.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Rota para buscar todos os alimentos
router.get('/alimentos', Alimentos.getAllAlimentos);
// Rota para buscar um alimento por ID
router.get('/alimentos/:id', Alimentos.getAlimentoById);
