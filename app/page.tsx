import Container from "@/components/container";
import Projects from "@/components/projects";
import Blogs from "./blogs/_components/blogs";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";
import { projectList } from "@/constants";
import { ReactNode } from "react";
import Separator from "@/components/separator";

export const GlassEffect = ({ children }: { children: ReactNode }) => {
  return (
    <span className="relative inline-block rounded-md [background-image:linear-gradient(to_bottom,var(--color-gray-200),transparent_8px,var(--color-gray-200)_26px)] px-2 py-0.5 text-neutral-500">
      {children}
    </span>
  );
};

export default function Home() {
  return (
    <Container>
      <Heading>Manoj Kr. Munda</Heading>
      <Subheading>
        I am a <GlassEffect>software engineer</GlassEffect> passionate about
        building web applications and working with emerging technologies, with
        over one year of experience as a frontend engineer in a startup
        environment.
      </Subheading>

      <Separator />
      <Projects projects={projectList.slice(0, 3)} />
      <Separator />
      <Subheading className="text-secondary">
        A collection of all blog posts written by me.
      </Subheading>
      <Blogs className="px-2 py-4" />
    </Container>
  );
}
