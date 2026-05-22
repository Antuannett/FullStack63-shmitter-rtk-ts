import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice.ts";
import stats from "../features/stats/statsSlice.ts";

export const store = configureStore({
    reducer: {
        user, stats
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch