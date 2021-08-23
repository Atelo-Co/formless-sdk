"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
const cookie_1 = require("cookie");
const setCookie = (res, name, value, options = {}) => {
    const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
    options.maxAge = options.maxAge ?? 7 * 24 * 60 * 60;
    options.expires = new Date(Date.now() + options.maxAge);
    options.path = "/";
    options.sameSite = "lax";
    res.setHeader("Set-Cookie", cookie_1.serialize(name, String(stringValue), options));
};
exports.setCookie = setCookie;
