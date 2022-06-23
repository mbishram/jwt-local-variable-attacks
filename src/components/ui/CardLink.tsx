import { Card, CardProps } from "@/components/ui/Card";
import Link, { LinkProps } from "next/link";

export type CardLinkProps = CardProps &
  Pick<LinkProps, "href"> & { LinkProps?: Omit<LinkProps, "href"> };

export function CardLink({
  children,
  href,
  LinkProps,
  ...props
}: CardLinkProps) {
  return (
    <Link href={href} {...LinkProps}>
      <a>
        <Card {...props}>{children}</Card>
      </a>
    </Link>
  );
}
