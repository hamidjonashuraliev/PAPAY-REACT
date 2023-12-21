import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./Statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "../../screens/Homepage/slice";

import { retriveTopRestaurants } from "../../screens/Homepage/selector";
import { Restaurant } from "../../../types/user";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});
/** REDUX Selector */

const topRestaurantRetriver = createSelector(
    retriveTopRestaurants,
    (topRestaurants) => ({
        topRestaurants,
    })
);

export function HomePage() {
    //** INITIALIZATION */
    const { setTopRestaurants } = actionDispatch(useDispatch());
    const { topRestaurants } = useSelector(topRestaurantRetriver);

    console.log("topRestaurants::", topRestaurants);

    useEffect(() => {
        // backend data request => data

        setTopRestaurants([]);
    }, []);

    return (
        <div className="homepage">
            <Statistics />
            <TopRestaurants />
            <BestRestaurants />
            <BestDishes />
            <Advertisements />
            <Events />
            <Recommendations />
        </div>
    );
}
