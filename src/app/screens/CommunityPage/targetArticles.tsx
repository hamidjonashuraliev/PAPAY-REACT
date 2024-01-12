import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import {
    sweetErrorHandling,
    sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";
import { Definer } from "../../../lib/Definer";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function TargetArticles(props: any) {
    const time = moment().format("YY-MM-DD HH:mm");
    const { setArticlesRebuild } = props;
    /** HANDLERS **/
    const targetLikeHandler = async (e: any) => {
        try {
            assert.ok(verifiedMemberData, Definer.auth_err1);

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
        <Stack>
            {props.targetBoArticles?.map((article: BoArticle) => {
                const artImage_url = article?.art_image
                    ? `${serverApi}/${article.art_image}`
                    : "/community/default_article.svg";

                const mb_image_replace = article?.member_data?.mb_image;
                const mb_image = mb_image_replace
                    ? `${serverApi}/${article.member_data?.mb_image}`
                    : "/auth/default_user.svg";

                return (
                    <Link
                        className="all_article_box"
                        sx={{ textDecoration: "none" }}
                        href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
                    >
                        <Box
                            className={"all_article_img"}
                            sx={{
                                backgroundImage: `url(${artImage_url.replace(
                                    /\\/g,
                                    "/"
                                )})`,
                            }}
                        ></Box>
                        <Box className={"all_article_container"}>
                            <Box alignItems="center" display="flex">
                                <img
                                    src={mb_image?.replace(/\\/g, "/")}
                                    width="35px"
                                    height={"35px"}
                                    style={{
                                        borderRadius: "50%",
                                        backgroundSize: "cover",
                                    }}
                                />
                                <span className={"all_article_author_user"}>
                                    {article?.member_data.mb_nick}
                                </span>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                sx={{ mt: "15px" }}
                            >
                                <span className={"all_article_title"}>
                                    {article?.bo_id}
                                </span>
                                <span className={"all_article_desc"}>
                                    {article?.art_subject}
                                </span>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"flex-end"}
                                color={"#fff"}
                                className={"target_icons"}
                            >
                                <span>
                                    {moment(article?.createdAt).format(
                                        "YY-MM-DD HH:mm"
                                    )}
                                </span>
                                <Checkbox
                                    sx={{ ml: "40px" }}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={
                                        <Favorite style={{ color: "red" }} />
                                    }
                                    id={article?._id}
                                    onClick={targetLikeHandler}
                                    checked={
                                        article?.me_liked &&
                                        article.me_liked[0]?.my_favorite
                                            ? true
                                            : false
                                    }
                                />
                                <span style={{ marginRight: "18px" }}>
                                    {article.art_likes}
                                </span>
                                <RemoveRedEyeIcon style={{ color: "white" }} />
                                <span
                                    style={{
                                        marginRight: "18px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    {article.art_views}
                                </span>
                            </Box>
                        </Box>
                    </Link>
                );
            })}
        </Stack>
    );
}
