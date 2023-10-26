import { api } from ".";

export const createProductClient = async (data: any) => {
  return api.post("/product", {
    ...data,
  });
};

export const getCategoriesClient = async () => {
  return api.get("category");
};

export const getProductsClient = async () => {
  return api.get("product");
};
