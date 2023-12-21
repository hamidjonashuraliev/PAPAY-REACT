import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function TargetArticles(props: any) {
    const time = moment().format("YY-MM-DD HH:mm");

    return (
        <Stack>
            {props.targetBoArticles?.map((article: any, index: number) => {
                const artImage_url = "/community/john.jpg";
                return (
                    <Link
                        className="all_article_box"
                        sx={{ textDecoration: "none" }}
                        href={article.url}
                        key={index}
                    >
                        <Box
                            className="all_article_img"
                            sx={{ backgroundImage: `url(${artImage_url})` }}
                        ></Box>
                        <Box className="all_article_container">
                            <Box alignItems="center" display="flex">
                                <img
                                    src="/auth/default_user.svg"
                                    width="35px"
                                    style={{
                                        borderRadius: "50%",
                                        backgroundSize: "cover",
                                    }}
                                />
                                <span className="all_article_author_user">
                                    john
                                </span>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                sx={{ mt: "15px" }}
                            >
                                <span className="all_article_title">
                                    evaluation
                                </span>
                                <span className="all_article_desc">
                                    Texas De Brazil zor restaurant!
                                </span>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                className={"target_icons"}
                            >
                                <div className={"target_icons_2"}>{time}</div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: "5px",
                                    }}
                                >
                                    <Checkbox
                                        {...label}
                                        icon={
                                            <FavoriteBorder
                                                style={{ color: "white" }}
                                            />
                                        }
                                        checkedIcon={
                                            <Favorite
                                                style={{ color: "red" }}
                                            />
                                        }
                                    />
                                    <span>100</span>
                                    <Checkbox
                                        {...label}
                                        icon={
                                            <RemoveRedEyeIcon
                                                style={{ color: "white" }}
                                            />
                                        }
                                        checkedIcon={
                                            <RemoveRedEyeIcon
                                                style={{ color: "yellow" }}
                                            />
                                        }
                                    />
                                    <span>1000</span>
                                </div>
                            </Box>
                        </Box>
                    </Link>
                );
            })}
        </Stack>
    );
}
