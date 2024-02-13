import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: absolute;
   z-index: 10;
   top: 0;
   right: 0;
   background-color: rgba(32, 31, 31, 0.5);
`

export const FormContainer = styled.div`
   width: 95%;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   background-color: rgba(32, 31, 31, 0.85);
   border-radius: 10px;
   overflow-y: scroll;
`

export const Section = styled.div`
    min-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h1`
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    color: white;
    @media (max-width: 450px) {
        font-size: 25px;
    }
`

export const TitleInput = styled.input`
    width: 70%;
    height: 50px;
    color: white;
    border: 2px solid rgba(109, 228, 125, 0.6);
    border-radius: 5px;
    font-size: 20px;
    padding-left: 10px;
    background-color: rgba(109, 228, 125, 0.2);
    @media (max-width: 500px) {
        width: 90%;
        font-size: 17px;
    }
`

export const DescInput = styled.textarea`
    width: 70%;
    min-height: 100px;
    color: white;
    border: 2px solid rgba(109, 228, 125, 0.6);
    border-radius: 5px;
    font-size: 20px;
    padding-left: 10px;
    padding-top: 10px;
    background-color: rgba(109, 228, 125, 0.2);
    @media (max-width: 500px) {
        width: 90%;
        font-size: 17px;
    }
`

export const MemoriesContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export const MemoryContainer = styled.div`
    width: ${props => props.havememory ? "40%" : '20%'};
    min-width: 200px;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid white;
    background-color: rgba(109, 228, 125, 0.2);
    border: 2px solid rgba(109, 228, 125, 0.6);
`

export const PLusButton = styled.input`
    width: 100%;
    height: ${props => props.havememory ? "80%" : '100%'};
    border: none;
    color: white;
    font-weight: 200;
    background: transparent;
`

export const PreviewContainer = styled.div`
    width: 100%;
    height: 80%;
`

export const Preview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const DeleteButton = styled.button`
    width: 100%;
    height: 20%;
    color: white;
    letter-space: 0.5px;
    font-family: 'DM Sans';
    font-weight: 500;
    border: none;
    border-top: 2px solid black;
    font-size: 15px;
    cursor: pointer;
    background-color: #ab2d2e;
    &:hover{
        background-color: #d53738;
    }
`

export const ButtonsContainer = styled.div`
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
`

export const SaveMemoryButton = styled.button `
    width: 250px;
    min-height: 60px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: rgba(109, 228, 125, 0.2);
    border: 2px solid rgba(109, 228, 125, 0.6);
    margin-bottom: 20px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        background-color: rgba(109, 228, 125, 0.6);
    }
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
