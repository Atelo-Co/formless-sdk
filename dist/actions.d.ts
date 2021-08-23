import type { user } from "./types";
export declare const signin: (user: user) => {
    type: string;
    payload: user;
};
export declare const signout: () => {
    type: string;
};
export declare const toggleTheme: () => {
    type: string;
};
