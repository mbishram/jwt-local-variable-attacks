import { HTMLProps } from "react";
import clsx from "clsx";

export type CardProps = HTMLProps<HTMLDivElement> & {
  noBorder?: boolean;
  noPadding?: boolean;
};

export function Card({
  children,
  className,
  noBorder = false,
  noPadding = false,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl",
        className,
        !noBorder && "border border-gray-500",
        !noPadding && "p-4"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
