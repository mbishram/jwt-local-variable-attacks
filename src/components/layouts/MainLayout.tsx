import { HTMLProps } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { getPageTitle } from "@/utils/page-utils";
import Head from "next/head";
import { Home } from "react-feather";
import Link from "next/link";

export type MainLayoutProps = Omit<HTMLProps<HTMLDivElement>, "title"> & {
  title?: string;
  noHomeButton?: boolean;
};

export function MainLayout({
  children,
  className,
  title = "",
  noHomeButton = false,
  ...props
}: MainLayoutProps) {
  return (
    <div className={clsx("bg-stone-900 text-white", className)} {...props}>
      <Head>
        <title>{getPageTitle(title)}</title>
      </Head>
      <Container className="flex flex-col min-h-screen">
        <section className="flex-grow pt-4 grid content-center">
          {children}
        </section>
        {title && (
          <footer className="py-8 text-right">
            <Typography variant="h1">
              {!noHomeButton && (
                <Link href="/">
                  <a className="inline-flex content-end mr-4 opacity-25 hover:opacity-100 transition-all">
                    <Home size="2rem" />
                  </a>
                </Link>
              )}
              <span className="opacity-20 break-all">{title}</span>
            </Typography>
          </footer>
        )}
      </Container>
    </div>
  );
}
