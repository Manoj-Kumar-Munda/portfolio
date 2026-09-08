"use client";
import Container from "./container";
import Subheading from "./subheading";
import { skills } from "@/constants/skills";
import SkillButton from "./skill-button";

const Skills = () => {
  return (
    <Container>
      <Subheading>Technologies I work with</Subheading>
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-4">
        {skills?.map((item, idx) => (
          <SkillButton key={idx} skill={item} idx={idx} />
        ))}
      </div>
    </Container>
  );
};
export default Skills;
