import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "../css/App.css";

function App() {
    return (
        <Container maxWidth="sm">
            <Stack flexDirection={"column"}>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component={"h1"} gutterBottom>
                        Create React App on TypeScript with REDUX
                    </Typography>
                </Box>
                <Button variant="contained">Contained</Button>
            </Stack>
        </Container>
    );
}

export default App;
