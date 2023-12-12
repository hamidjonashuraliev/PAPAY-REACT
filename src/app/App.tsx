import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
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
import { HomePage } from "./screens/Homepage";

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

            <nav>
                {/* <ul> 
            <li>
              <Link to="/restaurant">RestaurantPage</Link>
            </li>
            <li>
              <Link to="/community">CommunityPage</Link>
            </li>
            <li>
              <Link to="/orders">OrderPage</Link>
            </li>
            <li>
              <Link to="/member-page">MemberPage</Link>
            </li>
            <li>
              <Link to="/help">HelpPage</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/">Homepage</Link>
            </li>
          </ul> */}
            </nav>

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
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
