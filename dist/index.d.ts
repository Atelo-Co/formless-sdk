/// <reference types="react" />
import type { sessionProviderProps, sessionContext } from "./types";
/**
 * @description Make session accessible
 * @return Provider
 */
declare const SessionProvider: ({ children }: sessionProviderProps) => JSX.Element;
/**
 * @description Get session
 * @param redirectTo
 * @returns context
 */
declare const useSession: (redirectTo?: string | undefined) => sessionContext;
export { SessionProvider, useSession };
