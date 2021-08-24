export enum types {
  toggleTheme = "toggleTheme",
  signin = "signin",
  signout = "signout",
  initState = "initState",
}

export enum themes {
  dark = "dark",
  light = "light",
}

export type user = {
  name: string;
  mail: string;
  image: string;
  role: string;
};
export type session = {
  user?: user;
  theme: themes;
  loading: boolean;
  error?: "";
  post?: {};
  token?: string;
};

export type payload = {
  user?: user;
  data?: session;
};

export type action = {
  type:
    | types.signin
    | types.signout
    | types.toggleTheme
    | types.initState
    | string
    | undefined;
  payload?: payload;
};

export type usesession = {
  redirectTo?: string;
  redirectIfConnected?: string;
};

export type dispatch = (action: action) => void;
export type sessionContext = { session: session; dispatch: dispatch };
export type sessionProviderProps = { children: React.ReactNode };
