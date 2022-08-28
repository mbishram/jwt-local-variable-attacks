import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { NavCard } from "@/components/ui/NavCard";

const Home: NextPage = () => {
  return (
    <MainLayout title="Dashboard" noHomeButton>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center max-w-screen-lg mx-auto">
        <NavCard
          href="/xss-scripts"
          header="XSS Scripts"
          description={(Hovered) => (
            <>
              List of <Hovered>scripts</Hovered> used to test Reflected and
              Stored <Hovered>Cross-Site Scripting</Hovered> Attacks.
            </>
          )}
        />
        <NavCard
          href="/csrf-scripts"
          header="CSRF Scripts"
          description={(Hovered) => (
            <>
              List of <Hovered>scripts</Hovered> used to test{" "}
              <Hovered>Cross-Site Request Forgery</Hovered> Attacks.
            </>
          )}
        />
        <NavCard
          href="/csrf-attack"
          header="CSRF Website"
          description={(Hovered) => (
            <>
              <Hovered>Controlled page</Hovered> disguised as a web that shows a
              picture of cats. It is used to test{" "}
              <Hovered>Cross-Site Request Forgery</Hovered> Attacks.
            </>
          )}
        />
      </div>
    </MainLayout>
  );
};

export default Home;
