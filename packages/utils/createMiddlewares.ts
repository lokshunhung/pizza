import { Middleware } from "redux";

export type AppMiddleware = Middleware<{}, unknown>;

export function createMiddlewares<T extends Record<string, AppMiddleware>>(options: T): T {
    return options;
}
