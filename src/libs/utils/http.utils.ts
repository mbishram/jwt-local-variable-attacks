import { NextJSON } from "@/models/next-json";
import { NextApiRequest, NextApiResponse } from "next";

export type InvalidMethodOptions = { allowMethod: string[] };

export const invalidMethod = (
  req: NextApiRequest,
  res: NextApiResponse,
  options: InvalidMethodOptions
) => {
  const { method } = req;
  const { allowMethod } = options;
  res.setHeader("Access-Control-Allow-Methods", allowMethod || "*");
  return res.status(405).json(
    new NextJSON({
      success: false,
      message: `Method ${method} Not Allowed`,
    })
  );
};
