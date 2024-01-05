import { Box, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../../css/order.css";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tablist from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import { Order } from "../../../types/orders";
import TabList from "@mui/lab/TabList";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
    retrieveChosenRestaurant,
    retrieveRandomRestaurants,
    retrieveTargetProducts,
    retrieveTargetRestaurants,
} from "../RestaurantPage/selector";
import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import { Dispatch } from "@reduxjs/toolkit";
import {
    setPausedOrders,
    setProcessOrders,
    setFinishedOrders,
} from "../OrderPage/slice";
import { useHistory, useParams } from "react-router-dom";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
    setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
    setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
});

export function OrdersPage() {
    // INITIALIZATIONS
    const [value, setValue] = useState("1");
    const { setPausedOrders, setProcessOrders, setFinishedOrders } =
        actionDispatch(useDispatch());

    useEffect(() => {}, []);

    // HANDLERS
    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="order_page">
            <Container
                maxWidth="lg"
                style={{ display: "flex", flexDirection: "row" }}
                sx={{ mt: "54px", mb: "54px" }}
            >
                <Stack className={"order_left"}>
                    <TabContext value={value}>
                        <Box className="order_nav_frame">
                            <Box
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                            >
                                <TabList
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Tab label="Buyurtmalarim" value={"1"} />
                                    <Tab label="Jarayon" value={"2"} />
                                    <Tab label="Yakunlangan" value={"3"} />
                                </TabList>
                            </Box>
                        </Box>
                        <Stack className="order_main_content">
                            <PausedOrders />
                            <ProcessOrders />
                            <FinishedOrders />
                        </Stack>
                    </TabContext>
                </Stack>

                <Stack className="order_right">
                    <Box className="order_info_box">
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                        >
                            <div className="order_user_img">
                                <img
                                    src="/auth/13.jpg"
                                    className="order_user_avatar"
                                />

                                <Box className="order_user_icon_box">
                                    <img
                                        src="/icons/default_img.svg"
                                        // className="order_user_avatar"
                                    />
                                </Box>
                            </div>
                            <h1 className="order_user_name">John DEV</h1>
                            <p className="order_user_prof">Foydalanuvchi</p>
                            <img
                                src="/icons/line_blue.png"
                                style={{ marginTop: "40px", width: "100%" }}
                            />
                            <Box className={"order_user_address"}>
                                <img src="/icons/location.svg" alt="" />
                                <p className="spec_address_text">Seoul</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="payment_box">
                        <div className="card_input">
                            Card member 5243 0780 2042 2512
                        </div>
                        <Box className="twice_input">
                            <div className="card_half_input">07/24</div>
                            <div className="card_half_input">CVV:010</div>
                        </Box>
                        <div className="card_input">Lutfullaev Bakhodir</div>
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"row"}
                                justifyContent={"space-between"}
                                marginTop={"35px"}
                            >
                                <img
                                    src="/icons/western_union.svg"
                                    style={{ width: "38px", height: "25px" }}
                                />
                                <img
                                    src="/icons/paypal.svg"
                                    style={{ width: "38px", height: "25px" }}
                                />
                                <img
                                    src="/icons/western_union.svg"
                                    style={{ width: "38px", height: "25px" }}
                                />
                                <img
                                    src="/icons/paypal.svg"
                                    style={{ width: "38px", height: "25px" }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}
