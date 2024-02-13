import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid #0099ffe8;
    border-radius: 15px;
    background: #a9d3efe8;
    @media(max-height: 800px) {
        height: 95%;
        margin-top:10px;
        background: none;
        border: none;
    }
`


export const FormInputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormInputContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormInputTag = styled.h3 `
    font-size: 20px;
    align-self: flex-start;
    color: black;
    margin-left: 5%;
    margin-bottom: 5px;
    font-weight: 300;
`

export const FormInput = styled.input`
    width: 95%;
    height: 60px;
    border-radius: 20px;
    border: 2px solid black;
    background: rgb(135 219 146 / 30%);
    font-size: 18px;
    padding-left: 10px;
    @media(max-height: 800px) {
        width: 100%;
        height: 50px;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button `
    width: 80%;
    height: 60px;
    border-radius: 25px;
    border: 2px solid black;
    background: rgb(13 231 41 / 30%);
    color: white;
    font-size: 21px;
    letter-space: 0.5px;
    font-family: 'DM Sans';
    font-weight: 500;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: rgb(32 171 50 / 50%);
    }
    @media(max-height: 800px) {
        height: 50px;
    }
`
