import Container from "@/components/container";
import { ReactNode } from "react";

const ProjectLayout = ({ children }: { children: ReactNode }) => {
  return <Container className="min-h-svh md:py-10">{children}</Container>;
};

export default ProjectLayout;
