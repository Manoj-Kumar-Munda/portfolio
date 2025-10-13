import Container from "@/components/container";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-screen px-10 md:pt-20 md:pb-10 prose">
      {children}
    </Container>
  );
}
