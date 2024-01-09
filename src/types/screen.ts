import { boArticle } from "./boArticle";
import { Order } from "./orders";
import { Product } from "./product";
import { Restaurant } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    ordersPage: any;
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
    orderPage: OrdersPageState
    communityPage: CommunityPageState;
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

/**ORDERS PAGE */
export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
}
/** COMMUNITY PAGE */
export interface CommunityPageState {
    targetBoArticles: boArticle[];
  }