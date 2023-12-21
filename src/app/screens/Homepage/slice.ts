import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
    topRestaurants: [],
    bestRestaurants: [],
    trendProducts: [],
    bestBoArticles: [],
    trendBoArticles: [],
    newsBoArticles: [],
};

const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setTopRestaurants: (state, action) => {
            state.topRestaurants = action.payload;
        },
        bestRestaurants: (state, action) => {
            state.topRestaurants = action.payload;
        },
        trendProducts: (state, action) => {
            state.topRestaurants = action.payload;
        },
        bestBoArticles: (state, action) => {
            state.topRestaurants = action.payload;
        },
        trendBoArticles: (state, action) => {
            state.topRestaurants = action.payload;
        },
        newsBoArticles: (state, action) => {
            state.topRestaurants = action.payload;
        },
    },
});

export const {
    setTopRestaurants,
    bestRestaurants,
    trendProducts,
    trendBoArticles,
    bestBoArticles,
    newsBoArticles,
} = HomePageSlice.actions;

const HomePageReduser = HomePageSlice.reducer;
export default HomePageReduser;
 