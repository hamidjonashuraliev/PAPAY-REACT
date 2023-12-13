import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followers = [
  { mb_nick: "dean", following: true },
  { mb_nick: "jonibek", following: false },
  { mb_nick: "belli", following: true },
];

export function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/auth/default_user_1.png";
        return (
          <Box className={"follow_box"}>
            <Avatar alt={""} src={image_url} sx={{ width: 99, height: 99 }} />

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
              <span className="name_text">{follower.mb_nick}</span>
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
