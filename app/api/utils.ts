export async function fetchWithHeaders<T>(
  url: string,
  headers: Record<string, string> = {},
  body?: unknown
): Promise<T> {
  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    method: body ? "POST" : "GET",
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json() as Promise<T>;
}
