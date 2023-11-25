import { createContext, useContext } from "react";
import AuthStore from './authStore';
import CommonStore from './commonStore';

interface Store {
    authStore: AuthStore,
    commonStore: CommonStore
}


export const store: Store = {
    authStore: new AuthStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

// On page refresh all mobx stores gets reset
export function useStore() {

    return useContext(StoreContext);
}