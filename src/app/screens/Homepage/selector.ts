import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";
const selectHomePage = (state: AppRootState) => state.homePage;
export const retrieveTopRestaurants = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topRestaurants
);
export const retrieveBestRestaurants= createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestRestaurants
);
export const retrieveTrendProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendProducts
);
export const retrieveTrendBoArticles= createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendBoArticles
);
export const retrieveBestBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestBoArticles
);
export const retrieveNewsBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newsBoArticles
);
