import { Section, SectionTitle, TitleInput } from "../styles";

const Name = ({ setMemoryInfo, memoryInfo }) => {
    return (
        <Section>
          <SectionTitle>What's your memory name?</SectionTitle>
          <TitleInput
            placeholder="Memory Name"
            onChange={(e) => setMemoryInfo({ ...memoryInfo, title: e.target.value })}
          />
        </Section>
    )
}

export default Name;
