import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { CSRFMasonry } from "@/components/ui/CSRFMasonry";
import useSWR from "swr";
import { GET_CATS } from "@/libs/crud/cats.crud";
import { useEffect, useState } from "react";
import { NextJsonModels } from "@/models/next-json.models";
import { CatsModels } from "@/models/cats.models";
import { Button } from "@/components/ui/Button";

const CSRF: NextPage = () => {
  const [pictureOfCats, setPictureOfCats] = useState<CatsModels[]>([]);
  const { data, isValidating, mutate } = useSWR<NextJsonModels<CatsModels[]>>(
    GET_CATS,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  useEffect(() => {
    setPictureOfCats([...pictureOfCats, ...(data?.data || [])]);
  }, [data]);

  return (
    <MainLayout title="CSRF">
      {!(pictureOfCats.length === 0 && isValidating) ? (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, assumenda cupiditate deserunt eum exercitationem.
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
        </CSRFMasonry>
      ) : (
        <p>Your cats are on it's way...</p>
      )}
      <div className="text-center mt-6">
        <Button className="sm:w-auto w-full" onClick={() => mutate()}>
          {isValidating ? "Loading..." : "Load More!"}
        </Button>
      </div>
    </MainLayout>
  );
};

export default CSRF;
