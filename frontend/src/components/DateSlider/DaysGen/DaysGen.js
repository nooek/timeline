import {
  DayContainer,
  DayDate,
  MemoryQtd,
  SeeMemoriesButton,
  AddMemoriesButton,
} from "./styles";

const DaysGen = ({ setMemoryForm, setShowMemories, setDate, date, memories, daysInMonth }) => {
  const addMemory = (index) => {
    setMemoryForm(true)
    setDate({...date, choosenDay: index + 1})
  }

  const seeMemories = (index) => {
    setShowMemories(true)
    setDate({...date, choosenDay: index + 1})
  }

  return new Array(daysInMonth).fill("a").map((each, index) => {
    return (
      <DayContainer width="200px" key={index}>
        <DayDate>{index + 1}/{date.month}/{date.year}</DayDate>
        {
          memories[index + 1] ?
            <MemoryQtd>Memories saved: {memories[index + 1].memoriesQtd}</MemoryQtd>
          : <MemoryQtd>Memories saved: 0</MemoryQtd>
        }
        <SeeMemoriesButton onClick={() => seeMemories(index)}>See memories</SeeMemoriesButton>
        <AddMemoriesButton onClick={() => addMemory(index)}>
          Add memory
        </AddMemoriesButton>
      </DayContainer>
    );
  });
};

export default DaysGen;
