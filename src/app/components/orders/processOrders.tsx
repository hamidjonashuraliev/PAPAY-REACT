import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import Marginer from "../marginer";
// import Moment from "react-moment";

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order.map((item) => {
                  const image_path = `/others/sandvich.jpg`;
                  return (
                    <Box className="ordersName_price">
                      <img src={image_path} className="orderDishing" />
                      <p className="titleDish">Qovurma</p>
                      <Box className="priceBox">
                        <p>$11</p>
                        <img src="/icons/Close.svg" />
                        <p>10</p>
                        <img src="/icons/pause.svg" />
                        <p>$110</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total_price_box MediumPurple_solid">
                <Box className="boxTotal">
                  <p>mahsulot narxi</p>
                  <p>$21</p>
                  <img src="/icons/plus.svg" alt="Plus" />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img src="/icons/pause.svg" alt="Pause" />
                  <p>jami narx</p>
                  <p>$23</p>
                  <Box>
                    <Marginer
                      direction="vertical"
                      height="25"
                      width="2"
                      bg="red"
                    />
                  </Box>
                  <Box>
                    <span>{currentDate} </span>
                    <span>{currentTime}</span>
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
                    <Button variant="contained">Yakunlash</Button>
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
