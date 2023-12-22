import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../../types/user";

class RestaurantApiService {
    private readonly path: string;

    constructor() {
        this.path = serviceApi;
    }

    async getTopRestaurants() {
        try {
            const url = "/restaurants?order=top&page=1&limit=4",
          result = await axios.get(this.path+url, {
                withCredentials: true});
            assert.ok(result, Definer.general_err1);

            console.log('state:', result.data.state);
            const top_restaurants: Restaurant[] = result.data.data;
            return top_restaurants;
        } catch (err: any) {
            console.log(`ERROR ::: getTopRestaurants ${err.message}`);
            throw err;
        }
    }
}
export default RestaurantApiService;
