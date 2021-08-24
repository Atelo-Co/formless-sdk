import React from "react";
import Router from "next/router";
import type {
  sessionProviderProps,
  sessionContext,
  session,
  usesession,
} from "./types";
import { themes } from "./types";
import sessionReducer from "./reducer";
import useSWR from "swr";
export * from "./actions";
export * from "./reducer";
export * from "./utils/cookies";
export * from "./utils/encoder";

type sessionStateContext = React.Context<sessionContext | undefined>;
/**
 * @description Create session
 */
const SessionStateContext: sessionStateContext = React.createContext<
  sessionContext | undefined
>(undefined);

const userFetcher = async (url: string) => {
  const response = await fetch(url);
  return response.ok ? response.json() : undefined;
};

/**
 * @description Make session accessible
 * @return Provider
 */
const SessionProvider = ({ children }: sessionProviderProps) => {
  const [session, dispatch] = React.useReducer(sessionReducer, {
    theme: themes.light,
    loading: true,
  });

  const { data } = useSWR<session, any>(
    session.loading ? "/api/auth/session" : null
  );
  data && dispatch({ type: "initState", payload: data });

  React.useEffect(() => {
    fetch("/api/auth/persist", {
      method: "post",
      body: JSON.stringify(session),
    });
  }, [session]);

  const value = { session, dispatch };
  return (
    <SessionStateContext.Provider value={value}>
      {children}
    </SessionStateContext.Provider>
  );
};

/**
 * @description Get session
 * @param redirectTo
 * @returns context
 */
const useSession = ({ redirectTo, redirectIfConnected }: usesession) => {
  const context = React.useContext(SessionStateContext);
  redirectIfConnected &&
    context?.session.user &&
    Router.push(redirectIfConnected);
  React.useEffect(() => {
    if (redirectTo && !context?.session.user) {
      Router.push(redirectTo);
    }
  }, [context, redirectTo]);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSession };
