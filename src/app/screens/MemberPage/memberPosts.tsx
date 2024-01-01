import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function MemberPosts(props: any) {
  return (
    <Stack className="post_content">
      {["1","2","3"].map((article) => {
        return (
          <Box className="all_article_box" sx={{ cursor: "pointer" }}>
            <Box
              className="all_article_img"
              sx={{
                backgroundImage: "url('/auth/default_user_1.png')",
                borderRadius: "50%",
                backgroundSize: "cover",
              }}
            ></Box>

            <Box className="all_article_container">
              <Box alignItems="center" display="flex" columnGap={'10px'}>
                <img
                  src="/auth/default_user_1.png"
                  width="35px"
                  style={{ borderRadius: "50%" }}
                />
                <span className="all_article_author_user">
                  Martin Robertson
                </span>
              </Box>

              <Box display="flex" flexDirection="column" sx={{ mt: "15px" }}>
                <span className="all_article_title">Restaurantlarga baho</span>
                <span className="all_article_desc">Burak ajoyib restaurant</span>
              </Box>

          
                <Box
                  className="article_share"
                  style={{ width: "100%", height: "auto" }}
                >
                  <Box
                    className="article_share_main"
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "48px" }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      checked={false}
                    />
                    <span style={{ marginRight: "18px" }}>100</span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginLeft: "18px" }}>1008</span>
                  </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
}
