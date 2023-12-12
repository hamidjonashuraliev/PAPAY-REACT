import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { url } from "inspector";
import { MonetizationOn } from "@mui/icons-material";

export function BestDishes() {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Trendagi Ovqatlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                 <span className={"dish_title_text"}>Chicken Mayo</span>
                 <span className={"dish_desc_text"}>
                    <MonetizationOn />
                    11
                 </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                 <span className={"dish_title_text"}>Chicken Mayo</span>
                 <span className={"dish_desc_text"}>
                    <MonetizationOn />
                    11
                 </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                 <span className={"dish_title_text"}>Chicken Mayo</span>
                 <span className={"dish_desc_text"}>
                    <MonetizationOn />
                    11
                 </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                 <span className={"dish_title_text"}>Chicken Mayo</span>
                 <span className={"dish_desc_text"}>
                    <MonetizationOn />
                    11
                 </span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
