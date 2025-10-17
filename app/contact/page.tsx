import ContactForm from "@/components/form";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";

const ContactPage = () => {
  return (
    <div className="relative">
      <Heading>Contact Me</Heading>
      <Subheading className="max-w-md">
        I'm open for full-time roles. Reach out to me to inquire more about my
        work.
      </Subheading>

      <div className="absolute inset-x-0 my-6 h-6 z-10 w-full scale-x-110 border-t border-b border-neutral-200" />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
