import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./Statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Adverticements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";

//Redux
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
    setBestRestaurants,
    setTopRestaurants,
} from "../../screens/Homepage/slice";

import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";


/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
    setBestRestaurants: (data: Restaurant[]) =>
        dispach(setBestRestaurants(data)),
});

export function HomePage() {
    //** INITIALIZATION */
    const { setTopRestaurants, setBestRestaurants } = actionDispatch(
        useDispatch()
    );

    useEffect(() => {
        const restaurantService = new RestaurantApiService();
        restaurantService
            .getTopRestaurants()
            .then((data) => {
                setTopRestaurants(data);
            })
            .catch((err) => console.log(err));

        restaurantService
            .getRestaurants({ page: 1, limit: 4, order: "mb_point" })
            .then((data) => {
                console.log("best", data);

                setBestRestaurants(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="homepage">
            <Statistics />
            <TopRestaurants />
            <BestRestaurants />
            <BestDishes />
            <Adverticements />
            <Events />
            <Recommendations />
        </div>
    );
}
