import { GithubIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Timotius F. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/UlbertAllain"
            target="_blank"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/an.timoo?igsh=MW9kbWIwMmJoZndmNg=="
            target="_blank"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}