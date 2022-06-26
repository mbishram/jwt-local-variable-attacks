import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import useSWRInfinite from "swr/infinite";
import { CSRFMasonry } from "@/components/ui/CSRFMasonry";
import { GET_CATS } from "@/libs/crud/cats.crud";

const CSRF: NextPage = () => {
  // TODO: implement swr, httpInstance - GET_CATS - cats.crud.ts
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) => {
      console.log("_TST", index);
      // cats + index for pagination
      return GET_CATS;
    }
  );

  return (
    <MainLayout title="CSRF">
      <CSRFMasonry>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
          assumenda cupiditate deserunt eum exercitationem.
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
          assumenda cupiditate deserunt eum exercitationem fugiat ipsam labore
          nostrum obcaecati officia, omnis quas quod reiciendis voluptatibus!
        </div>
      </CSRFMasonry>
    </MainLayout>
  );
};

export default CSRF;
