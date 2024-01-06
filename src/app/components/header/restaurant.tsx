import {
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import { Logout } from "@mui/icons-material";
import Basket from "./basket";

export function NavbarRestaurant(props: any) {
    return (
        <div className="format_restaurant home_navbar">
            <Container>
                <Stack
                    flexDirection={"row"}
                    className="navbar_config"
                    justifyContent={"space-between"}
                >
                    <Box>
                        <img src="/icons/Papay.svg" />
                    </Box>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                        className="navbar_links"
                    >
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/">Bosh Sahifa</NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink
                                to="/restaurant"
                                activeClassName="underline"
                            >
                                Oshhona
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/orders" activeClassName="underline">
                                Buyurtma
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink
                                to="/community"
                                activeClassName="underline"
                            >
                                Jamiyat
                            </NavLink>
                        </Box>
                        {props.verifiedMemberData ? (
                            <Box className="hover-line" onClick={props.setPath}>
                                <NavLink
                                    to="/member-page"
                                    activeClassName="underline"
                                >
                                    Sahifam
                                </NavLink>
                            </Box>
                        ) : null}
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/help" activeClassName="underline">
                                Yordam
                            </NavLink>
                        </Box>
                        <Basket cartItems={props.cartItems} onAdd={props.onAdd}/>
                        {!props.verifiedMemberData ? (
                            <Box>
                                <Button
                                    variant="contained"
                                    style={{
                                        color: "#FFFFFF",
                                        background: "#1976d2",
                                    }}
                                    onClick={props.handleLoginOpen}
                                >
                                    KIRISH
                                </Button>
                            </Box>
                        ) : (
                            <img
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "24px",
                                }}
                                src={props.verifiedMemberData.mb_image}
                                onClick={props.handleLogOutClick}
                            />
                        )}

                        <Menu
                            anchorEl={props.anchorEl}
                            open={props.open}
                            onClose={props.handleCloseLogOut}
                            onClick={props.handleCloseLogOut}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&:before": {
                                        content: '"',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{
                                horizontal: "right",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            <MenuItem onClick={props.handleLogOutRequest}>
                                <ListItemIcon>
                                    <Logout
                                        fontSize="small"
                                        style={{ color: "blue" }}
                                    />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
