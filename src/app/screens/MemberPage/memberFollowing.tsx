import React, { useEffect, useState } from "react";
import {Box, Stack} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Dispatch } from "@reduxjs/toolkit";

const followings = [
  { mb_nick: "dean" },
  { mb_nick: "justin" },
  { mb_nick: "jason" },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followings.map((following) => {
        const image_url = "/auth/default_user_1.png";
        return (
          <Box className="follow_box">
            <Avatar alt="" src={image_url} sx={{ width: 99, height: 99 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
                justifyContent: 'center'
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{following.mb_nick}</span>
            </div>
            {props.actions_enabled && (
              <Button
                variant="contained"
                startIcon={
                  <img
                    src="/icons/follow_icon.svg"
                    style={{ width: "40px", marginLeft: "16px" }}
                  />
                }
                className={"follow_cancel_btn"}
              >
                Bekor Qilish
                </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
