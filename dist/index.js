"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = exports.SessionProvider = void 0;
const react_1 = __importDefault(require("react"));
const router_1 = __importDefault(require("next/router"));
const types_1 = require("./types");
const reducer_1 = __importDefault(require("./reducer"));
const swr_1 = __importDefault(require("swr"));
/**
 * @description Create session
 */
const SessionStateContext = react_1.default.createContext(undefined);
const userFetcher = async (url) => {
    const response = await fetch(url);
    return response.ok ? response.json() : undefined;
};
/**
 * @description Make session accessible
 * @return Provider
 */
const SessionProvider = ({ children }) => {
    const [session, dispatch] = react_1.default.useReducer(reducer_1.default, {
        theme: types_1.themes.light,
        loading: true,
    });
    const { data } = swr_1.default(session.loading ? "/api/auth/session" : null);
    data && dispatch({ type: "initState", payload: data });
    react_1.default.useEffect(() => {
        fetch("/api/auth/persist", {
            method: "post",
            body: JSON.stringify(session),
        });
    }, [session]);
    const value = { session, dispatch };
    return (react_1.default.createElement(SessionStateContext.Provider, { value: value }, children));
};
exports.SessionProvider = SessionProvider;
/**
 * @description Get session
 * @param redirectTo
 * @returns context
 */
const useSession = (redirectTo) => {
    const context = react_1.default.useContext(SessionStateContext);
    react_1.default.useEffect(() => {
        if (redirectTo && !context?.session.user) {
            router_1.default.push(redirectTo);
        }
    }, [context, redirectTo]);
    if (context === undefined) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};
exports.useSession = useSession;
