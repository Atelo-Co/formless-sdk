import { CookieSerializeOptions } from "cookie";
import { NextApiResponse } from "next";
export declare const setCookie: (res: NextApiResponse, name: string, value: unknown, options?: CookieSerializeOptions) => void;
