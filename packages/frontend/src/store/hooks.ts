import { useSelector } from "react-redux";
import { State } from "./types";

export function useTypedSelector<T>(selector: (state: State) => T): T {
    return useSelector(selector);
}

export function useIsLoading(identifier: string = "global"): boolean {
    return useTypedSelector(state => (state.loading[identifier] || 0) > 0);
}
