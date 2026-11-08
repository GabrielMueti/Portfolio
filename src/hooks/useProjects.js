import { useState, useEffect } from "react";
import { sanityFetch } from "../lib/sanity";

const query = `*[_type == "project"] | order(_createdAt asc) {
  "id": _id,
  title,
  description,
  "tags": coalesce(tags, []),
  "image": image.asset->url,
  liveLink
}`;

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const result = await sanityFetch(query, controller.signal);
        setProjects(result);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    loadProjects();
    return () => controller.abort();
  }, []);

  return { projects, isLoading, error };
}

export default useProjects;