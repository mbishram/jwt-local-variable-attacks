import { Card, CardProps } from "@/components/ui/Card";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { HTMLProps } from "react";

export type CardLinkProps = CardProps &
  Pick<LinkProps, "href"> & {
    LinkProps?: Omit<LinkProps, "href">;
    anchorProps?: Omit<HTMLProps<HTMLAnchorElement>, "href" | "children">;
  };

export function CardLink({
  children,
  href,
  LinkProps,
  anchorProps: { className: anchorClassName, ...restAnchorProps } = {
    className: "",
  },
  ...props
}: CardLinkProps) {
  return (
    <Link href={href} {...LinkProps}>
      <a className={clsx("block h-full", anchorClassName)} {...restAnchorProps}>
        <Card {...props}>{children}</Card>
      </a>
    </Link>
  );
}
