import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/Homepage/slice";
import reduxLogger from "redux-logger";
import RestaurantPageReducer from "./screens/RestaurantPage/slice";
import OrdersPageReducer from "./screens/OrderPage/slice";
import CommunityPageReducer from "./screens/CommunityPage/slice";

export const store = configureStore({
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(reduxLogger),
    reducer: {
        homePage: HomePageReducer,
        restaurantPage: RestaurantPageReducer,
        ordersPage: OrdersPageReducer,
        communityPage: CommunityPageReducer,
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
