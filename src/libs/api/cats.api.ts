import { NextApiRequest, NextApiResponse } from "next";
import { catsHTTPInstance } from "@/libs/crud/instances.crud";
import { NextJsonModels } from "@/models/next-json.models";
import { CatsModels } from "@/models/cats.models";

export async function getCats(req: NextApiRequest, res: NextApiResponse) {
  const LIMIT = 24;
  const SIZE = "med";
  const { data } = await catsHTTPInstance.get(
    `/images/search?limit=${LIMIT}&size=${SIZE}`
  );

  if (!data) {
    return res
      .status(500)
      .json(
        new NextJsonModels({ success: false, message: "Something went wrong!" })
      );
  }

  return res.status(200).json(
    new NextJsonModels<CatsModels[]>({
      success: true,
      message: "Fetch success!",
      data: data,
    })
  );
}
