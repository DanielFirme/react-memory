import styled from "styled-components";

export const Container = styled.div`
    width: 20rem;
    height: 5rem;
    display: flex;
    background-color: #1550FF;
    border-radius: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover{
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 1.5rem;
`;

export const Icon = styled.img`
    height: 2rem;
`;

export const Label = styled.div`
    font-size: 1.6rem;
    height: inherit;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 2rem;
`;