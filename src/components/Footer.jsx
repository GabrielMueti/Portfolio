import SocialLinks from "./SocialLinks";

function Footer({ name, heading, subtitle, email, phone, location, socials, studioUrl }) {
  return (
    <footer id="contact" className="scroll-mt-16 bg-slate-900 px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-white">{heading}</h2>
        {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}

        <div className="mt-6 flex flex-col items-center gap-2 text-lg">
          {email && (
            <a
              href={`mailto:${email}`}
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="text-slate-300 hover:text-white"
            >
              {phone}
            </a>
          )}
          {location && <p className="text-slate-400">{location}</p>}
        </div>

        <SocialLinks
          socials={socials}
          className="mt-8 justify-center [&_a]:text-slate-300 [&_a:hover]:text-white"
        />

        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} {name}. All rights reserved.
          {studioUrl && (
            <>
              {" · "}
              <a
                href={studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300"
              >
                Admin
              </a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}

export default Footer;