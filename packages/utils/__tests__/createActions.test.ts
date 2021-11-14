import { createActions } from "../createActions";

test("createActions", () => {
    const actions = createActions("prefix", {
        doSomething: () => ({}),
        empty: () => {},
        withPayload: (arg: any) => ({ payload: { arg } }),
        arbitaryKey: () => ({ foo: 1 }),
    });

    expect(Object.keys(actions)).toStrictEqual(["doSomething", "empty", "withPayload", "arbitaryKey"]);

    expect(actions.doSomething()).toStrictEqual({ name: "prefix/doSomething", type: "prefix/doSomething" });
    expect(actions.empty()).toStrictEqual({ name: "prefix/empty", type: "prefix/empty" });
    expect(actions.withPayload({ foo: 1 })).toStrictEqual({
        name: "prefix/withPayload",
        type: "prefix/withPayload",
        payload: { arg: { foo: 1 } },
    });
    expect(actions.arbitaryKey()).toStrictEqual({ name: "prefix/arbitaryKey", type: "prefix/arbitaryKey", foo: 1 });

    expect(actions.doSomething.matchActionName({ name: "prefix/doSomething" })).toBe(true);
    expect(actions.doSomething.matchActionName({ name: "wrongPrefix/doSomething" })).toBe(false);
    expect(actions.doSomething.matchActionName({ name: "prefix/notRelated" })).toBe(false);

    expect(actions.doSomething.matchActionName({ type: "only action.name matters", name: "prefix/doSomething" })).toBe(
        true,
    );
    expect(actions.doSomething.matchActionName({ type: "prefix/doSomething", name: "only action.name matters" })).toBe(
        false,
    );
});
