import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
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
import { boArticle } from "../../../types/boArticle";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import {
    setChosenMember,
    setchosenMemberBoArticles,
    setChosenSingleBoArticle,
} from "./slice";
import {
    retrieveChosenMember,
    retrieveChosenMemberBoArticles,
    retrieveChosenSingleBoArticle,
} from "./selector";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setChosenMember: (data: Member) => dispach(setChosenMember(data)),
    setchosenMemberBoArticles: (data: boArticle[]) =>
        dispach(setchosenMemberBoArticles(data)),
    setChosenSingleBoArticle: (data: boArticle) =>
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

    /** HANDLERS */
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
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
                                            <MemberPosts />
                                        </Box>
                                    </TabPanel>

                                    <TabPanel value="2">
                                        <Box className="menu_name">
                                            Followers
                                        </Box>
                                        <Box className="menu_content">
                                            <MemberFollowers
                                                actions_enabled={false}
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
                                            Martin Robertson
                                        </span>
                                        <span className="order_user_prof">
                                            USER
                                        </span>
                                    </Box>
                                    <Box className="user_media_box_1">
                                        <FacebookIcon />
                                        <InstagramIcon />
                                        <TelegramIcon />
                                        <YouTubeIcon />
                                    </Box>

                                    <Box className="user_media_box_1">
                                        <p className="follows">Followers: 10</p>
                                        <p className="follows">
                                            Followings: 10
                                        </p>
                                    </Box>

                                    <span className="user_desc">
                                        Qo'shimcha ma'lumot kiritilmagan
                                    </span>

                                    <Box
                                        className="btn_right"
                                        sx={{ mt: "20px" }}
                                    >
                                        <TabList
                                            onChange={handleChange}
                                            aria-label="Lab API tabs example"
                                        >
                                            {true ? (
                                                <Tab
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                    value="4"
                                                    component={(e) => (
                                                        <Button
                                                            variant="contained"
                                                            style={{
                                                                backgroundColor:
                                                                    "#f70909b8",
                                                            }}
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
                                                    component={(e) => (
                                                        <Button
                                                            variant="contained"
                                                            style={{
                                                                backgroundColor:
                                                                    "#30945e",
                                                            }}
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
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        <Tab
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            component={() => (
                                                <div
                                                    className={`menu_box ${value}`}
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
                                                    className={`menu_box ${value}`}
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
                                                    className={`menu_box ${value}`}
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
