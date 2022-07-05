import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { HTMLProps } from "react";
import clsx from "clsx";

export type StyledSyntaxHighlighterProps = Omit<
  SyntaxHighlighterProps,
  "language" | "style" | "showLineNumbers" | "wrapLongLines"
> &
  Pick<HTMLProps<HTMLDivElement>, "className">;

export function StyledSyntaxHighlighter({
  children,
  className,
  customStyle,
  ...props
}: StyledSyntaxHighlighterProps) {
  return (
    <div className={clsx("rounded overflow-hidden", className)}>
      <Prism
        language="javascript"
        style={materialDark}
        customStyle={{ margin: 0, ...customStyle }}
        showLineNumbers
        wrapLongLines
        {...props}
      >
        {children}
      </Prism>
    </div>
  );
}
