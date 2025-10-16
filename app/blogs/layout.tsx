import Container from "@/components/container";

export const metadata = {
  title: "Blogs - Manoj",
  description: "A perfect portfolio website template to showcase your work.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-svh p-6 md:py-10">
      {children}
    </Container>
  );
}
