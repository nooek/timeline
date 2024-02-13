import { useState } from "react";
import {
  Container,
  FormContainer,
  Section,
  SectionTitle,
  MemoriesContainer,
  SaveMemoryButton,
  ButtonsContainer,
  Error,
} from "./styles";
import axios from "axios";
import Memories from "./Memories/Memories";
import Name from "./Name/Name";
import Description from "./Description/Description";
import { useUserData } from "../../store/userContext";

const MemoryForm = ({ setMemoryForm, date, memories, setMemories }) => {
  const [memoryInfo, setMemoryInfo] = useState({
    title: "",
    desc: "",
  });

  const [memoryContainers, setMemoryContainers] = useState([false]);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useUserData();

  const addMemory = () => {
    setMemoryContainers((v) => [...v, false]);
  };

  const saveImage = async () => {
    try {
      const memoriesImages = memoryContainers.filter((each) => each !== false);
      const urls = [];

      memoriesImages.forEach(async (each, index) => {
        const url = `https://api.cloudinary.com/v1_1/dmw60frhx/upload`;
        console.log(process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
        const fd = new FormData();
        fd.append("file", each.file);
        fd.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
        fd.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
        const res = await fetch(url, {
          method: "POST",
          body: fd,
        });

        if (res) {
          const resJson = await res.json();
          if  (resJson.secure_url) {
          urls.push(resJson.secure_url);
            if (urls.length === memoriesImages.length) {
              console.log(urls);
              save(urls);
            }
          }
        }
      });
    } catch(err) {
      console.log(err)
      setErrorMessage("An error occured, try again later.")
    }
  };

  const saveInState = (memoryObject) => {
    if (memories[date.choosenDay]) {
      [memories[date.choosenDay]].map((each, index) => {
        each.memoriesQtd += 1;
        each.memories.push(memoryObject);
        console.log(each);
        setMemories({ ...memories, [date.choosenDay]: each });
        return true;
      });
    } else {
      setMemories({ ...memories, [date.choosenDay]: { memoriesQtd: memoryContainers.filter((each) => each !== false).length, memories: [memoryObject] } });
    }
  };

  const save = async (urls) => {
    const d = new Date();
    const memoryObject = {
      ...memoryInfo,
      memories: urls,
      date: new Date(
        date.year + "-" + date.month + "-" + date.choosenDay
      ).toLocaleDateString("sv"),
      owner: user.email,
      time: d.getHours() + ":" + d.getMinutes(),
    };
    axios
      .post("http://localhost:8080/memory", memoryObject)
      .then((res) => {
        console.log(res);
        setMemoryForm(false);
        setMemoryInfo({
          title: "",
          desc: "",
          memories: [],
        });
        saveInState(memoryObject)
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setErrorMessage(err.response.data.error);
        }
      });
  };

  const close = () => {
    setMemoryForm(false);
    setMemoryInfo({
      title: "",
      desc: "",
      memories: [],
    });
  };

  const changeMemories = (index, element) => {
    const updateMemoryContainers = memoryContainers.map((c, i) => {
      if (i === index) {
        return (c = element);
      } else {
        return c;
      }
    });
    setMemoryContainers(updateMemoryContainers);
  };

  function encodeImageFileAsURL(element, index) {
    let file = element.target.files[0];
    let reader = new FileReader();
    console.log(reader.result);
    reader.onloadend = function () {
      changeMemories(index, {
        base64: reader.result.split("base64,")[1],
        file: element.target.files[0],
      });
    };
    reader.readAsDataURL(file);
  }

  console.log(memoryContainers);

  return (
    <Container>
      <FormContainer>
        <Name setMemoryInfo={setMemoryInfo} memoryInfo={memoryInfo} />
        <Description setMemoryInfo={setMemoryInfo} memoryInfo={memoryInfo} />
        <Section>
          <SectionTitle>Add here your memory pics</SectionTitle>
          <MemoriesContainer>
            <Memories
              memoryContainers={memoryContainers}
              changeMemories={changeMemories}
              encodeImageFileAsURL={encodeImageFileAsURL}
              addMemory={addMemory}
            />
          </MemoriesContainer>
        </Section>
        <ButtonsContainer>
          <SaveMemoryButton onClick={() => saveImage()}>Save</SaveMemoryButton>
          <SaveMemoryButton onClick={() => close()}>Cancel</SaveMemoryButton>
        </ButtonsContainer>
        <Section>
          <Error>{errorMessage}</Error>
        </Section>
      </FormContainer>
    </Container>
  );
};

export default MemoryForm;
