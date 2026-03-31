import "server-only";
import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, hasSanityEnv, projectId, useCdn } from "../env";

export { groq };

const readToken = process.env.SANITY_API_READ_TOKEN;

export const sanityClient = hasSanityEnv
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      token: readToken,
      useCdn: readToken ? false : useCdn,
      perspective: "published",
    })
  : null;

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  const requestOptions = {
    cache: "no-store" as const,
    ...(tags.length > 0
      ? {
          next: {
            tags,
          },
        }
      : {}),
  };

  return sanityClient.fetch<T>(
    query,
    params,
    requestOptions,
  );
}
