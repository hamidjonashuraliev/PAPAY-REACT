import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Order } from "../../../types/orders";
//REDUX
import { useSelector } from "react-redux";

import { createSelector } from "reselect";
import { retrieveProcessOrders } from "../../screens/OrderPage/selector";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import {
    sweetErrorHandling,
    sweetFailureProvider,
} from "../../../lib/sweetAlert";
import Marginer from "../marginer";
import moment from "moment";

import OrderApiService from "../../apiServices/orderApiService";
import { verifiedMemberData } from "../../apiServices/verify";

// REDUX SELECTOR
const processOrderRetriever = createSelector(
    retrieveProcessOrders,
    (processOrders) => ({
        processOrders,
    })
);

const processOrders = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

export default function ProcessOrders(props: any) {
    /**INITIALIZATIONS */
    const { processOrders } = useSelector(processOrderRetriever);

    /* HANDLERS */
    const finishOrderHandler = async (event: any) => {
        try {
            const order_id = event.target.value;
            const data = { order_id: order_id, order_status: "FINISHED" };
            if (!verifiedMemberData) {
                sweetFailureProvider("Please login first", true);
            }

            let confirmation = window.confirm(
                "Buyurtmani olganingizni tasdiqlaysizmi?"
            );
            if (confirmation) {
                const orderService = new OrderApiService();
                await orderService.updateOrderStatus(data);
                props.setOrderRebuild(new Date());
            }
        } catch (err) {
            console.log("finishOrderHandler, ERROR: ", err);
            sweetErrorHandling(err).then();
        }
    };
    return (
        <TabPanel value={"2"}>
            <Stack>
                {processOrders?.map((order: Order) => {
                    return (
                        <Box className="order_main_box">
                            <Box className="order_box_scroll">
                                <Box>
                                    {order.order_items.map((item) => {
                                        const product: Product =
                                            order.product_data.filter(
                                                (ele) =>
                                                    ele._id === item.product_id
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
                            </Box>

                            <Box className="total_price_box MediumPurple_solid">
                                <Box className="boxTotal">
                                    <p>Mahsulot narxi</p>
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
                                    <p>Yetgazish xizmati</p>
                                    <p>${order.order_delivery_cost}</p>
                                    <img
                                        src="/icons/pause.svg"
                                        style={{
                                            marginLeft: "10px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p>Jami narx</p>
                                    <p>${order?.order_total_amount}</p>
                                    <Box>
                                        <Marginer
                                            direction="vertical"
                                            height="25"
                                            width="2"
                                            bg="red"
                                        />
                                    </Box>
                                    <Box>
                                        <p>
                                            {moment(order.createdAt).format(
                                                "YYYY-MM-DD HH:mm"
                                            )}{" "}
                                        </p>
                                    </Box>
                                    <Box>
                                        <Marginer
                                            direction="vertical"
                                            height="25"
                                            width="2"
                                            bg="red"
                                        />
                                    </Box>
                                    <Box>
                                        <Button
                                            value={order._id}
                                            onClick={finishOrderHandler}
                                            variant="contained"
                                        >
                                            Yakunlash
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </TabPanel>
    );
}
