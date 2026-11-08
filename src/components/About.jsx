function About({ name, heading, text, image, skillsHeading, skills }) {
  const hasContent = text || image || skills.length > 0;
  if (!hasContent) return null;

  return (
    <section id="about" className="scroll-mt-16 bg-white px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-3">
        {image && (
          <img
            src={image}
            alt={`Portrait of ${name}`}
            className="mx-auto aspect-square w-full max-w-xs rounded-2xl object-cover shadow-lg md:col-span-1"
          />
        )}

        <div className={image ? "md:col-span-2" : "md:col-span-3"}>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {heading}
          </h2>

          {text && (
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-slate-600">
              {text}
            </p>
          )}

          {skills.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                {skillsHeading}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;