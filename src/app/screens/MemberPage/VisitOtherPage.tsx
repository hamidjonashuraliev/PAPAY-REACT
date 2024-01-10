import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Pagination,
    PaginationItem,
    Stack,
} from "@mui/material";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TViewer from "../../components/tuiEditor/TViewer";
import { Member } from "../../../types/user";
import { BoArticle, SearchMemberArticlesObj } from "../../../types/boArticle";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import assert from "assert";
import { Definer } from "../../../lib/Definer";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
} from "./slice";
import {
    retrieveChosenMember,
    retrieveChosenMemberBoArticles,
    retrieveChosenSingleBoArticle,
} from "./selector";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberAipService from "../../apiServices/memberApiService";
import {
    sweetErrorHandling,
    sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import FollowApiService from "../../apiServices/followApiService";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setChosenMember: (data: Member) => dispach(setChosenMember(data)),
    setchosenMemberBoArticles: (data: BoArticle[]) =>
        dispach(setChosenMemberBoArticles(data)),
    setChosenSingleBoArticle: (data: BoArticle) =>
        dispach(setChosenSingleBoArticle(data)),
});

/** REDUX SELECTOR */
const chosenMemberRetriever = createSelector(
    retrieveChosenMember,
    (chosenMember) => ({
        chosenMember,
    })
);
const chosenMemberBoArticlesRetriever = createSelector(
    retrieveChosenMemberBoArticles,
    (chosenMemberBoArticles) => ({
        chosenMemberBoArticles,
    })
);
const chosenSingleBoArticleRetriever = createSelector(
    retrieveChosenSingleBoArticle,
    (chosenSingleBoArticle) => ({
        chosenSingleBoArticle,
    })
);

export function VisitOtherPage(props: any) {
    /** INITIALIZATIONS */
    const history = useHistory();
    const { chosen_mb_id, chosen_art_id } = props;
    const {
        setChosenMember,
        setchosenMemberBoArticles,
        setChosenSingleBoArticle,
    } = actionDispatch(useDispatch());
    const { chosenMember } = useSelector(chosenMemberRetriever);
    const { chosenMemberBoArticles } = useSelector(
        chosenMemberBoArticlesRetriever
    );
    const { chosenSingleBoArticle } = useSelector(
        chosenSingleBoArticleRetriever
    );
    const [value, setValue] = useState("1");
    const [memberArticleSearchObj, setMemberArticleSearchObj] =
        useState<SearchMemberArticlesObj>({
            mb_id: chosen_mb_id,
            page: 1,
            limit: 4,
        });
    const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
    const [followeRebuild, setFollowRebuild] = useState<boolean>(false);

    useEffect(() => {
        if (chosen_mb_id === verifiedMemberData?._id) {
            history.push("/member-page");
        }
        const communityService = new CommunityApiService();
        if (chosen_art_id) {
            communityService
                .getChosenArticles(chosen_mb_id)
                .then((data) => {
                    setChosenSingleBoArticle(data);
                    setValue("4");
                })
                .catch((err) => console.log(err));
        }
        communityService
            .getCommunityArticles(memberArticleSearchObj)
            .then((data) => setchosenMemberBoArticles(data))
            .catch((err) => console.log(err));
    }, [memberArticleSearchObj, chosen_mb_id, articlesRebuild]);

    useEffect(() => {
        if (chosen_mb_id === verifiedMemberData?._id) {
            history.push("/member-page");
        }

        const memberService = new MemberAipService();
        memberService
            .getChosenMember(memberArticleSearchObj.mb_id)
            .then((data) => setChosenMember(data))
            .catch((err) => console.log(err));
    }, [verifiedMemberData, chosen_mb_id, followeRebuild]);

    /** HANDLERS */
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handlePaginationChange = (event: any, value: number) => {
        memberArticleSearchObj.page = value;
        setMemberArticleSearchObj({ ...memberArticleSearchObj });
    };

    const renderChosenArticleHandler = async (art_id: string) => {
        try {
            const communityService = new CommunityApiService();
            communityService
                .getChosenArticles(art_id)
                .then((data) => {
                    setChosenSingleBoArticle(data);
                    setValue("4");
                })
                .catch((err) => console.log(err));
        } catch (err: any) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    };

    const subscribeHandler = async (e: any) => {
        try {
            assert.ok(verifiedMemberData, Definer.auth_err1);

            const followService = new FollowApiService();
            await followService.subscribe(e.target.value);
            await sweetTopSmallSuccessAlert(
                "subscribed successfully",
                700,
                false
            );
            setFollowRebuild(!followeRebuild);
        } catch (err: any) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    };

    const unsubscribeHandler = async (e: any) => {
        try {
            e.stopPropagation();
            assert.ok(verifiedMemberData, Definer.auth_err1);

            const followService = new FollowApiService();
            await followService.unsubscribe(e.target.value);

            await sweetTopSmallSuccessAlert(
                "unsubscribed successfully",
                700,
                false
            );
            setFollowRebuild(!followeRebuild);
        } catch (err: any) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    };

    return (
        <div className="my_page">
            <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
                <Stack className="my_page_frame">
                    <TabContext value={value}>
                        <Box display={"flex"}>
                            <Stack className="my_page_left">
                                <Box display="flex" flexDirection="column">
                                    <TabPanel value="1">
                                        <Box className="menu_name">
                                            Maqolalar
                                        </Box>
                                        <Box className="menu_content">
                                            <MemberPosts
                                                renderChosenArticleHandler={
                                                    renderChosenArticleHandler
                                                }
                                                chosenMemberBoArticles={
                                                    chosenMemberBoArticles
                                                }
                                                setArticlesRebuild={
                                                    setArticlesRebuild
                                                }
                                            />
                                            <Stack
                                                sx={{ my: "40px" }}
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Box className="bottom_box">
                                                    <Pagination
                                                        count={
                                                            memberArticleSearchObj.page >=
                                                            3
                                                                ? memberArticleSearchObj.page +
                                                                  1
                                                                : 3
                                                        }
                                                        page={
                                                            memberArticleSearchObj.page
                                                        }
                                                        renderItem={(item) => (
                                                            <PaginationItem
                                                                components={{
                                                                    previous:
                                                                        ArrowBackIcon,
                                                                    next: ArrowForwardIcon,
                                                                }}
                                                                {...item}
                                                                color="secondary"
                                                            />
                                                        )}
                                                        onChange={
                                                            handlePaginationChange
                                                        }
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </TabPanel>

                                    <TabPanel value="2">
                                        <Box className="menu_name">
                                            Followers
                                        </Box>
                                        <Box className="menu_content">
                                            <MemberFollowers
                                                actions_enabled={false}
                                                followeRebuild={followeRebuild}
                                                setFollowRebuild={
                                                    setFollowRebuild
                                                }
                                                mb_id={chosen_mb_id}
                                            />
                                        </Box>
                                    </TabPanel>

                                    <TabPanel value="3">
                                        <Box className="menu_name">
                                            Following
                                        </Box>
                                        <Box className="menu_content">
                                            <MemberFollowing
                                                actions_enabled={false}
                                                followeRebuild={followeRebuild}
                                                setFollowRebuild={
                                                    setFollowRebuild
                                                }
                                                mb_id={chosen_mb_id}
                                            />
                                        </Box>
                                    </TabPanel>

                                    <TabPanel value="4">
                                        <Box className="menu_name">
                                            Tanlangan Maqola
                                        </Box>
                                        <Box className="menu_content">
                                            <TViewer
                                                text={`<h3>Hello Dean</h3>`}
                                            />
                                        </Box>
                                    </TabPanel>
                                </Box>
                            </Stack>

                            <Stack className="my_page_right">
                                <Box className="order_info_box">
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                    >
                                        <div className="order_user_img">
                                            <img
                                                src="/auth/default_user_1.png"
                                                style={{
                                                    width: "117px",
                                                    height: "112px",
                                                    borderRadius: "37px",
                                                }}
                                                className="order_user_avatar"
                                            />
                                            <div className="order_user_icon_box">
                                                <img src="/icons/User.svg" />
                                            </div>
                                        </div>
                                        <span className="order_user_name">
                                            {chosenMember?.mb_nick}
                                        </span>
                                        <span className="order_user_prof">
                                            {chosenMember?.mb_type}
                                        </span>
                                    </Box>
                                    <Box className="user_media_box_1">
                                        <FacebookIcon />
                                        <InstagramIcon />
                                        <TelegramIcon />
                                        <YouTubeIcon />
                                    </Box>

                                    <Box className="user_media_box_1">
                                        <p className="follows">
                                            Followers:{" "}
                                            {chosenMember?.mb_subscriber_cnt}
                                        </p>
                                        <p className="follows">
                                            Followings:{" "}
                                            {chosenMember?.mb_follow_cnt}
                                        </p>
                                    </Box>

                                    <span className="user_desc">
                                        {chosenMember?.mb_description ??
                                            " Qo'shimcha ma'lumot kiritilmagan"}
                                    </span>

                                    <Box
                                        className="btn_right"
                                        sx={{ mt: "20px" }}
                                    >
                                        <TabList
                                            onChange={handleChange}
                                            aria-label="Lab API tabs example"
                                        >
                                            {chosenMember?.me_followed &&
                                            chosenMember.me_followed[0]
                                                ?.my_following ? (
                                                <Tab
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                    value="4"
                                                    component={(e: any) => (
                                                        <Button
                                                            value={
                                                                chosenMember?._id
                                                            }
                                                            variant="contained"
                                                            style={{
                                                                backgroundColor:
                                                                    "#f70909b8",
                                                            }}
                                                            onClick={
                                                                unsubscribeHandler
                                                            }
                                                        >
                                                            BEKOR QILISH
                                                        </Button>
                                                    )}
                                                />
                                            ) : (
                                                <Tab
                                                    style={{
                                                        flexDirection: "column",
                                                    }}
                                                    value="4"
                                                    component={(e: any) => (
                                                        <Button
                                                            value={
                                                                chosenMember?._id
                                                            }
                                                            variant="contained"
                                                            style={{
                                                                backgroundColor:
                                                                    "#30945e",
                                                            }}
                                                            onClick={
                                                                subscribeHandler
                                                            }
                                                        >
                                                            FOLLOW QILISH
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </TabList>
                                    </Box>
                                </Box>

                                <Box className="my_page_menu">
                                    <TabList
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                    >
                                        <Tab
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            component={() => (
                                                <div
                                                    className={`menu_box`}
                                                    onClick={() =>
                                                        setValue("1")
                                                    }
                                                >
                                                    <img src="/icons/post.svg" />
                                                    <span>Maqolalar</span>
                                                </div>
                                            )}
                                            value="1"
                                        />

                                        <Tab
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            component={() => (
                                                <div
                                                    className={`menu_box`}
                                                    onClick={() =>
                                                        setValue("2")
                                                    }
                                                >
                                                    <img src="/icons/followers.svg" />
                                                    <span>Followers</span>
                                                </div>
                                            )}
                                            value="2"
                                        />

                                        <Tab
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            component={() => (
                                                <div
                                                    className={`menu_box`}
                                                    onClick={() =>
                                                        setValue("3")
                                                    }
                                                >
                                                    <img src="/icons/following.svg" />
                                                    <span>Following</span>
                                                </div>
                                            )}
                                            value="3"
                                        />
                                    </TabList>
                                </Box>
                            </Stack>
                        </Box>
                    </TabContext>
                </Stack>
            </Container>
        </div>
    );
}
