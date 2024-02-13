import styled from "styled-components"

export const Container = styled.div`
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
    padding: 30px;
    background-color: rgba(32, 31, 31, 0.5);
    @media(max-width: 600px) {
        padding: 0;
    }
`

export const GeneralContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(32, 31, 31, 0.95);
    border-radius: 10px;
    @media(max-width: 600px) {
        width: 95%;
        height: 95%;
    }
`

export const CloseIconContainer = styled.div`
    width: 100%;
    height: 70px;
    padding-left: 20px;
    padding-top: 20px;
`

export const CloseIcon = styled.img`
    height: 50px;
    cursor: pointer;
`

export const ListContainer = styled.div`
   width: 100%;
   height: calc(100% - 50px);
   display: grid;
   grid-template-columns: repeat(4, 2fr);
   grid-gap: 15px;
   overflow-y: scroll;
   @media(max-width: 900px) {
     grid-template-columns: repeat(3, 2fr);
   }
   @media(max-width: 600px) {
    grid-template-columns: repeat(2, 2fr);
   }
   @media(max-width: 350px) {
    grid-template-columns: repeat(1, 2fr);
   }
`

export const MemoryContainer = styled.div`
    width: 100%;
    min-height: 250px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    border-radius: 5px;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
`

export const PicContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    break-inside: avoid;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 10px;
    top: 0;
`

export const FolderIcon = styled.img`
    max-width: 100px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
`

export const Pic = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
    cursor: pointer;
    border-radius: 10px;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
    text-align: center;
    position: absolute;
    bottom: 0;
`

export const Title = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 400;
`