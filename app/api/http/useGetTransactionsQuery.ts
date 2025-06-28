import { useQuery } from "@tanstack/react-query";
import { fetchWithHeaders } from "../utils";

export const useGetTransactionsQuery = () =>
  useQuery({
    queryKey: ["transactions", "list"],
    queryFn: async () =>
      fetchWithHeaders(`${import.meta.env.VITE_BASE_URL}/transactions`),
  });
