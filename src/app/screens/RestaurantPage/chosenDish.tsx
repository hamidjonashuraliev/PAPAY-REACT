import React, { useState } from "react";
import { Box, Container, Pagination, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import Marginer from "../../components/marginer";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import Checkbox from "@mui/material/Checkbox";
import { useParams } from "react-router-dom";
import { Product } from "../../../types/product";
import { useDispatch, useSelector } from "react-redux";
import {
    retrieveChosenProduct,
    retrieveChosenRestaurant,
} from "../RestaurantPage/selector";
import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import { Dispatch } from "@reduxjs/toolkit";
import {
    setChosenRestaurant,
    setChosenProduct,
} from "../../screens/RestaurantPage/slice";
import { useEffect } from "react";
import ProductApiService from "../../apiServices/productApiService";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import {
    sweetErrorHandling,
    sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
    setChosenRestaurant: (data: Restaurant) =>
        dispach(setChosenRestaurant(data)),
});

/** REDUX SELECTOR */
const chosenProductRetriever = createSelector(
    retrieveChosenProduct,
    (chosenProduct) => ({
        chosenProduct,
    })
);
const chosenRestaurantRetriever = createSelector(
    retrieveChosenRestaurant,
    (chosenRestaurant) => ({
        chosenRestaurant,
    })
);

const chosen_list = Array.from(Array(5).keys());

export function ChosenDish(props: any) {
    /** INITIALIZATIONS */
    const { setChosenProduct, setChosenRestaurant } = actionDispatch(
        useDispatch()
    );
    let { dish_id } = useParams<{ dish_id: string }>();
    const { chosenProduct } = useSelector(chosenProductRetriever);
    const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
    const label = { inputProps: { "aria-label": "checkbox demo" } };
    const [productRebuild, setProductRebuild] = useState<Date>(new Date());

    const dishRelatedPrrocess = async () => {
        try {
            const productService = new ProductApiService();
            const product: Product = await productService.getChosenDish(
                dish_id
            );
            setChosenProduct(product);

            const restaurantService = new RestaurantApiService();
            const restaurant: Restaurant =
                await restaurantService.getChosenRestaurant(
                    product.restaurant_mb_id
                );
            setChosenRestaurant(restaurant);
        } catch (err) {
            console.log(`dishRelatedPrrocess, ERROR:`, err);
        }
    };

    useEffect(() => {
        dishRelatedPrrocess().then();
    }, [productRebuild]);

    /** HANDLERS */
    const targetLikeProduct = async (e: any) => {
        try {
            assert.ok(verifiedMemberData, Definer.auth_err1);

            const memberService = new MemberApiService(),
                like_result: any = await memberService.memberLikeTarget({
                    like_ref_id: e.target.id,
                    group_type: "product",
                });
            assert.ok(like_result, Definer.general_err1);
            await sweetTopSmallSuccessAlert("success", 700, false);
            setProductRebuild(new Date());
        } catch (err: any) {
            console.log("targetLikeProduct, ERROR:", err);
            sweetErrorHandling(err).then();
        }
    };

    return (
        <div className="chosen_dish_page">
            <Container className="dish_container">
                <Stack className="chosen_dish_slider">
                    <Swiper
                        className="dish_swiper"
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                    >
                        {chosenProduct?.product_images.map((ele: string) => {
                            const updatedData = JSON.parse(
                                JSON.stringify(`${serverApi}/${ele}`).replace(
                                    /\\/g,
                                    "/"
                                )
                            );
                            const image_path = `${updatedData}`;
                            return (
                                <SwiperSlide>
                                    <img
                                        src={image_path}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <Swiper
                        // onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={chosenProduct?.product_images.length}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="dish_swiper_2"
                        style={{
                            width: "450px",
                            height: "245px",
                            marginTop: "20px",
                        }}
                    >
                        {chosenProduct?.product_images.map((ele: string) => {
                            const updatedData = JSON.parse(
                                JSON.stringify(`${serverApi}/${ele}`).replace(
                                    /\\/g,
                                    "/"
                                )
                            );
                            const image_path = `${updatedData}`;
                            return (
                                <SwiperSlide
                                    style={{ height: "107px", display: "flex" }}
                                >
                                    <img
                                        style={{ borderRadius: "15px" }}
                                        src={image_path}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Stack>

                <Stack className="chosen_dish_info_container">
                    <Box className={"chosen_dish_info_box"}>
                        <strong className={"dish_txt"}>
                            {chosenProduct?.product_name}
                        </strong>
                        <span className={"resto_name"}>
                            {chosenRestaurant?.mb_nick}
                        </span>
                        <Box className={"rating_box"}>
                            <Rating
                                name="half-rating"
                                defaultValue={3.5}
                                precision={0.5}
                            />
                            <div className={"evaluation_box"}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginRight: "20px",
                                    }}
                                >
                                    <Checkbox
                                        {...label}
                                        icon={<FavoriteBorder />}
                                        checkedIcon={
                                            <Favorite
                                                style={{ color: "red" }}
                                            />
                                        }
                                        id={chosenProduct?._id}
                                        onClick={targetLikeProduct}
                                        checked={
                                            chosenProduct?.me_liked &&
                                            !!chosenProduct?.me_liked[0]
                                                ?.my_favorite
                                        }
                                    />

                                    <span>
                                        {chosenProduct?.product_likes} ta
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                                    <span>
                                        {chosenProduct?.product_views} ta
                                    </span>
                                </div>
                            </div>
                        </Box>
                        <p className={"dish_desc_info"}>
                            {chosenProduct?.product_description
                                ? chosenProduct?.product_description
                                : "no description "}
                        </p>
                        <Marginer
                            direction="horizontal"
                            height="1"
                            width="100%"
                            bg="#000000"
                        />
                        <div className={"dish_price_box"}>
                            <span>Narxi:</span>
                            <span>${chosenProduct?.product_price}</span>
                        </div>
                        <div className={"button_box"}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    props.onAdd(chosenProduct);
                                }}
                                style={{
                                    width: "230px",
                                    height: "44px",
                                    borderRadius: "4px",
                                    fontSize: "15px",
                                }}
                            >
                                Savatga qo'shish
                            </Button>
                        </div>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}
