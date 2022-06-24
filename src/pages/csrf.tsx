import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const CSRF: NextPage = () => {
  return (
    <MainLayout title="CSRF">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            officia!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            inventore ipsa nisi reiciendis rem, unde velit! Eius non provident
            repudiandae?
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            doloribus labore perspiciatis quo voluptatem! At culpa illo ipsum
            iure, maxime nam voluptas! Accusamus amet commodi consectetur,
            corporis cumque eos laboriosam laborum laudantium minus obcaecati,
            officiis optio rem sequi suscipit totam!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, assumenda cupiditate deserunt eum exercitationem fugiat
            ipsam labore nostrum obcaecati officia, omnis quas quod reiciendis
            voluptatibus!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            officia!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            inventore ipsa nisi reiciendis rem, unde velit! Eius non provident
            repudiandae?
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            doloribus labore perspiciatis quo voluptatem! At culpa illo ipsum
            iure, maxime nam voluptas! Accusamus amet commodi consectetur.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, assumenda cupiditate deserunt eum exercitationem fugiat
            ipsam labore nostrum obcaecati officia, omnis quas quod reiciendis
            voluptatibus!
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </MainLayout>
  );
};

export default CSRF;
