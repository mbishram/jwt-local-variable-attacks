import { isClientSide } from "@/libs/utils/page.utils";

export const FETCH_METHODS = { GET: "GET" };

export const ATTACKER_HOST =
  isClientSide() && window?.location?.protocol + "//" + window?.location?.host;
export const ATTACKED_ENDPOINT = "/api/quotes";
