import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RestaurantPage } from "./screens/CommunityPage";
import { CommunityPage } from "./screens/RestaurantPage";
import { OrderPage } from "./screens/OrderPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { Homepage } from "./screens/Homepage";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
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
                    </ul>
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
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

function Home() {
    return <h2>Home</h2>;
}
