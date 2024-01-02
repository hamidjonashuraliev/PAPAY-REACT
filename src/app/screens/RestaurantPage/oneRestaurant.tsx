import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { useParams } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
    retrieveChosenRestaurants,
    retrieveRandomRestaurants,
    retrieveTargetProducts,
} from "../../screens/RestaurantPage/selector";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import {
    setChosenRestaurant,
    setRandomRestaurants,
    setTargetProducts,
} from "../../screens/RestaurantPage/slice";
import { Product } from "../../../types/product";
import { ProductSearchObj } from "../../../types/others";
import ProductApiService from "../../apiServices/productApiService";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setRandomRestaurants: (data: Restaurant[]) =>
        dispach(setRandomRestaurants(data)),
    setChosenRestaurant: (data: Restaurant) =>
        dispach(setChosenRestaurant(data)),
    setTargetProducts: (data: Product[]) => dispach(setTargetProducts(data)),
});

/** REDUX Selector */

const randomRestaurantsRetriever = createSelector(
    retrieveRandomRestaurants,
    (randomRestaurants) => ({
        randomRestaurants,
    })
);

const chosenRestaurantsRetriever = createSelector(
    retrieveChosenRestaurants,
    (chosenRestaurant) => ({
        chosenRestaurant,
    })
);

const targetProductsRetriever = createSelector(
    retrieveTargetProducts,
    (targetProducts) => ({
        targetProducts,
    })
);

export function OneRestaurant() {
    /** INITIALIZATIONS */
    let { restaurant_id } = useParams<{ restaurant_id: string }>();
    const { setRandomRestaurants, setChosenRestaurant, setTargetProducts } =
        actionDispatch(useDispatch());
    const { randomRestaurants } = useSelector(randomRestaurantsRetriever);
    const { chosenRestaurant } = useSelector(chosenRestaurantsRetriever);
    const { targetProducts } = useSelector(targetProductsRetriever);
    const [chosenRestaurantId, setchosenRestaurantId] =
        useState<string>(restaurant_id);
    const [targetProductSearchObj, setTargetProductSearchObj] =
        useState<ProductSearchObj>({
            page: 1,
            limit: 8,
            order: "createdAt",
            restaurant_mb_id: restaurant_id,
            product_collection: "dish",
        });

    useEffect(() => {
        const productService = new ProductApiService();
        productService
            .getTargetProducts(targetProductSearchObj)
            .then((data) => setTargetProducts(data))
            .catch((err) => console.log(err));
    }, [targetProductSearchObj]);

    /** HANDLERS */
    return (
        <div className="single_restaurant">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className="avatar_big_box">
                        <Box className="top_text">
                            <p>Texas De Brazil Restaurant</p>
                            <Box className="single_search_big_box">
                                <form className="single_search_form" action="">
                                    <input
                                        type="search"
                                        className="single_searchInput"
                                        name="single_resSearch"
                                        placeholder="Qidiruv"
                                    />
                                    <Button
                                        className="single_button_search"
                                        variant="contained"
                                        endIcon={<SearchIcon />}
                                    >
                                        Izlash
                                    </Button>
                                </form>
                            </Box>
                        </Box>
                    </Stack>

                    <Stack
                        style={{ width: "100%", display: "flex" }}
                        flexDirection={"row"}
                        sx={{ mt: "35px" }}
                    >
                        <Box className="prev_btn restaurant-prev">
                            <ArrowBackIosIcon
                                sx={{ fontSize: 40 }}
                                style={{ color: "white" }}
                            />
                        </Box>

                        <Swiper
                            className="restaurant_avatars_wrapper"
                            slidesPerView={7}
                            centeredSlides={false}
                            spaceBetween={30}
                            navigation={{
                                nextEl: ".restaurant-next",
                                prevEl: ".restaurant-prev",
                            }}
                        >
                            {/* {restaurant_list.map((ele, index) => {
                                return (
                                    <SwiperSlide
                                        style={{ cursor: "pointer" }}
                                        key={index}
                                        className="restaurant_avatars"
                                    >
                                        <img src="/restaurant/burak_jigar.jpeg" />
                                        <span>Burak</span>
                                    </SwiperSlide>
                                );
                            })} */}
                        </Swiper>

                        <Box
                            className="next_btn restaurant-next"
                            style={{ color: "white" }}
                        >
                            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                        </Box>
                    </Stack>

                    <Stack
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"flex-end"}
                        width={"90%"}
                        sx={{ mt: "65px" }}
                    >
                        <Box className="dishs_filter_box">
                            <Button variant="contained" color="secondary">
                                new
                            </Button>
                            <Button variant="contained" color="secondary">
                                price
                            </Button>
                            <Button variant="contained" color="secondary">
                                likes
                            </Button>
                            <Button variant="contained" color="secondary">
                                views
                            </Button>
                        </Box>
                    </Stack>

                    <Stack
                        style={{
                            width: "100%",
                            display: "flex",
                            minHeight: "600px",
                        }}
                        flexDirection={"row"}
                    >
                        <Stack className="dish_category_box">
                            <div className="dish_category_main">
                                <Button variant="contained" color="secondary">
                                    boshqa
                                </Button>
                                <Button variant="contained" color="secondary">
                                    desert
                                </Button>
                                <Button variant="contained" color="secondary">
                                    ichimlik
                                </Button>
                                <Button variant="contained" color="secondary">
                                    salad
                                </Button>
                                <Button variant="contained" color="secondary">
                                    ovqatlar
                                </Button>
                            </div>
                        </Stack>

                        <Stack className="dish_wrapper">
                            {targetProducts.map((product: Product) => {
                                const image_path = `${serverApi}/${product.product_images[0]}`;
                                const size_volume =
                                    product.product_collection === "drink"
                                        ? product.product_volume + "l"
                                        : product.product_size + " size";

                                return (
                                    <Box className="dish_box" key={product._id}>
                                        <Box
                                            className="dish_img"
                                            sx={{
                                                backgroundImage: `url(${image_path})`,
                                            }}
                                        >
                                            <div className="dish_sale">
                                                {size_volume}
                                            </div>
                                            <Button
                                                className="like_view_btn"
                                                style={{ left: "36px" }}
                                            >
                                                <Badge
                                                    badgeContent={
                                                        product.product_likes
                                                    }
                                                    color="primary"
                                                >
                                                    <Checkbox
                                                        icon={
                                                            <FavoriteBorder
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        }
                                                        id={product._id}
                                                        checkedIcon={
                                                            <Favorite
                                                                style={{
                                                                    color: "red",
                                                                }}
                                                            />
                                                        }
                                                        checked={
                                                            product?.me_liked &&
                                                            product?.me_liked[0]
                                                                ?.my_favorite
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                </Badge>
                                            </Button>

                                            <Button className="view_btn">
                                                <img
                                                    src="/icons/shopping_cart.svg"
                                                    alt=""
                                                    style={{ display: "flex" }}
                                                />
                                            </Button>
                                            <Button
                                                className="like_view_btn"
                                                style={{ right: "36px" }}
                                            >
                                                <Badge
                                                    badgeContent={
                                                        product.product_views
                                                    }
                                                    color="primary"
                                                >
                                                    <Checkbox
                                                        icon={
                                                            <RemoveRedEyeIcon
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        }
                                                    />
                                                </Badge>
                                            </Button>
                                        </Box>
                                        <Box className="dish_desc">
                                            <span className="dish_title_text">
                                                {product.product_name}
                                            </span>
                                            <div className="dish_desc_text">
                                                <MonetizationOnIcon />
                                                {product.product_price}
                                            </div>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

            <div className="review_for_restaurant">
                <Container
                    sx={{ mt: "100px" }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box className={"category_title"}>
                        Oshxona haqida fikrlar
                    </Box>
                    <Stack
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        width={"100%"}
                    >
                        {Array.from(Array(4).keys()).map((ele, index) => {
                            return (
                                <Box className={"review_box"} key={index}>
                                    <Box
                                        display={"flex"}
                                        justifyContent={"center"}
                                    >
                                        <img
                                            src={"/community/rayhon.jpg"}
                                            className={"review_img"}
                                        />
                                    </Box>
                                    <span className={"review_name"}>
                                        Rayhon Asadova
                                    </span>
                                    <span className={"review_prof"}>
                                        Foydalanuvchi
                                    </span>
                                    <p className={"review_desc"}>
                                        Menga bu oshxonaning taomi juda yoqadi.
                                        Hammaga tafsiya qilaman!!!
                                    </p>
                                    <div className={"review_stars"}>
                                        <StarIcon
                                            style={{ color: "#F2BD57" }}
                                        />
                                        <StarIcon
                                            style={{ color: "#F2BD57" }}
                                        />
                                        <StarIcon
                                            style={{ color: "#F2BD57" }}
                                        />
                                        <StarIcon
                                            style={{ color: "whitesmoke" }}
                                        />
                                        <StarIcon
                                            style={{ color: "whitesmoke" }}
                                        />
                                    </div>
                                </Box>
                            );
                        })}
                    </Stack>
                </Container>
            </div>

            <Container className="member_reviews">
                <Box className={"category_title"}>Oshxona haqida</Box>
                <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    width={"100%"}
                    sx={{ mt: "70px" }}
                >
                    <Box
                        className={"about_left"}
                        sx={{
                            backgroundImage: `url('/restaurant/texasDeBrazil.jpg')`,
                        }}
                    >
                        <div className={"about_left_desc"}>
                            <span>Burak</span>
                            <p>Eng mazzali oshxona</p>
                        </div>
                    </Box>
                    <Box className={"about_right"}>
                        {Array.from(Array(3).keys()).map((ele, index) => {
                            return (
                                <Box
                                    display={"flex"}
                                    flexDirection={"row"}
                                    key={index}
                                >
                                    <div className={"about_right_img"}></div>
                                    <div className={"about_right_desc"}>
                                        <span>Bizning mohir oshpazlarimiz</span>
                                        <p className={"review_desc"}>
                                            Bizning Oshpazlarimiz dunyo
                                            taniydigan oliygohlarda malaka
                                            oshirib kelishgan
                                        </p>
                                    </div>
                                </Box>
                            );
                        })}
                    </Box>
                </Stack>

                <Stack
                    sx={{ mt: "60px" }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box className={"category_title"}>Oshxona Manzili</Box>
                    <iframe
                        style={{ marginTop: "60px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
                        width="1320px"
                        height="500"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Stack>
            </Container>
        </div>
    );
}
