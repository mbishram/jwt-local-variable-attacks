import { httpInstance } from "@/libs/crud/instances.crud";

export const fetcher = (url: string) =>
  httpInstance.get(url).then((res) => res.data);
