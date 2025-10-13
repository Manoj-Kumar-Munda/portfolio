import Container from "@/components/container";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:p-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there
        </h1>
        <p className="text-secondary w-full max-w-4xl pt-4 text-sm md:text-base">
          I am a software engineer with a passion for building web applications
          and exploring new technologies. I'm currently working as a frontend
          engineer at Google.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
