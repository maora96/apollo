import { useQuery } from "react-query";
import { getCategoriesClient } from "../api/client";

export const useGetCategories = () => {
  return useQuery("categories", async () => getCategoriesClient(), {
    refetchOnWindowFocus: false,
  });
};
