import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { NavCard } from "@/components/ui/NavCard";

const Home: NextPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <NavCard
          href="/xss"
          header="XSS Scripts"
          description={(Hovered) => (
            <>
              List of <Hovered>scripts</Hovered> used to test Reflected and
              Stored <Hovered>Cross-Site Scripting</Hovered> Attacks.
            </>
          )}
        />
        <NavCard
          href="/csrf"
          header="CSRF Website"
          description={(Hovered) => (
            <>
              <Hovered>Controlled page</Hovered> disguised as a web that shows a
              picture of cats. It is used to test{" "}
              <Hovered>Cross-Site Request Forgery</Hovered> Attacks.
            </>
          )}
        />
        <NavCard
          href="/results"
          header="Results"
          description={(Hovered) => (
            <>
              Show all <Hovered>Payloads</Hovered> received from{" "}
              <Hovered>XSS and CSRF</Hovered> Attacks.
            </>
          )}
        />
      </div>
    </MainLayout>
  );
};

export default Home;
