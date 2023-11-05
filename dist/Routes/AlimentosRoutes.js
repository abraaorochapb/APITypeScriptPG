"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const Alimentos = require('../Models/AlimentosModel');
const router = express.Router();
// Rota para buscar todos os alimentos
router.get('/alimentos', Alimentos.getAllAlimentos);
// Rota para buscar um alimento por ID
router.get('/alimentos/:id', Alimentos.getAlimentoById);
exports.default = router;
