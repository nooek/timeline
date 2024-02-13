import { CloseIcon, CloseIconContainer, Container, FolderIcon, GeneralContainer, ListContainer, MemoryContainer, Pic } from "./styles"
import folderIcon from "../../assets/icons/folder.svg"
import { useState } from "react"
import OpenedPic from "./OpenedPic/OpenedPic"
import closeIcon from "../../assets/icons/close.svg"

const MemoriesList = ({ date, memo, setShowMemories }) => {
    const [choosenMemory, setChoosenMemory] = useState([])
    const [realMemories, setRealMemories] = useState(memo[date].memories)

    const openFolder = (memories) => {
        const folderMemories = [...memories.memories].map((each, index) => {
            return { ...memories, memories: [each] }
        })
        setRealMemories(folderMemories)
    }

    if (realMemories) {
        return (
            <Container>
                { choosenMemory.length ? <OpenedPic memory={choosenMemory} setChoosenMemory={setChoosenMemory} /> : null }
                <GeneralContainer>
                    <CloseIconContainer>
                        <CloseIcon src={closeIcon} onClick={() => setShowMemories(false)} />
                    </CloseIconContainer>
                    <ListContainer>
                        {
                            realMemories.map((each, index) => {
                                return (
                                    <MemoryContainer key={index}>
                                            {
                                                each.memories.length > 1 ? <FolderIcon src={folderIcon} onClick={() => openFolder(each)} /> : <Pic src={each.memories[0]} onClick={() => setChoosenMemory([{ ...each, picture: each.memories[0] }])} />
                                            }
                                    </MemoryContainer>
                                )
                            })
                        }
                    </ListContainer>
                </GeneralContainer>
            </Container>
        )
    }
}

export default MemoriesList
