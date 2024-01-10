import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
//REDUX
import { useSelector } from "react-redux";
import { retrievePausedOrders } from "../../screens/OrderPage/selector";
import { createSelector } from "reselect";
import { Order } from "../../../types/orders";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import {
    sweetErrorHandling,
    sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";
import { verifiedMemberData } from "../../apiServices/verify";

// REDUX SELECTOR
const pausedOrdersRetriever = createSelector(
    retrievePausedOrders,
    (pausedOrders) => ({
        pausedOrders,
    })
);

const pausedOrders = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

export default function PausedOrders(props: any) {
    /**INITIALIZATIONS */
    const { pausedOrders } = useSelector(pausedOrdersRetriever);

    /* HANDLERS */
    const deleteOrderHandler = async (event: any) => {
        try {
            const order_id = event.target.value;
            const data = { order_id: order_id, order_status: "DELETED" };
            if (!verifiedMemberData) {
                sweetFailureProvider("Please login first", true);
            }

            let confirmation = window.confirm(
                "Buyurtmani bekor qilishni xohlaysizmi?"
            );
            if (confirmation) {
                const orderService = new OrderApiService();
                await orderService.updateOrderStatus(data);
                props.setOrderRebuild(new Date());
            }
        } catch (err) {
            console.log("deleteOrderHandler, ERROR: ", err);
            sweetErrorHandling(err).then();
        }
    };

    const processOrderHandler = async (event: any) => {
        try {
            const order_id = event.target.value;
            const data = { order_id: order_id, order_status: "PROCESS" };

            if (!verifiedMemberData) {
                sweetFailureProvider("Please login first", true);
            }

            let confirmation = window.confirm(
                "Buyurtmangizni To'lashni tasdiqlaysizmi?"
            );
            if (confirmation) {
                const orderService = new OrderApiService();
                await orderService.updateOrderStatus(data);
                props.setOrderRebuild(new Date());
            }
        } catch (err) {
            console.log("processOrderHandler, ERROR: ", err);
            sweetErrorHandling(err).then();
        }
    };

    return (
        <TabPanel value="1">
            <Stack>
                {pausedOrders?.map((order: Order) => {
                    return (
                        <Box className="order_main_box">
                            <Box className="order_box_scroll">
                                {order.order_items.map((item) => {
                                    const product: Product =
                                        order.product_data.filter(
                                            (ele) => ele._id === item.product_id
                                        )[0];
                                    const image_path = `${serverApi}/${product?.product_images[0].replace(
                                        /\\/g,
                                        "/"
                                    )}`;
                                    return (
                                        <Box className={"ordersName_price"}>
                                            <img
                                                src={image_path}
                                                className={"orderDishing"}
                                            />
                                            <p className="titleDish">
                                                {product?.product_name}
                                            </p>
                                            <Box className={"priceBox"}>
                                                <p>${item.item_price}</p>
                                                <img src="/icons/Close.svg" />
                                                <p>{item.item_quantity}</p>
                                                <img src="/icons/pause.svg" />
                                                <p>
                                                    $
                                                    {item.item_price *
                                                        item.item_quantity}
                                                </p>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>

                            <Box className="total_price_box black_solid">
                                <Box className="boxTotal">
                                    <p>mahsulot narxi</p>
                                    <p>
                                        $
                                        {order.order_total_amount -
                                            order.order_delivery_cost}
                                    </p>
                                    <img
                                        src="/icons/plus.svg"
                                        style={{
                                            marginLeft: "10px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p>yetgazish xizmati</p>
                                    <p>${order.order_delivery_cost}</p>
                                    <img
                                        src="/icons/pause.svg"
                                        style={{
                                            marginLeft: "10px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p>jami narx</p>
                                    <p>${order.order_total_amount}</p>
                                </Box>
                                <Button
                                    value={order._id}
                                    onClick={deleteOrderHandler}
                                    variant="contained"
                                    color="secondary"
                                >
                                    bekor qilish
                                </Button>
                                <Button
                                    value={order._id}
                                    onClick={processOrderHandler}
                                    variant="contained"
                                >
                                    to'lash
                                </Button>
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </TabPanel>
    );
}
