import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const chosen_list = Array.from(Array(5).keys());

export function ChosenDish() {
    const label = { inputProps: { "aria-label": "checkbox demo" } };
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
                        {chosen_list.map((ele) => {
                            const image_path = `/others/sandvich.jpg`;
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
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="dish_swiper_2"
                    >
                        {chosen_list.map((ele) => {
                            const image_path = `/others/sandvich.jpg`;
                            return (
                                <SwiperSlide>
                                    <img
                                        className={"dish_img"}
                                        src={image_path}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Stack>

                <Stack className="chosen_dish_info_container">
                    <Box className={"chosen_dish_info_box"}>
                        <strong className={"dish_txt"}>Sweet Sandvich</strong>
                        <span className={"resto_name"}>Texas De Brazil</span>
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
                                        /*@ts-ignore*/
                                        checked={true}
                                    />

                                    <span>98 ta</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                                    <span>1000 ta</span>
                                </div>
                            </div>
                        </Box>
                        <p className={"dish_desc_info"}>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy.{" "}
                        </p>
                        <Marginer
                            direction="horizontal"
                            height="1"
                            width="100%"
                            bg="#000000"
                        />
                        <div className={"dish_price_box"}>
                            <span>Narxi:</span>
                            <span>$11</span>
                        </div>
                        <div className={"button_box"}>
                            <Button
                                variant="contained"
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
