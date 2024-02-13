import { DescInput, Section, SectionTitle } from "../styles";

const Description = ({ setMemoryInfo, memoryInfo }) => {
    return (
        <Section>
          <SectionTitle>What's your memory description?</SectionTitle>
          <DescInput
            placeholder="Memory Description"
            onChange={(e) => setMemoryInfo({ ...memoryInfo, desc: e.target.value })}
          />
        </Section>
    )
}

export default Description;
