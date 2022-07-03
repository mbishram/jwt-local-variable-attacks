import { HTMLProps } from "react";
import clsx from "clsx";

export type TypographyVariant = "h1" | "h2" | "p" | "subtext";
export type TypographyProps = HTMLProps<HTMLParagraphElement> & {
  variant?: TypographyVariant;
};

export function Typography({
  children,
  variant = "p",
  className,
  ...props
}: TypographyProps) {
  const getElementProps = (elementClass: string = "") => ({
    className: clsx(elementClass, className),
    ...props,
  });
  switch (variant) {
    case "h1":
      return <h1 {...getElementProps("font-bold text-9xl")}>{children}</h1>;
    case "h2":
      return <h2 {...getElementProps("font-bold text-2xl")}>{children}</h2>;
    case "p":
      return <p {...getElementProps()}>{children}</p>;
    case "subtext":
      return <p {...getElementProps("text-gray-400")}>{children}</p>;
  }
}
