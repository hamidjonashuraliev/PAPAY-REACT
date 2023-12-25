import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import {
    sweetErrorHandling,
    sweetTopSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2),
    },
}));

const ModalImg = styled.img`
    width: 62%;
    height: 100%;
    border-radius: 10px;
    background: #000;
    margin-top: 9px;
    margin-left: 10px;
`;

export default function AuthenticationModal(props: any) {
    const classes = useStyles();
    /** INITIALIZATIONS */
    let mb_nick: string = "",
        mb_phone: number = 0,
        mb_password: string = "";
    /** HANDLERS */
    const handleUsername = (e: any) => {
        mb_nick = e.target.value;
    };
    const handlePhone = (e: any) => {
        mb_phone = e.target.value;
    };
    const handlePassword = (e: any) => {
        mb_password = e.target.value;
    };
    const handleSignUpRequest = async () => {
        try {
            const is_fulfilled =
                mb_nick != "" && mb_password != "" && mb_phone != 0;
            assert.ok(is_fulfilled, Definer.input_err1);

            const signup_data = {
                mb_nick: mb_nick,
                mb_phone: mb_phone,
                mb_password: mb_password,
            };

            const memberApiService = new MemberApiService();
            await memberApiService.signupRequest(signup_data);

            props.handleSignUpClose();
            window.location.reload;
        } catch (err) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    };

    const handleLoginRequest = async () => {
        try {
            const is_fulfilled = mb_nick != "" && mb_password != "";
            assert.ok(is_fulfilled, Definer.input_err1);

            const login_data = {
                mb_nick: mb_nick,
                mb_password: mb_password,
            };

            const memberApiService = new MemberApiService();
            await memberApiService.loginRequest(login_data);

            props.handleLoginClose();
            window.location.reload;
        } catch (err) {
            console.log(err);
            props.handleLoginClose();
            sweetErrorHandling(err).then();
        }
    };

    return (
        <div>
            {/*@ts-ignore*/}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.signUpOpen}
                onClose={props.handleSignUpClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.signUpOpen}>
                    <Stack
                        className={classes.paper}
                        direction={"row"}
                        sx={{ width: "800px" }}
                    >
                        <ModalImg src={"/auth/password.jpeg"} alt="camera" />
                        <Stack
                            sx={{ marginLeft: "69px", alignItems: "center" }}
                        >
                            <h2>SignUp Form</h2>
                            <TextField
                                onChange={handleUsername}
                                sx={{ marginTop: "7px" }}
                                id="outlined-basic"
                                label="username"
                                variant="outlined"
                            />
                            <TextField
                                onChange={handlePhone}
                                sx={{ my: "17px" }}
                                id="outlined-basic"
                                label="phone number"
                                variant="outlined"
                            />
                            <TextField
                                onChange={handlePassword}
                                id="outlined-basic"
                                label="password"
                                variant="outlined"
                            />
                            <Fab
                                onClick={handleSignUpRequest}
                                sx={{ marginTop: "30px", width: "120px" }}
                                variant="extended"
                                color="primary"
                            >
                                <LoginIcon sx={{ mr: 1 }} />
                                Signup
                            </Fab>
                        </Stack>
                    </Stack>
                </Fade>
            </Modal>

            {/*@ts-ignore*/}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.loginOpen}
                onClose={props.handleLoginClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.loginOpen}>
                    <Stack
                        className={classes.paper}
                        direction={"row"}
                        sx={{ width: "700px" }}
                    >
                        <ModalImg src={"/auth/password.jpeg"} alt="camera" />
                        <Stack
                            sx={{
                                marginLeft: "65px",
                                marginTop: "25px",
                                alignItems: "center",
                            }}
                        >
                            <h2>Login Form</h2>
                            <TextField
                                onChange={handleUsername}
                                id="outlined-basic"
                                label="username"
                                variant="outlined"
                                sx={{ my: "10px" }}
                            />
                            <TextField
                                onChange={handlePassword}
                                id="outlined-basic"
                                label="password"
                                variant="outlined"
                            />
                            <Fab
                                onClick={handleLoginRequest}
                                sx={{ marginTop: "27px", width: "120px" }}
                                variant="extended"
                                color="primary"
                            >
                                <LoginIcon sx={{ mr: 1 }} />
                                Login
                            </Fab>
                        </Stack>
                    </Stack>
                </Fade>
            </Modal>
        </div>
    );
}
