import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";

const Home: NextPage = () => {
  return (
    <MainLayout title="Dashboard">
      <Typography variant="h2">Test H2</Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore
        eligendi esse est eveniet, fuga hic libero numquam obcaecati omnis quam,
        sunt? Adipisci earum itaque iure praesentium sapiente. Ab aperiam
        consectetur culpa cupiditate deleniti dicta dolore doloribus ea
        excepturi explicabo fuga incidunt libero nesciunt quas quasi quidem
        reprehenderit sed sequi soluta sunt unde velit veritatis, voluptate.
        Accusamus aut consequuntur debitis doloremque ea explicabo fugiat
        maiores nostrum quis reiciendis? Aliquid corporis distinctio dolore
        eaque explicabo necessitatibus, quas repellendus sunt? At, aut
        doloremque doloribus eaque eligendi et ex explicabo harum illo iure
        mollitia nobis nulla placeat porro praesentium quibusdam suscipit. A
        aspernatur commodi consectetur consequatur consequuntur cupiditate
        dignissimos distinctio error facere illum impedit inventore laborum
        minus non nulla officia optio pariatur perferendis placeat quas quo
        ratione repellendus reprehenderit sit suscipit tempora totam, velit!
        Animi asperiores ducimus excepturi explicabo incidunt libero ratione
        repellat tenetur veritatis. Alias aliquid autem blanditiis dolores
        dolorum eligendi et exercitationem fugiat fugit, id iste laborum magni
        minus nesciunt nihil numquam, officiis placeat porro quisquam
        reprehenderit. Aliquam id maiores possimus praesentium sit voluptas! Cum
        et exercitationem iure non, quisquam quo sint tempore. Animi
        consequuntur dignissimos distinctio, dolorem doloribus esse et ipsa
        itaque neque nobis quae quas quod sint veritatis voluptates.
      </Typography>
    </MainLayout>
  );
};

export default Home;
