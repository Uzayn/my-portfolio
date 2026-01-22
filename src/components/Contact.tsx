import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          Want to work together?
        </p>
        <a
          href="mailto:koleoshohuzain@gmail.com"
          className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          koleoshohuzain@gmail.com
        </a>

        <div className="flex items-center space-x-4 mt-6">
          <a
            href="https://github.com/Uzayn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://x.com/kolhuz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaXTwitter className="text-base" />
          </a>
          <a
            href="https://linkedin.com/in/uzayn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="text-base" />
          </a>
        </div>
      </div>
    </section>
  );
}
