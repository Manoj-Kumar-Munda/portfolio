import Heading from "@/components/heading";
import Projects from "@/components/projects";
import Separator from "@/components/separator";
import Subheading from "@/components/subheading";
const ProjectsPage = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <Subheading>
        Below are some of the applications I’ve developed, showcasing
        my problem-solving mindset and hands-on experience in frontend
        engineering. Each project represents a step forward in my learning and
        growth as a developer.
      </Subheading>
      <Separator />
      <Projects />
      <Separator />
    </>
  );
};

export default ProjectsPage;
