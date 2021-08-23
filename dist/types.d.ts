/// <reference types="react" />
export declare enum types {
    toggleTheme = "toggleTheme",
    signin = "signin",
    signout = "signout",
    initState = "initState"
}
export declare enum themes {
    dark = "dark",
    light = "light"
}
export declare type user = {
    name: string;
    mail: string;
    image: string;
    role: string;
};
export declare type session = {
    user?: user;
    theme: themes;
    loading: boolean;
    error?: "";
    post?: {};
    token?: string;
};
export declare type payload = {
    user?: user;
    data?: session;
};
export declare type action = {
    type: types.signin | types.signout | types.toggleTheme | types.initState | string | undefined;
    payload?: payload;
};
export declare type dispatch = (action: action) => void;
export declare type sessionContext = {
    session: session;
    dispatch: dispatch;
};
export declare type sessionProviderProps = {
    children: React.ReactNode;
};
