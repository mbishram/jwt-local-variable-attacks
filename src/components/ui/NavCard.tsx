import { CardLink, CardLinkProps } from "@/components/ui/CardLink";
import { Typography } from "@/components/ui/Typography";
import { HTMLProps, ReactNode } from "react";
import clsx from "clsx";

export type NavCardProps = Omit<CardLinkProps, "children"> & {
  header: string | ReactNode;
  description: string | ((Hovered: typeof HoveredDescription) => ReactNode);
};

function HoveredDescription({
  children,
  className,
  ...props
}: HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "group-hover:underline group-hover:text-primary transition-all",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function NavCard({ header, description, ...props }: NavCardProps) {
  const descriptionElement =
    description &&
    (typeof description === "string"
      ? description
      : description(HoveredDescription));

  return (
    <CardLink
      className="h-full grid content-center group-hover:border-primary transition-all"
      anchorProps={{ className: "group" }}
      {...props}
    >
      <Typography
        variant="h2"
        className="mb-2 group-hover:text-primary transition-all"
      >
        {header || "No Header!"}
      </Typography>
      <Typography variant="p">
        {descriptionElement || "Description is Empty!"}
      </Typography>
    </CardLink>
  );
}
