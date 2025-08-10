declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    ACCESS_TOKEN_EXPIRES: string;
    REFRESH_TOKEN_EXPIRES: string;
    DB_USER: string;
    DB_PASS: string;
  }
}
