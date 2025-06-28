import { useQuery } from "@tanstack/react-query";
import { fetchWithHeaders } from "../utils";
import type { Profile, Security } from "../types";

interface AuthParams {
  email: string;
  password: string;
}

export const useAuthenticateQuery = ({ email, password }: AuthParams) =>
  useQuery({
    queryKey: ["authenticate", email, password],
    queryFn: async () => {
      const response = await fetchWithHeaders<Profile[]>(
        `${import.meta.env.VITE_BASE_URL}/profiles`
      );
      const profiles: Profile[] = await response;
      const user = profiles.find(
        (profile) => profile.email === email && profile.password === password
      );
      if (!user) {
        return false;
      }
      return true;
    },
    enabled: !!email && !!password,
  });
