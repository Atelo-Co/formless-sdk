import * as crypto from "crypto";
type data = { algorithm: string; key: string; iv: string };

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const TOKEN_IV = process.env.TOKEN_IV;

if (!TOKEN_SECRET) {
  throw new Error(
    "Please define the TOKEN_SECRET environment variable inside .env.local"
  );
}

if (!TOKEN_IV) {
  throw new Error(
    "Please define the TOKEN_IV environment variable inside .env.local"
  );
}

const data: data = {
  algorithm: "aes-256-cbc",
  key: TOKEN_SECRET,
  iv: TOKEN_IV,
};

export const encode = (value: string): string => {
  const key = crypto.createCipheriv(data.algorithm, data.key, data.iv);
  value = key.update(JSON.stringify(value), "utf8", "hex");
  value += key.final("hex");
  return value;
};

export const decode = (value: string): object => {
  const key = crypto.createDecipheriv(data.algorithm, data.key, data.iv);
  value = key.update(value, "hex", "utf8");
  value += key.final("utf8");
  return JSON.parse(value);
};
