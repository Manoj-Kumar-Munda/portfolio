import ContactForm from "@/components/form";
import Heading from "@/components/heading";
import Separator from "@/components/separator";
import Subheading from "@/components/subheading";

const ContactPage = () => {
  return (
    <div className="relative">
      <Heading>Contact Me</Heading>
      <Subheading className="max-w-md">
        I&apos;m open for full-time roles. Reach out to me to inquire more about
        my work.
      </Subheading>

      <Separator />
      <ContactForm />
      <Separator />
    </div>
  );
};

export default ContactPage;
