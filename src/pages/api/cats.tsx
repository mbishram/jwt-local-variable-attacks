import { NextApiRequest, NextApiResponse } from "next";
import { FETCH_METHODS } from "@/constants/fetch-methods";
import { invalidMethod } from "@/libs/utils/http.utils";
import { getCats } from "@/libs/api/cats.api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case FETCH_METHODS.GET: {
      return await getCats(req, res);
    }
    default:
      return invalidMethod(req, res, { allowMethod: [FETCH_METHODS.GET] });
  }
}
