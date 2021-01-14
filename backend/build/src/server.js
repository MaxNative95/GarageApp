"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = parseInt(process.env.APP_PORT) || 3000;
app_1.default.listen(port, function () {
    var logYellow = '\x1b[33m%s\x1b[0m';
    console.log(logYellow, "\uD83D\uDCBE running on " + port);
});
