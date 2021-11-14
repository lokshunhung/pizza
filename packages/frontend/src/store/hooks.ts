import { useSelector } from "react-redux";
import { State } from "./types";

export function useTypedSelector<T>(selector: (state: State) => T): T {
    return useSelector(selector);
}

export function useIsLoading(): boolean {
    return useTypedSelector(state => state.loading > 0);
}
