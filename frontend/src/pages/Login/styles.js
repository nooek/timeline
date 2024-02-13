import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MainContainer = styled.div`
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media(max-width: 580px) {
        width: 95%;
    }
    @media(max-height: 800px) {
        height: 100%;
        justify-content: center;
    }
`

export const LogoContainer = styled.div`
    width: 100%;
    max-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    @media(max-width: 580px) {
        max-height: 120px;
    }
    @media(max-height: 800px) {
        display: none;
    }
`

export const Logo = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const Title = styled.h1 `
    font-size: 40px;
    color: black;
`

export const Error = styled.h2 `
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    color: rgb(255 84 16);
    @media (max-width: 450px) {
        font-size: 20px;
    }
`
