import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchWithHeaders } from "../utils";
import type { Security } from "../types";

export const useGetSecuritiesQuery = useQuery<Security[]>({
  queryKey: ["securities", "list"],
  queryFn: () =>
    fetchWithHeaders(`${import.meta.env.VITE_BASE_URL}/securities`, {}, {}),
  staleTime: 1000 * 5, // 5 seconds
});
