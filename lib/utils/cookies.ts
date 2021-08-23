import { CookieSerializeOptions, serialize } from "cookie";
import { NextApiResponse } from "next";

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  options.maxAge = options.maxAge ?? 7 * 24 * 60 * 60;
  options.expires = new Date(Date.now() + options.maxAge);
  options.path = "/";
  options.sameSite = "lax";

  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};
