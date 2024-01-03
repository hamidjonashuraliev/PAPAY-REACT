import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
    width?: string;
    height?: string;
    direction?: "horizontal" | "vertical";
    bg?: string;
    opsty?: string;
}
/* @ts-ignore*/
const HorizontalMargin = styled.span<IMarginerProps>`
    display: flex;
    min-width: ${({ width }: any) => `${width}px`};
    min-height: ${({ height }: any) => `${height}px`};
    background: ${({ bg }: any) => `${bg}`};
    opacity: ${({ opsty }: any) => `${opsty}`};
`;
/* @ts-ignore*/
const VerticalMargin = styled.span<IMarginerProps>`
    display: flex;
    min-width: ${({ width }: any) => `${width}px`};
    min-height: ${({ height }: any) => `${height}px`};
    background: ${({ bg }: any) => `${bg}`};
    opacity: ${({ opsty }: any) => `${opsty}`};
`;

function Marginer(props: IMarginerProps) {
    const { direction } = props;
    if (direction === "horizontal") return <HorizontalMargin {...props} />;
    else {
        return <VerticalMargin {...props} />;
    }
}

Marginer.defaultProps = {
    direction: "horizontal",
};

export default Marginer;
