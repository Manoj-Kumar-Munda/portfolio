import Container from "@/components/container";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">Hello, there</h1>
        <p>
          I am a software engineer with a passion for building web applications
          and exploring new technologies. I'm currently working as a frontend
          engineer at Google.
        </p>
      </Container>
    </div>
  );
}
