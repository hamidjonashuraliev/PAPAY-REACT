import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import {
    sweetErrorHandling,
    sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

export function MemberPosts(props: any) {
    const {
        chosenMemberBoArticles,
        renderChosenArticleHandler,
        setArticlesRebuild,
        chosenSingleBoArticle,
    } = props;

    /** HANDLERS */
    const targetLikeHandler = async (e: any) => {
        try {
            e.stopPropagation();
            assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

            const memberService = new MemberApiService();
            const like_result = await memberService.memberLikeTarget({
                like_ref_id: e.target.id,
                group_type: "community",
            });
            assert.ok(like_result, Definer.general_err1);

            await sweetTopSmallSuccessAlert("success", 800, false);
            setArticlesRebuild(new Date());
        } catch (err: any) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    };

    return (
        <Stack className="post_content">
            {chosenMemberBoArticles?.map((article: BoArticle) => {
                const image_path = article.art_image
                    ? `${serverApi}/${article.art_image}`
                    : "/community/default_article.svg";

                return (
                    <Box className="all_article_box" sx={{ cursor: "pointer" }}>
                        <div
                            onClick={() =>
                                renderChosenArticleHandler(article?._id)
                            }
                            className="all_article_box"
                        >
                            <Box
                                className="all_article_img"
                                sx={{
                                    backgroundImage: `url(${image_path})`,
                                    borderRadius: "50%",
                                    backgroundSize: "cover",
                                }}
                            ></Box>

                            <Box className="all_article_container">
                                <Box
                                    alignItems="center"
                                    display="flex"
                                    columnGap={"10px"}
                                >
                                    <img
                                        src={
                                            article?.member_data?.mb_image
                                                ? `${serverApi}/${article.member_data.mb_image}`
                                                : "/auth/default_user_1.png"
                                        }
                                        width={"35px"}
                                        height={"35px"}
                                        style={{ borderRadius: "50%" }}
                                    />
                                    <span className="all_article_author_user">
                                        {article?.member_data?.mb_nick}
                                    </span>
                                </Box>

                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={{ mt: "15px" }}
                                >
                                    <span className="all_article_title">
                                        {article?.bo_id}
                                    </span>
                                    <span className="all_article_desc">
                                        {article?.art_subject}
                                    </span>
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
                                        <span>
                                            {moment(article?.createdAt).format(
                                                "YY-MM-DD HH:mm"
                                            )}
                                        </span>
                                        <Checkbox
                                            sx={{ ml: "48px" }}
                                            icon={<FavoriteBorder />}
                                            id={article?._id}
                                            checkedIcon={
                                                <Favorite
                                                    style={{ color: "red" }}
                                                />
                                            }
                                            checked={
                                                article?.me_liked &&
                                                article.me_liked[0]?.my_favorite
                                                    ? true
                                                    : false
                                            }
                                            onClick={targetLikeHandler}
                                        />
                                        <span style={{ marginRight: "18px" }}>
                                            {article?.art_likes}
                                        </span>
                                        <RemoveRedEyeIcon />
                                        <span style={{ marginLeft: "18px" }}>
                                            {article?.art_views}
                                        </span>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Box>
                );
            })}
        </Stack>
    );
}
