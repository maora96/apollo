import { useQuery } from "react-query";
import { getProductsClient } from "../api/client";

export const useGetProducts = () => {
  return useQuery("categories", async () => getProductsClient(), {
    refetchOnWindowFocus: false,
  });
};
