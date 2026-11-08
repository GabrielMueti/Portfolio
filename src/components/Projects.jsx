import ProjectCard from "./ProjectCard";

function Projects({ projects, isLoading, error, heading, subtitle }) {
  return (
    <section id="projects" className="scroll-mt-16 bg-slate-50 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          {heading}
        </h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}

        {isLoading && (
          <p className="mt-12 text-slate-500">Loading projects...</p>
        )}

        {error && (
          <p className="mt-12 rounded-lg bg-red-50 p-4 text-red-700">
            Sorry, the projects could not be loaded. ({error})
          </p>
        )}

        {!isLoading && !error && projects.length === 0 && (
          <p className="mt-12 text-slate-500">No projects yet. Check back soon!</p>
        )}

        {!isLoading && !error && projects.length > 0 && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;