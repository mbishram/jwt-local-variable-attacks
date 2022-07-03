import { HTMLProps } from "react";
import clsx from "clsx";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function Button({
  children,
  type,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={"button" || type}
      className={clsx(
        "py-2 px-4 min-h min-h-44px bg-primary hover:bg-opacity-80 transition-all rounded text-center",
        fullWidth && "block w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
