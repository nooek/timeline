import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #0099ffe8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 10px;
    background: #a9d3efe8;
`

export const Logo = styled.img`
    height: 90%;
    cursor: pointer;
    margin-left: 15px;
`

export const Name = styled.h1`
    font-size: 23px;
    color: black;
    margin-right: 20px;
    font-weight: 500;
    font-family: 'DM Sans';
`

export const LogOutIcon = styled.img`
    height: 80%;
    cursor: pointer;
    margin-right: 15px;
`