import { useQuery } from "@apollo/client";
import { getDealershipQuery } from "../graphql/dealership.js";

export const useGetDealerships = () => {
  const { data, loading, error } = useQuery(getDealershipQuery);
  return { dealerships: data?.dealerships, loading, error: Boolean(error) };
};
