import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Dashboard - {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </MainLayout>
  );
};

export default Home;
