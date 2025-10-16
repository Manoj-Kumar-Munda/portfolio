import Container from "@/components/container";
import { ReactNode } from "react";

const ProjectLayout = ({ children }: { children: ReactNode }) => {
  return <Container className="p-4 md:p-10 min-h-svh">{children}</Container>;
};

export default ProjectLayout;
