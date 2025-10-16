import ContactForm from "@/components/form";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";

const ContactPage = () => {
  return (
    <>
      <Heading>Contact Me</Heading>
      <Subheading className="max-w-md">
        I'm open for full-time roles. Reach out to me to inquire more about my
        work.
      </Subheading>
      <ContactForm />
    </>
  );
};

export default ContactPage;
