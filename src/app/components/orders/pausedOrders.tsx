import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

const pausedOrders = [
    [1, 2],
    [1, 2, 3, 4],
    [1, 2, 3],
];

export default function PausedhedOrders(props: any) {
    return (
        <TabPanel value="1">
            <Stack>
                {pausedOrders?.map((order, index) => {
                    return (
                        <Box className="order_main_box" key={index}>
                            <Box className="order_box_scroll">
                                {order.map((item, index) => {
                                    const image_path = `/others/sandvich.jpg`;
                                    return (
                                        <Box
                                            className={"ordersName_price"}
                                            key={index}
                                        >
                                            <img
                                                src={image_path}
                                                className={"orderDishing"}
                                            />
                                            <p className="titleDish">
                                                Sandwich
                                            </p>
                                            <Box className={"priceBox"}>
                                                <p>$7</p>
                                                <img src="/icons/Close.svg" />
                                                <p>3</p>
                                                <img src="/icons/pause.svg" />
                                                <p>$21</p>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>

                            <Box className="total_price_box black_solid">
                                <Box className="boxTotal">
                                    <p>mahsulot narxi</p>
                                    <p>$21</p>
                                    <img
                                        src="/icons/plus.svg"
                                        style={{
                                            marginLeft: "10px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p>yetgazish xizmati</p>
                                    <p>$2</p>
                                    <img
                                        src="/icons/pause.svg"
                                        style={{
                                            marginLeft: "10px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p>jami narx</p>
                                    <p>$23</p>
                                </Box>
                                <Button variant="contained" color="secondary">
                                    bekor qilish
                                </Button>
                                <Button variant="contained">to'lash</Button>
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </TabPanel>
    );
}
