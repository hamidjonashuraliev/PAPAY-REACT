import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { boArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function TargetArticles(props: any) {
    const time = moment().format("YY-MM-DD HH:mm");

    return (
        <Stack>
          {props.targetBoArticles?.map((article: boArticle) => {
            const artImage_url = article?.art_image
              ? `${serverApi}/${article.art_image}`
              : "/community/dean.jpg";
            return (
              <Link
                className="all_article_box"
                sx={{ textDecoration: "none" }}
                href={``}
              >
                <Box
                  className={"all_article_img"}
                  sx={{ backgroundImage: `url(${artImage_url})` }}
                ></Box>
                <Box className={"all_article_container"}>
                  <Box alignItems="center" display="flex">
                    <img
                      src={"/auth/default_user.svg"}
                      width="35px"
                      style={{ borderRadius: "50%", backgroundSize: "cover" }}
                    />
                    <span className={"all_article_author_user"}>
                      {article.member_data.mb_nick}
                    </span>
                  </Box>
                  <Box display="flex" flexDirection="column" sx={{ mt: "15px" }}>
                    <span className={"all_article_title"}>{article?.bo_id}</span>
                    <span className={"all_article_desc"}>{article?.art_subject}</span>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={'flex-end'}
                    color={'#fff'}
                    className={"target_icons"}
                  >
                    <span>{moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      id={article?._id}
                      /*@ts-ignore */
                      checked={false}
                    />
                    <span style={{ marginRight: "18px" }}>{article.art_likes}</span>
                    <RemoveRedEyeIcon style={{ color: "white" }} />
                    <span style={{ marginRight: "18px", marginLeft: '10px' }}>{article.art_views}</span>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Stack>
      );
}
