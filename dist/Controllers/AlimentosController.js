"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Alimentos = require('../Models/AlimentosModel');
const pg_1 = require("pg");
class AlimentosController {
    static getAllAlimentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new pg_1.Pool();
                const client = yield pool.connect();
                const { rows } = yield client.query('SELECT * FROM alimentos');
                client.release();
                res.json(rows);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar alimentos' });
            }
        });
    }
    static getAlimentoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alimentosId = parseInt(req.params.id);
            try {
                const pool = new pg_1.Pool();
                const client = yield pool.connect();
                const { rows } = yield client.query('SELECT * FROM alimentos WHERE id = $1', [alimentosId]);
                client.release();
                if (rows.length > 0) {
                    res.json(rows[0]);
                }
                else {
                    res.status(404).json({ error: 'Alimento não encontrado' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar o alimento' });
            }
        });
    }
}
exports.default = AlimentosController;
