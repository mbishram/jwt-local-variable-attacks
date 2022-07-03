import { HTMLProps } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx("container px-4 mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
