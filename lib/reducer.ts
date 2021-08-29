import { session, action, themes, types } from "./types";

export const sessionReducer = (session: session, action: action) => {
  switch (action.type) {
    case types.initState: {
      return {
        ...session,
        ...action.payload,
        ...{
          loading: false,
        },
      };
    }
    case types.toggleTheme: {
      return {
        ...session,
        ...{
          theme: session.theme === themes.light ? themes.dark : themes.light,
        },
      };
    }
    case types.signin: {
      fetch("/api/auth/signout");
      return {
        ...session,
        ...{
          user: action?.payload?.user,
        },
      };
    }
    case types.signout: {
      return { ...session, ...{ user: undefined } };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
