"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const crypto = __importStar(require("crypto"));
const data = {
    algorithm: "aes-256-cbc",
    key: `${process.env.TOKEN_SECRET}`,
    iv: `${process.env.TOKEN_IV}`,
};
const encode = (value) => {
    const key = crypto.createCipheriv(data.algorithm, data.key, data.iv);
    value = key.update(JSON.stringify(value), "utf8", "hex");
    value += key.final("hex");
    return value;
};
exports.encode = encode;
const decode = (value) => {
    const key = crypto.createDecipheriv(data.algorithm, data.key, data.iv);
    value = key.update(value, "hex", "utf8");
    value += key.final("utf8");
    return JSON.parse(value);
};
exports.decode = decode;
