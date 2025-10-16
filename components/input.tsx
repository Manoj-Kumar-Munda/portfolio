import { cn } from "@/lib/utils";
import { InputHTMLAttributes, RefObject, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  ref: RefObject<HTMLInputElement | null>;
}

const Input = ({ ref, label, className, ...props }: InputProps) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-neutral-600">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={cn(
          "rounded-sm border border-neutral-300 px-2 py-1 text-sm text-neutral-800 transition-all duration-300 ease-in-out placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
