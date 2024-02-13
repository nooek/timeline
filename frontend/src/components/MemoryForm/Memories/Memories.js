const { MemoryContainer, PreviewContainer, Preview, DeleteButton, PLusButton } = require("../styles");

const Memories = ({ memoryContainers, changeMemories, encodeImageFileAsURL, addMemory} ) => {
    return memoryContainers.map((each, index) => {
        if (each !== false) {
          return (
            <MemoryContainer havememory={true} key={index}>
                <PreviewContainer>
                  <Preview src={`data:image/jpeg;base64,${each.base64}`} />
                </PreviewContainer>
                <DeleteButton onClick={() => changeMemories(index, false)}>Delete</DeleteButton>
            </MemoryContainer>
          );
        } else {
          return (
            <MemoryContainer key={index}>
                <PLusButton type="file" key={index} onChange={(e) => encodeImageFileAsURL(e, index)} onClick={() => addMemory()} />
            </MemoryContainer>
          )
        }
    })
}

export default Memories