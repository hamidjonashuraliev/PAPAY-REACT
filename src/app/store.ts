import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import HomePageReduser from "./screens/Homepage/slice";
import reduxLogger from "redux-logger";

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reduxLogger),
    reducer: {
        homePage: HomePageReduser,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
