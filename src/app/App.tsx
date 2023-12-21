import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { OrderPage } from "./screens/OrderPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { CommunityPage } from "./screens/CommunityPage";
import { RestaurantPage } from "./screens/RestaurantPage";
import { Footer } from "./components/footer";
import { HomePage } from "./screens/Homepage";
import Car from "./screens/testCar";

function App() {
    const [path, setPath] = useState();
    const main_path = window.location.pathname;

    return (
        <Router>
            {main_path == "/" ? (
                <NavbarHome setPath={setPath} />
            ) : main_path.includes("/restaurant") ? (
                <NavbarRestaurant setPath={setPath} />
            ) : (
                <NavbarOthers setPath={setPath} />
            )}

            <Switch>
                <Route path="/restaurant">
                    <RestaurantPage />
                </Route>
                <Route path="/community">
                    <CommunityPage />
                </Route>
                <Route path="/orders">
                    <OrderPage />
                </Route>
                <Route path="/member-page">
                    <MemberPage />
                </Route>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">

                    <Car />
                    {/* <HomePage /> */}
                </Route>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;