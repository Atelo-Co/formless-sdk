import type { user } from "./types";

export const signin = (user: user) => {
  return {
    type: "signin",
    payload: user,
  };
};

export const signout = () => {
  return {
    type: "signout",
  };
};

export const toggleTheme = () => {
  return {
    type: "toggleTheme",
  };
};
