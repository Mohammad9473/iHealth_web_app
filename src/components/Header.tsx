import Link from "next/link";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect safe-top">
      <div className="container mx-auto px-4 py-4 safe-left safe-right">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/images/icon.png"
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
            />
            <span className="text-xl font-bold">iHealthSync</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Mohammad9473"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadreza-arabameri-a1240561/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://mreza9473-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Portfolio"
            >
              <FaBriefcase size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
