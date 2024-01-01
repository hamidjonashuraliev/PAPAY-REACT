import React, { useEffect, useRef, useState } from "react";
import { Box,  Stack  } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function MySettings(props: any) {
  return (
    <Stack className="my_settings_page">
      <Box className="member_media_frame">
        <img
          src={"/auth/default_user_1.png"}
          className="nb_image"
          width={"100px"}
          style={{ borderRadius: "50%" }}
          height="100px"
        />

        <div className="media_change_box">
          <span className="text_rasm">Rasm Yuklash</span>
          <p className="text_rasm_1">JPG, JPEG, PNG rasmlarni yuklay olasiz!</p>
          <div className="up_del_box">
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>

      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Ism</label>
          <input
            className="spec_input mb_nick"
            type="text"
            placeholder="User name"
            name="mb_nick"
          />
        </div>
      </Box>

      <Box className="input_frame">
        <div className="short_input long_input">
          <label className="spec_label">Telefon Raqam</label>
          <input
            className="spec_input mb_phone"
            type="text"
            placeholder="99890 7524789"
            name="mb_phone"
          />
        </div>

        <div className="short_input long_input">
          <label className="spec_label">Manzil</label>
          <input
            className="spec_input mb_address"
            type="text"
            placeholder="Tashkent, Yunus Abad 4-1"
            name="mb_address"
          />
        </div>
      </Box>

      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Ma'lumot</label>
          <textarea
            placeholder=" Salom, Men Papays  Developerlar uyushmasiman!"
            name="mb_description"
            className="spec_textarea mb_description"
          />
        </div>
      </Box>

      <Box display="flex" justifyContent="flex-end" sx={{ mt: "25px" }}>
        <Button variant="contained">Saqlash</Button>
      </Box>
    </Stack>
  );
}
