import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";

const XSS: NextPage = () => {
  return (
    <MainLayout title="XSS">
      <div>XSS</div>
    </MainLayout>
  );
};

export default XSS;
