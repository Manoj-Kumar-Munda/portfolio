"use client";
import { useActionState } from "react";
import Container from "./container";
import Input from "./input";
import Textarea from "./textarea";
import { cn } from "@/lib/utils";

interface FormState {
  message: string;
  success: null | boolean;
}
type FormAction = (
  prevState: FormState,
  formData: FormData,
) => Promise<FormState>;

const submitAction: FormAction = async (prevState, formData) => {
  console.log(formData);

  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  if (!name) {
    return { message: "Name is required.", success: false };
  }

  if (!message) {
    return { message: "Message is required", success: false };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { message: "Message sent succesfully", success: true };
};

const ContactForm = () => {
  const initialState: FormState = { message: "", success: null };
  const [state, handleSubmit, pending] = useActionState<FormState, FormData>(
    submitAction,
    initialState,
  );

  console.log({ pending });

  return (
    <Container className="my-4 p-4 md:my-10 md:p-10">
      <div className="mx-auto max-w-lg">
        <form action={handleSubmit} className="flex flex-col gap-4">
          <Input label="Full name" placeholder={"Elon Musk"} name="name" />
          <Input
            label="Email"
            placeholder={"elon.musk@tesla.com"}
            name="mail"
          />
          <Textarea label="Message" rows={6} name="message" />

          {state.success === false && (
            <p className="text-xs text-red-500">All fields are required</p>
          )}

          <button
            className={cn(
              "cursor-pointer rounded-md border border-neutral-300 py-1 text-sm font-medium text-neutral-800 shadow-none transition-all duration-300 hover:bg-neutral-100 hover:shadow-sm",
              pending ? "opacity-60" : "opacity-100",
            )}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
