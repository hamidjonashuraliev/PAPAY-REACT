import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";
const selectHomePage = (state: AppRootState) => state.homePage;
export const retriveTopRestaurants = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topRestaurants
);
export const retriveBestRestaurants= createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestRestaurants
);
export const retriveTrendProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendProducts
);
export const retriveTrendBoArticles= createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendBoArticles
);
export const retriveBestBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestBoArticles
);
export const retriveNewsBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newsBoArticles
);
