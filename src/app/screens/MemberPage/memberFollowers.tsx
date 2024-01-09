import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setMemberFollowers } from "./slice";
import { retrieveMemberFollowers } from "./selector";
import { Follower } from "../../../types/follow";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setMemberFollowers: (data: Follower[]) => dispach(setMemberFollowers(data)),
});

/** REDUX SELECTOR */
const memberFollowersRetriever = createSelector(
    retrieveMemberFollowers,
    (memberFollowers) => ({
        memberFollowers,
    })
);

const followers = [
    { mb_nick: "john", following: true },
    { mb_nick: "jonibek", following: false },
    { mb_nick: "belli", following: true },
];

export function MemberFollowers(props: any) {
    /** INITIALIZATIONS */
    const { setMemberFollowers } = actionDispatch(useDispatch());
    const { memberFollowers } = useSelector(memberFollowersRetriever);

    // setMemberFollowers

    /** HANDLERS */
    // subscribeHandler

    return (
        <Stack>
            {followers.map((follower) => {
                const image_url = "/auth/default_user_1.png";
                return (
                    <Box className={"follow_box"}>
                        <Avatar
                            alt={""}
                            src={image_url}
                            sx={{ width: 99, height: 99 }}
                        />

                        <div
                            style={{
                                width: "400px",
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "25px",
                                height: "85%",
                                justifyContent: "center",
                            }}
                        >
                            <span className={"username_text"}>USER</span>
                            <span className="name_text">
                                {follower.mb_nick}
                            </span>
                        </div>

                        {props.actions_enabled &&
                            (follower.following ? (
                                <Button
                                    variant="contained"
                                    className="following already"
                                    disabled
                                >
                                    FOLLOWING
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    startIcon={
                                        <img
                                            src="/icons/follow_icon.svg"
                                            style={{ width: "40px" }}
                                        />
                                    }
                                    className="follow_btn"
                                >
                                    Follow Back
                                </Button>
                            ))}
                    </Box>
                );
            })}
        </Stack>
    );
}
