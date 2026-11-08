import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useProjects from "./hooks/useProjects";
import useSiteSettings from "./hooks/useSiteSettings";

function App() {
  const { projects, isLoading, error } = useProjects();
  const { settings, isLoading: settingsLoading } = useSiteSettings();

  // Browser tab title and Google description
  useEffect(() => {
    document.title = settings.seoTitle || settings.name;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", settings.seoDescription || settings.tagline);
  }, [settings]);

  if (settingsLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-500">
        Loading...
      </div>
    );
  }

  const hasAbout = Boolean(
    settings.aboutText || settings.profileImage || settings.skills.length > 0
  );

  return (
    <>
      <Navbar name={settings.name} hasAbout={hasAbout} />
      <main>
        <Hero
          name={settings.name}
          tagline={settings.tagline}
          socials={settings.socials}
          greeting={settings.heroGreeting}
          buttonText={settings.heroButtonText}
          cvUrl={settings.cvUrl}
          cvButtonText={settings.cvButtonText}
        />
        <About
          name={settings.name}
          heading={settings.aboutHeading}
          text={settings.aboutText}
          image={settings.profileImage}
          skillsHeading={settings.skillsHeading}
          skills={settings.skills}
        />
        <Projects
          projects={projects}
          isLoading={isLoading}
          error={error}
          heading={settings.projectsHeading}
          subtitle={settings.projectsSubtitle}
        />
      </main>
      <Footer
        name={settings.name}
        heading={settings.contactHeading}
        subtitle={settings.contactSubtitle}
        email={settings.email}
        phone={settings.phone}
        location={settings.location}
        socials={settings.socials}
        studioUrl={settings.studioUrl}
      />
    </>
  );
}

export default App;