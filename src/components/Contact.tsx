import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", href: "https://github.com/Uzayn", icon: FaGithub },
  { name: "X", href: "https://x.com/kolhuz", icon: FaXTwitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/uzayn", icon: FaLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="text-sm text-gray-500">Want to work together?</p>
        <a
          href="mailto:koleoshohuzain@gmail.com"
          className="mt-2 inline-block text-xl md:text-2xl text-gray-900 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          koleoshohuzain@gmail.com
        </a>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              <Icon className="h-4 w-4" />
              {name}
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Huzain Koleosho</span>
          <span>Built with Next.js and Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}
