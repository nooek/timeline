import { Container, DescContainer, Description, Title, Pic, PicContainer, CloseButton } from "./styles";

const OpenedPic = ({ memory, setChoosenMemory }) => {
    console.log(memory)
    return (
        <Container>
            { memory[0].title ? <Title>{memory[0].title}</Title> : null }
            { memory[0].desc ?
                <DescContainer>
                    <Description>{memory[0].desc}</Description>
                </DescContainer>
            : null }
            <PicContainer>
                <Pic src={memory[0].picture} alt="Picture" />
            </PicContainer>
            <CloseButton onClick={() => setChoosenMemory([])}>Close</CloseButton>
        </Container>
    )
}

export default OpenedPic;
