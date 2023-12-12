import React from "react";
import { Container } from "@mui/material";

export function Advertisements() {
    return (
        <div className="ads_restaurant_frame">
            <video
                className={"ads_video"}
                autoPlay={true}
                loop
                muted
                playsInline
                data-vide-medis=""
            >
                <source
                    data-src="https://fnb-p-c6e19b1675f4.imgix.net/87994cc2-0b2c-4b4e-a402-45c9834c267e/HP-6s-1920x1080-3_def.mp4?auto=compress%2Cformat&fit=min&fm=jpg&q=80"
                    type="video/mp4"
                    src="https://fnb-p-c6e19b1675f4.imgix.net/87994cc2-0b2c-4b4e-a402-45c9834c267e/HP-6s-1920x1080-3_def.mp4?auto=compress%2Cformat&fit=min&fm=jpg&q=80"
                />
            </video>
        </div>
    );
}
