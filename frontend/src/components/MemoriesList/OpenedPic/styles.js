import styled from "styled-components"

export const Container = styled.div`
    width: 95%;
    height: 95%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    overflow-y: scroll;
    border-radius: 10px;
    background-color: rgba(32, 31, 31, 0.99);
`

export const Title = styled.h1`
    font-size: 30px;
    color: white;
    font-weight: 500;
    font-family: 'DM Sans';
    margin-top: 50px;
`

export const DescContainer = styled.div`
    width: 80%;
    max-height: 200px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`

export const Description = styled.div`
    font-size: 20px;
    color: white;
    font-weight: 400;
    font-family: 'DM Sans';
`

export const PicContainer = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const Pic = styled.img`
    width: 450px;
    height: 100%;
    object-fit: contain;
    @media(max-width: 450px) {
        width: 100%;
    }
`

export const CloseButton = styled.button`
    width: 250px;
    min-height: 60px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: rgba(109, 228, 125, 0.2);
    border: 2px solid rgba(109, 228, 125, 0.6);
    margin-top: 20px;
    margin-bottom: 20px;
    position: sticky;
    bottom: 20px;
    cursor: pointer;
    &:hover {
        background-color: rgba(109, 228, 125, 0.6);
    }
    @media(max-width: 250px) {
        width: 95%;
    }
`