import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
//REDUX
import { useSelector } from "react-redux";
import { retrieveFinishedOrders } from "../../screens/OrderPage/selector";
import { createSelector } from "reselect";

// REDUX SELECTOR
const finishedOrdersRetriever = createSelector(
    retrieveFinishedOrders,
    (finishedOrders) => ({
        finishedOrders,
    })
);

const finishedOrders = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

export default function FinishedOrders(props: any) {
    /**INITIALIZATIONS */
    //const { finishedOrders } = useSelector(finishedOrdersRetriever);
    return (
        <TabPanel value={"3"}>
            <Stack>
                {finishedOrders?.map((order) => {
                    return (
                        <Box className={"order_main_box"}>
                            <Box className={"order_box_scroll"}>
                                {order.map((item) => {
                                    const image_path = `/dishes/dish_image4.jpeg`;
                                    return (
                                        <Box className={"ordersName_price"}>
                                            <img
                                                src={image_path}
                                                className="orderDishImg"
                                            />
                                            <p className="titleDish">jizzbiz</p>
                                            <Box className={"priceBox"}>
                                                <p>$7</p>
                                                <img
                                                    src="/icons/Close.svg"
                                                    alt=""
                                                />
                                                <p>3</p>
                                                <img src="/icons/Pause.svg" />
                                                <p
                                                    style={{
                                                        marginLeft: "15px",
                                                    }}
                                                >
                                                    $21
                                                </p>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>

                            <Box className={"total_price_box red_solid"}>
                                <Box className={"boxTotal"}>
                                    <p>mahsulot narxi</p>
                                    <p>$21</p>
                                    <img
                                        src="/icons/Plus.svg"
                                        style={{ marginLeft: "20px" }}
                                    />
                                    <p>yetkazish xizmati</p>
                                    <p>$2</p>
                                    <img
                                        src="/icons/Pause.svg"
                                        style={{ marginLeft: "20px" }}
                                    />
                                    <p>jami narx</p>
                                    <p>$23</p>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </TabPanel>
    );
}
