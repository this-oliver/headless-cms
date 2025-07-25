import crypto from "node:crypto";
import fs from "node:fs";
import process from "node:process";

const DEFAULT_TOKEN_LENGTH: number = 32;
const DEFAULT_TOKEN_ENCODING = "base64";
const DEFAULT_APP_KEYS: number = 3;

const TOKENS = {
  ADMIN_JWT_SECRET: crypto.randomBytes(DEFAULT_TOKEN_LENGTH).toString(DEFAULT_TOKEN_ENCODING),
  API_TOKEN_SALT: crypto.randomBytes(DEFAULT_TOKEN_LENGTH).toString(DEFAULT_TOKEN_ENCODING),
  APP_KEYS: [...Array.from({ length: DEFAULT_APP_KEYS })].map(() => crypto.randomBytes(DEFAULT_TOKEN_LENGTH).toString("base64")).join(","),
  ENCRYPTION_KEY: crypto.randomBytes(DEFAULT_TOKEN_LENGTH).toString(DEFAULT_TOKEN_ENCODING),
  TRANSFER_TOKEN_SALT: crypto.randomBytes(DEFAULT_TOKEN_LENGTH).toString(DEFAULT_TOKEN_ENCODING),
  JWT_SECRET: crypto.randomBytes(DEFAULT_TOKEN_LENGTH).toString(DEFAULT_TOKEN_ENCODING)
};

const CURRENT_FILE = __filename;
const ROOT_DIR = CURRENT_FILE.split("/").slice(0, -2).join("/");
const ENV_FILE = `${ROOT_DIR}/.env`;

// check if .env file exists
if (fs.existsSync(ENV_FILE)) {
  console.warn("A .env file already exists in the root directory. Please remove it before running this script.");
  process.exit(0);
}

// create .env file in the root directory
const envContent = Object.entries(TOKENS)
  .map(([key, value]) => `${key}=${value}`)
  .join("\n");

fs.writeFileSync(ENV_FILE, envContent, "utf8");
