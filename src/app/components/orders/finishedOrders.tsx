import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  // [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value="3">
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order.map((item) => {
                  const image_path = `/others/sandvich.jpg`;
                  return (
                    <Box className="ordersName_price">
                      <img src={image_path} className="orderDishing" />
                      <p className="titleDish">qovurma</p>
                      <Box className="priceBox">
                        <p>$11</p>
                        <img src="/icons/close.svg" />
                        <p>2</p>
                        <img src="/icons/pause.svg" />
                        <p>$22</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total_price_box red_solid">
                <Box className={"boxTotal_finished"}>
                  <Box display={'flex'} flexDirection={'row'} className={"finished_product"}>
                    <p>mahsulot narxi</p>
                    <p>$22</p>
                  </Box>
                  <Box display={'flex'} flexDirection={'row'} className={"finished_product"}>
                    <p>yetkazish xizmati</p>
                    <p>$2</p>
                  </Box>
                  <Box display={'flex'} flexDirection={'row'} className={"finished_product"}>
                    <p>jami narx</p>
                    <p>$24</p>
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
