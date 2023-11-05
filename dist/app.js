"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const Routes_1 = require("./Routes/Routes");
const app = require("express");
exports.app = app;
app.use(Routes_1.router);
