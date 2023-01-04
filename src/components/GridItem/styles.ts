import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean
}

type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height: 10rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img<IconProps>`
    width: 4rem;
    opacity: ${props=>props.opacity ?? 1}
`;