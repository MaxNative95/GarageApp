"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var path = require('path');
var app = express_1.default();
// var dir = path.join(__dirname + '../assets');
// app.use(express.static(dir));
app.use('/assets', express_1.default.static(__dirname + '/assets'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(routes_1.default);
exports.default = app;
