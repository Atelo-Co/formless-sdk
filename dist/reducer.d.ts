import { session, action, themes } from "./types";
declare const sessionReducer: (session: session, action: action) => {
    loading: boolean;
    user?: import("./types").user | undefined;
    data?: session | undefined;
    theme: themes;
    error?: "" | undefined;
    post?: {} | undefined;
    token?: string | undefined;
};
export default sessionReducer;
