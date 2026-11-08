const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

// Sends a GROQ query to Sanity and returns the "result" part.
export async function sanityFetch(query, signal) {
  const url = `https://${projectId}.apicdn.sanity.io/v2025-01-01/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  console.log("Sanity URL:", url);

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}