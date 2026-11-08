function ProjectCard({ project }) {
  const { title, description, tags = [], image, liveLink } = project;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 flex-1 text-slate-600">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        {liveLink && (
          <div className="mt-6 text-sm font-semibold">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Live Demo →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;