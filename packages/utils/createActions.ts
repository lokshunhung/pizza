type CreatedActionType<
    P extends string,
    K extends string | number | symbol,
    F extends (...args: any[]) => any,
> = K extends string
    ? {
          type: "type" extends keyof ReturnType<F> ? ReturnType<F>["type"] : `${P}/${K}`;
          name: `${P}/${K}`;
      } & Omit<ReturnType<F>, "name"> extends infer T
        ? { [K in keyof T]: T[K] }
        : never
    : never;

type ActionCreators<M extends string, T extends Record<string, (...args: any[]) => any>> = {
    [K in keyof T]: {
        (...args: Parameters<T[K]>): CreatedActionType<M, K, T[K]>;
        matchActionName(action: unknown): action is CreatedActionType<M, K, T[K]>;
    };
};

export function createActions<P extends string, T extends Record<string, (...args: any[]) => any>>(
    prefix: P,
    options: T,
): ActionCreators<P, T> {
    const actions: Record<string, any> = {};

    Object.entries(options).forEach(([key, creatorFunction]) => {
        const actionName = `${prefix}/${key}`;
        const actionCreator = (...args: any[]) => ({
            type: actionName,
            ...creatorFunction(...args),
            name: actionName,
        });
        actionCreator.matchActionName = (action: any) => action.name === actionName;
        actions[key] = actionCreator;
    });

    return actions as any;
}
