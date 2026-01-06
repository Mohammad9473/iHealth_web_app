import { FaGithub, FaLinkedin, FaBriefcase, FaHeart } from "react-icons/fa";
import ComingSoonBadge from "./ComingSoonBadge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <img
                src="/images/icon.png"
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
              />
              <span className="text-xl font-bold">iHealthSync</span>
            </div>
            <p className="text-gray-400 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Mohammad9473"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadreza-arabameri-a1240561/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://mreza9473-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <FaBriefcase />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <ComingSoonBadge />
          <p className="text-gray-500 text-sm mt-2">
            Currently in development • Expected launch: Spring 2026
          </p>
        </div>

        <div className="mt-8 pt-8 text-center text-gray-500">
          <p className="flex items-center justify-center">
            Made with <FaHeart className="mx-2 text-red-500" /> by Reza
          </p>
          <p className="mt-2 text-sm">
            Need help? Contact us at{" "}
            <a
              href="mailto:mohammad94ameri@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mohammad94ameri@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
