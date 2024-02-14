import { Container, DescContainer, Description, Title, Pic, PicContainer, CloseButton, Date } from "./styles";

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
            <Date>{memory[0].date} - {memory[0].time}</Date>
            <CloseButton onClick={() => setChoosenMemory([])}>Close</CloseButton>
        </Container>
    )
}

export default OpenedPic;
