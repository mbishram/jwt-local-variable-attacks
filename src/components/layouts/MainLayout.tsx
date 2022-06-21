import { HTMLProps } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";

export function MainLayout({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "bg-stone-900 min-h-screen text-white grid content-center",
        className
      )}
      {...props}
    >
      <Container>{children}</Container>
    </div>
  );
}
