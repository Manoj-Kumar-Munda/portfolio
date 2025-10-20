import { cn } from "@/lib/utils";

const Separator = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative my-4 h-6 w-full border-t border-b border-neutral-200",
      className,
    )}
  />
);

export default Separator;
