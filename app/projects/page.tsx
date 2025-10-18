import Heading from "@/components/heading";
import Projects from "@/components/projects";
import Separator from "@/components/separator";
import Subheading from "@/components/subheading";
const ProjectsPage = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <Subheading>
        I'm a passionate software engineer dedicated to crafting elegant
        solutions for complex problems. With expertise in full-stack
        development, I enjoy building user-centric applications that make a
        difference.
      </Subheading>
      <Separator />
      <Projects />
      <Separator />
    </>
  );
};

export default ProjectsPage;
