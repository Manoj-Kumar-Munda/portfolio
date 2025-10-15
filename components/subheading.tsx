import { cn } from "@/lib/utils";

const Subheading = ({
  as: Tag = "h3",
  children,
  className = "",
}: {
  as?: "p" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Tag
      className={cn(
        "text-secondary max-w-lg pt-4 text-sm md:text-sm",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Subheading;
