"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const sessionReducer = (session, action) => {
    switch (action.type) {
        case types_1.types.initState: {
            return {
                ...session,
                ...action.payload,
                ...{
                    loading: false,
                },
            };
        }
        case types_1.types.toggleTheme: {
            return {
                ...session,
                ...{
                    theme: session.theme === types_1.themes.light ? types_1.themes.dark : types_1.themes.light,
                },
            };
        }
        case types_1.types.signin: {
            return {
                ...session,
                ...{
                    user: action?.payload?.user,
                },
            };
        }
        case types_1.types.signout: {
            return { ...session, ...{ user: undefined } };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};
exports.default = sessionReducer;
