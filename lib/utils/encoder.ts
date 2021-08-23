import * as crypto from "crypto";
type data = { algorithm: string; key: string; iv: string };

const data: data = {
  algorithm: "aes-256-cbc",
  key: `${process.env.TOKEN_SECRET}`,
  iv: `${process.env.TOKEN_IV}`,
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
