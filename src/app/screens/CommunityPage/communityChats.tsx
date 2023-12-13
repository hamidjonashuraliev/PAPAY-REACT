import React, { useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function CommunityChats() {
  // INITIALIZATIONS
  const [messagesList, setMessagesList] = useState([]);

  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Muloqot</Box>
      <Box className="chat_content">
        <Stack className="chat_main">
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <div className="msg_left">Bu yer jonli muloqot</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">Assalomu Alaykum</div>
          </Box>

          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">Va Alaykum assalom</div>
          </Box>

          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">Ishlariz yaxshimi?</div>
          </Box>

          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">Yaxshi raxmat</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">Target play usuli qanday ekan</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">judayam zo'r ekan</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">yoqgan bo'lsa xursandman</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">nima sizga yoqmadimi?</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">nega yoqmaydi judayam ajoyib ekan</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">yana qanday maslaxatlar bera olasiz?</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">gazini bosish kerak diymanda :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">tog'ri bo'lmasa gazni olamiz</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">shuning uchun codelarni yaxshilab yozing</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">men qiynalib qolsam yordam berasizmi?</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">albatta</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">siz aqilli inson ekansiz :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">meni sherigim aqillida</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">yaxshi ko'rganiz bormi? ):</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">ha bor albatta</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">afsus ):</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">nega tinchlikmi? (^_^)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">yaxshi korganiz kim?</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">ismi Dean</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">kim u Dean?</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">men</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">demak o'zizni yaxshi ko'rasiz ekanda? :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">ha men o'zimi sevaman menga o'zim yoqadi</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">zo'r bola ekansiz? :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">네 고마워</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left">한국어도 아세요? :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">네 잘 알아 너도 알아?</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left"> 네 조금 배운 적이 있어요 :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">응 잘했어 앞으로 열심히 해라</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left"> 네 알겠습니다 만나서 반갑습니다 :)</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={'flex-end'}
          >
            <div className="msg_right">응 이제 메시지를 보내지 말고 코드를 잘 적어</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="martin" src="/community/cute_girl.jpeg" />
            <div className="msg_left"> 네 네 앞으로 최선을 다하겠습니다 :)</div>
          </Box>
        </Stack>
      </Box>

      <Box className="chat_bott">
        <input
          type={"text"}
          name={"message"}
          className={"msg_input"}
          placeholder={"Xabar jo'natish"}
        />
        <button className={"send_msg_btn"}>
          <SendIcon style={{ color: "#fff" }} />
        </button>
      </Box>
    </Stack>
  );
}
