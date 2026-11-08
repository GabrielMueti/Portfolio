import SocialLinks from "./SocialLinks";

function Hero({ name, tagline, socials, greeting, buttonText, cvUrl, cvButtonText }) {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-b from-white to-slate-50 px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          {greeting}
        </p>
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-7xl">
          {name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
          {tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            {buttonText}
          </a>

          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              {cvButtonText}
            </a>
          )}

          <SocialLinks socials={socials} className="sm:ml-2" />
        </div>
      </div>
    </section>
  );
}

export default Hero;