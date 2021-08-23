"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTheme = exports.signout = exports.signin = void 0;
const signin = (user) => {
    return {
        type: "signin",
        payload: user,
    };
};
exports.signin = signin;
const signout = () => {
    return {
        type: "signout",
    };
};
exports.signout = signout;
const toggleTheme = () => {
    return {
        type: "toggleTheme",
    };
};
exports.toggleTheme = toggleTheme;
