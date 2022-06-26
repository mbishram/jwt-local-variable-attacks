import { NextApiRequest, NextApiResponse } from "next";
import { catsHTTPInstance } from "@/libs/crud/instances.crud";

export async function getCats(req: NextApiRequest, res: NextApiResponse) {
  const LIMIT = 10;
  // TODO: Change this to the real api
  const { data } = await catsHTTPInstance.get(`/images/search?limit=${LIMIT}`);
  console.log("_TST", data);
  return res.json(200);
}
