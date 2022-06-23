import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { CardLink } from "@/components/ui/CardLink";

const Home: NextPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <CardLink href="/">
          <Typography variant="h2">Test H2</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore
            eligendi esse est eveniet, fuga hic libero numquam obcaecati omnis
            quam, sunt?
          </Typography>
        </CardLink>
        <CardLink href="/">
          <Typography variant="h2">Test H2</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore
            eligendi esse est eveniet, fuga hic libero numquam obcaecati omnis
            quam, sunt?
          </Typography>
        </CardLink>
        <CardLink href="/">
          <Typography variant="h2">Test H2</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore
            eligendi esse est eveniet, fuga hic libero numquam obcaecati omnis
            quam, sunt?
          </Typography>
        </CardLink>
      </div>
    </MainLayout>
  );
};

export default Home;
