import Container from "@/components/container";
import Projects from "@/components/projects";
import Blogs from "./blogs/_components/blogs";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";
import { projectList } from "@/constants";

export default function Home() {
  return (
    <Container className="min-h-screen p-4 md:p-10">
      <Heading>Manoj Kr. Munda</Heading>
      <Subheading>
        I am a software engineer with a passion for building web applications
        and exploring new technologies. I'm currently working as a frontend
        engineer at Google.
      </Subheading>
      <Projects projects={projectList.slice(0, 3)} />
      <Subheading className="text-secondary py-4">
        A collection of all blog posts written by me.
      </Subheading>
      <Blogs />
    </Container>
  );
}
