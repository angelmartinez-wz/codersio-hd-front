import { useQuery } from "@apollo/client";
import { getUserByEmailQuery, getUserQuery } from "../graphql/queries/user.js";

export const useGetUser = () => {
  const { data, loading, error } = useQuery(getUserQuery);
  return { user: data?.user, loading, error: Boolean(error) };
};

export const useGetUserByEmail = (userId) => {
  const { data, loading, error } = useQuery(getUserByEmailQuery);
  return { user: data?.userByEmail, loading, error: Boolean(error) };
};
