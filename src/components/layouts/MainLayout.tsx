import { HTMLProps } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { getPageTitle } from "@/utils/page-utils";
import Head from "next/head";

export type MainLayoutProps = Omit<HTMLProps<HTMLDivElement>, "title"> & {
  title?: string;
};

export function MainLayout({
  children,
  className,
  title = "",
  ...props
}: MainLayoutProps) {
  return (
    <div className={clsx("bg-stone-900 text-white", className)} {...props}>
      <Head>
        <title>{getPageTitle(title)}</title>
      </Head>
      <Container className="flex flex-col h-full min-h-screen">
        <nav className="py-4">
          <Typography variant="h1" className="opacity-25 break-all">
            {title}
          </Typography>
        </nav>
        <section className="flex-grow py-4">{children}</section>
      </Container>
    </div>
  );
}
