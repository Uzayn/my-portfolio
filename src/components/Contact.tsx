import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-lg" />
          <a
            href="mailto:your-email@example.com"
            className="text-lg hover:text-blue-600 transition-colors"
          >
            koleoshohuzain@gmail.com
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Uzayn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg hover:text-gray-600 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://x.com/kolhuz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg hover:text-blue-400 transition-colors"
          >
            <FaXTwitter className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/uzayn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg hover:text-blue-700 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
