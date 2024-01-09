import { boArticle } from "./boArticle";
import { Follower, Following } from "./follow";
import { Order } from "./orders";
import { Product } from "./product";
import { Member, Restaurant } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    ordersPage: any;
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
    orderPage: OrdersPageState;
    communityPage: CommunityPageState;
    memberPage: MemberPageState;
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
/** MEMBER PAGE */
export interface MemberPageState {
    chosenMember: Member | null;
    chosenMemberBoArticles: boArticle[];
    chosenSingleBoArticle: boArticle | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];
}
