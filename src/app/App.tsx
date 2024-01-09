import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { OrdersPage } from "./screens/OrderPage";
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
import AuthenticationModal from "./components/auth";
import { Member } from "../types/user";
import { serverApi } from "../lib/config";
import {
    sweetFailureProvider,
    sweetTopSmallSuccessAlert,
} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import assert from "assert";
import MemberApiService from "./apiServices/memberApiService";
import "../app/apiServices/verify";
import { CartItem } from "../types/others";
import { Product } from "../types/product";

function App() {
    /** INITIALIZATIONS */
    const [verifieaMemberData, setVerifieaMemberData] = useState<Member | null>(
        null
    );
    const [path, setPath] = useState();
    const main_path = window.location.pathname;
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [ordersRebuild, setOrdersRebuild] = useState<Date>(new Date());

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const cartJson: any = localStorage.getItem("cart_data");
    const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
    const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);

    useEffect(() => {
        console.log("=== useEffect: App ===");
        const memberDataJson: any = localStorage.getItem("member_data")
            ? localStorage.getItem("member_data")
            : null;
        const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
        if (member_data) {
            member_data.mb_image = member_data.mb_image
                ? `${serverApi}/${member_data.mb_image}`
                : "/auth/default_user.svg";
            setVerifieaMemberData(member_data);
        }
    }, [signUpOpen, loginOpen]);

    /** HANDLERS */
    const handleSignUpOpen = () => setSignUpOpen(true);
    const handleSignUpClose = () => setSignUpOpen(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
    };
    const handleLogOutRequest = async () => {
        try {
            const memberApiService = new MemberApiService();
            await memberApiService.logOutRequest();
            await sweetTopSmallSuccessAlert("success", 700, true);
        } catch (err: any) {
            console.log(err);
            sweetFailureProvider(Definer.general_err1);
        }
    };

    const onAdd = (product: Product) => {
        const exist: any = cartItems.find(
            (item: CartItem) => item._id === product._id
        );
        if (exist) {
            const cart_updated = cartItems.map((item: CartItem) =>
                item._id === product._id
                    ? { ...exist, quantity: exist.quantity + 1 }
                    : item
            );
            setCartItems(cart_updated);
            localStorage.setItem("cart_data", JSON.stringify(cart_updated));
        } else {
            const new_item: CartItem = {
                _id: product._id,
                quantity: 1,
                name: product.product_name,
                price: product.product_price,
                image: product.product_images[0],
            };
            const cart_updated = [...cartItems, { ...new_item }];
            setCartItems(cart_updated);
            localStorage.setItem("cart_data", JSON.stringify(cart_updated));
        }
    };
    const onRemove = (item: CartItem) => {
        const item_data: any = cartItems.find(
            (ele: CartItem) => ele._id === item._id
        );
        if (item_data.quantity === 1) {
            const cart_updated = cartItems.filter(
                (ele: CartItem) => ele._id !== item._id
            );
            setCartItems(cart_updated);
            localStorage.setItem("cart_data", JSON.stringify(cart_updated));
        } else {
            const cart_updated = cartItems.map((ele: CartItem) =>
                ele._id === item._id
                    ? { ...item_data, quantity: item_data.quantity - 1 }
                    : ele
            );
            setCartItems(cart_updated);
            localStorage.setItem("cart_data", JSON.stringify(cart_updated));
        }
    };

    const onDelete = (item: CartItem) => {
        const cart_updated = cartItems.filter(
            (ele: CartItem) => ele._id !== item._id
        );
        setCartItems(cart_updated);
        localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    };
    const onDeleteAll = () => {
        setCartItems([]);
        localStorage.removeItem("cart_data");
    };

    return (
        <Router>
            {main_path == "/" ? (
                <NavbarHome
                    setPath={setPath}
                    handleLoginOpen={handleLoginOpen}
                    handleSignUpOpen={handleSignUpOpen}
                    anchorEl={anchorEl}
                    open={open}
                    handleLogOutClick={handleLogOutClick}
                    handleCloseLogOut={handleCloseLogOut}
                    handleLogOutRequest={handleLogOutRequest}
                    verifieaMemberData={verifieaMemberData}
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onDelete={onDelete}
                    onDeleteAll={onDeleteAll}
                    setOrdersRebuild={setOrdersRebuild}
                />
            ) : main_path.includes("/restaurant") ? (
                <NavbarRestaurant
                    setPath={setPath}
                    handleLoginOpen={handleLoginOpen}
                    handleSignUpOpen={handleSignUpOpen}
                    anchorEl={anchorEl}
                    open={open}
                    handleLogOutClick={handleLogOutClick}
                    handleCloseLogOut={handleCloseLogOut}
                    handleLogOutRequest={handleLogOutRequest}
                    verifieaMemberData={verifieaMemberData}
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onDelete={onDelete}
                    onDeleteAll={onDeleteAll}
                    setOrdersRebuild={setOrdersRebuild}
                />
            ) : (
                <NavbarOthers
                    setPath={setPath}
                    handleLoginOpen={handleLoginOpen}
                    handleSignUpOpen={handleSignUpOpen}
                    anchorEl={anchorEl}
                    open={open}
                    handleLogOutClick={handleLogOutClick}
                    handleCloseLogOut={handleCloseLogOut}
                    handleLogOutRequest={handleLogOutRequest}
                    verifieaMemberData={verifieaMemberData}
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onDelete={onDelete}
                    onDeleteAll={onDeleteAll}
                />
            )}

            <Switch>
                <Route path="/restaurant">
                    <RestaurantPage onAdd={onAdd} />
                </Route>
                <Route path="/community">
                    <CommunityPage />
                </Route>
                <Route path="/orders">
                <OrdersPage
            ordersRebuild={ordersRebuild}
            setOrdersRebuild={setOrdersRebuild}
            verifieaMemberData={verifieaMemberData}
          />
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

            <Footer />

            <AuthenticationModal
                loginOpen={loginOpen}
                handleLoginOpen={handleLoginOpen}
                handleLoginClose={handleLoginClose}
                signUpOpen={signUpOpen}
                handleSignUpOpen={handleSignUpOpen}
                handleSignUpClose={handleSignUpClose}
            />
        </Router>
    );
}

export default App;
