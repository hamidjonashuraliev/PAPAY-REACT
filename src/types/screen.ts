import { boArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
}

/** HOMEPAGE */
export interface HomePageState {

    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoArticles: boArticle[];
    trendBoArticles: boArticle[];
    newsBoArticles: boArticle[];
}

/** RESTAURANT PAGE*/
export interface RestaurantPageState {
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[]; 
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;


}
