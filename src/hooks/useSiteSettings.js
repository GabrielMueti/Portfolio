import { useState, useEffect } from "react";
import { sanityFetch } from "../lib/sanity";
import siteData from "../data/siteData";

const query = `*[_id == "siteSettings"][0] {
  name,
  tagline,
  heroGreeting,
  heroButtonText,
  cvButtonText,
  "cvUrl": cv.asset->url,
  "profileImage": profileImage.asset->url + "?w=800&auto=format",
  aboutHeading,
  aboutText,
  skillsHeading,
  "skills": coalesce(skills, []),
  projectsHeading,
  projectsSubtitle,
  contactHeading,
  contactSubtitle,
  email,
  phone,
  location,
  "socials": coalesce(socials[]{ label, url }, []),
  seoTitle,
  seoDescription
}`;

function useSiteSettings() {
  const [settings, setSettings] = useState(siteData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSettings() {
      try {
        const result = await sanityFetch(query, controller.signal);

        if (result) {
          const merged = { ...siteData };

          for (const [key, value] of Object.entries(result)) {
            // Lists (skills, socials) always follow Sanity.
            // Text and files only replace the default when they have a value.
            const isEmpty = value === null || value === "";
            if (Array.isArray(value) || !isEmpty) {
              merged[key] = value;
            }
          }

          setSettings(merged);
        }
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    loadSettings();
    return () => controller.abort();
  }, []);

  return { settings, isLoading };
}

export default useSiteSettings;