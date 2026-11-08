function SocialLinks({ socials, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-4 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;