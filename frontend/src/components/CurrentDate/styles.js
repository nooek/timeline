import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const arrow = `
    width: 40px;
    height: 40px;
    cursor: pointer;
`

export const LeftArrow = styled.img`
    ${arrow};
    transform: rotate(180deg);
`

export const RightArrow = styled.img`
    ${arrow};
`

export const DateText = styled.h1`
    font-size: 35px;
    color: black;
    font-weight: 400;
`