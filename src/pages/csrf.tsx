import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { CSRFMasonry } from "@/components/ui/CSRFMasonry";
import useSWR from "swr";
import { GET_CATS } from "@/libs/crud/cats.crud";
import { useEffect, useState } from "react";
import { NextJsonModels } from "@/models/next-json.models";
import { CatsModels } from "@/models/cats.models";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import randomNumber from "lodash.random";
import { IMAGE_HEIGHTS } from "@/constants/ui.contants";
import clsx from "clsx";

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

  const getRandomHeight = () => {
    return IMAGE_HEIGHTS[randomNumber(0, 4)];
  };

  useEffect(() => {
    // Add height
    const processedData =
      data?.data?.map((data) => ({
        ...data,
        height: getRandomHeight(),
      })) || [];
    setPictureOfCats([...pictureOfCats, ...processedData]);
  }, [data]);

  return (
    <MainLayout title="CSRF">
      {!(pictureOfCats.length <= 0 && isValidating) ? (
        <>
          <CSRFMasonry>
            {pictureOfCats.map((cat) => {
              const url =
                (process?.env?.NEXT_PUBLIC_IMG_PROXY_URL || "") + cat.url;
              return (
                <div
                  key={cat.id}
                  className={clsx(
                    "relative w-full rounded bg-gray-800 overflow-hidden",
                    cat.height
                  )}
                >
                  <Image
                    src={url}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={url}
                  />
                </div>
              );
            })}
          </CSRFMasonry>
          <div className="text-center mt-6">
            <Button className="sm:w-auto w-full" onClick={() => mutate()}>
              {isValidating ? "Loading..." : "Load More!"}
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center">Your cats are on it's way...</p>
      )}
    </MainLayout>
  );
};

export default CSRF;
