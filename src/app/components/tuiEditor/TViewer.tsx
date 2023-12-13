import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { Box, Stack } from "@mui/material";

const TViewer = (props: any) => {
  // const editorRef = useRef();
  // const editorRef = useRef<React.MutableRefObject<Viewer | null>>(null);

  const editorRef = useRef<Viewer | null>(null);
  return (
    <Stack
      className={"twiever"}
      sx={{ background: "white", mt: "36px", borderRadius: "10px" }}
    >
      <Box sx={{ m: "40px" }}>
        <Viewer ref={editorRef} initialValue={props.text} />
      </Box>
    </Stack>
  );
};

export default TViewer;
