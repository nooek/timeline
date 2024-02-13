import styled from "styled-components"

export const DaysContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    font-family: 'DM Sans';

`

export const DayContainer = styled.div`
    min-width: ${(props) => props.width};
    height: fit-content;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    border: 2px solid black;
    background: #094989d9;
    padding-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 2px;
    border-radius: 5px;
`

export const DayDate = styled.h1`
    font-size: 25px;
    color: white;
    font-weight: 300;
`

export const MemoryQtd = styled.h2`
    font-size: 20px;
    color: white;
    font-weight: 300;
`

export const SeeMemoriesButton = styled.button`
    width: 95%;
    height: 40px;
    color: white;
    border-radius: 5px;
    letter-space: 0.5px;
    font-family: 'DM Sans';
    font-weight: 500;
    border: 2px solid black;
    box-shadow: 1px 1px 1px black;
    font-size: 15px;
    margin-bottom: 5px;
    cursor: pointer;
    background-color: #ab2d2e;
    &:hover{
        background-color: #d53738;
    }
`

export const AddMemoriesButton = styled.button`
    width: 95%;
    height: 40px;
    color: white;
    box-shadow: 1px 1px 1px black;
    border-radius: 5px;
    border: 2px solid black;
    font-size: 15px;
    letter-space: 0.5px;
    font-family: 'DM Sans';
    font-weight: 500;
    cursor: pointer;
    background-color: rgb(15 117 28 / 50%);
    &:hover{
        background-color: rgb(32 171 50 / 50%);
    }
`