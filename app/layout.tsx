"use client";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";  // Importing React Icons

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  // Helper function to determine if the link is active
  const isActive = (path: string) =>
    pathname === path ? "text-cyan-300" : "opacity-75 hover:opacity-100";

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header Section */}
            <header className="fixed top-0 w-full bg-gradient-to-r from-cyan-700 to-cyan-900 text-white shadow-lg z-50">
            <nav className="container mx-auto flex justify-between items-center py-3 px-6">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="logo" className="h-10" />
              <span className="text-xl font-bold tracking-wide">
                AI-Solution
              </span>
              </Link>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
              <button
                id="mobile-menu-button"
                className="text-white focus:outline-none"
                aria-label="Toggle navigation"
              >
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
                </svg>
              </button>
              </div>

              {/* Navigation Links */}
              <div className="hidden sm:flex space-x-8 text-sm md:text-base font-medium">
              <Link
                href="/"
                className={`transition-all duration-200 ${isActive("/")}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`transition-all duration-200 ${isActive(
                "/about"
                )}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`transition-all duration-200 ${isActive(
                "/services"
                )}`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`transition-all duration-200 ${isActive(
                "/contact"
                )}`}
              >
                Contact
              </Link>
              </div>

              {/* Call-to-Action Button */}
              <Link
              href="/get-started"
              className="hidden sm:block px-4 py-2 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-500 transition-all"
              >
              Get Started
              </Link>
            </nav>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="sm:hidden hidden">
              <div className="flex flex-col space-y-2 text-sm font-medium p-4">
              <Link
                href="/"
                className={`transition-all duration-200 ${isActive("/")}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`transition-all duration-200 ${isActive(
                "/about"
                )}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`transition-all duration-200 ${isActive(
                "/services"
                )}`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`transition-all duration-200 ${isActive(
                "/contact"
                )}`}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="px-4 py-2 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-500 transition-all"
              >
                Get Started
              </Link>
              </div>
            </div>
            </header>

            <script>
            {`
              document.getElementById('mobile-menu-button').addEventListener('click', function() {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu.classList.toggle('hidden');
              });
            `}
            </script>

          {/* Main Content Section */}
          <main className="mt-[60px] min-h-screen">{children}</main>

          {/* Footer Section */}
          <footer className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-gray-200 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Section - Brand and Tagline */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold text-white">AI-Solution</h2>
                <p className="text-sm text-gray-400">
                  Your Partner in AI Innovation
                </p>
                <p className="text-xs text-gray-500">
                  Empowering businesses with cutting-edge AI solutions.
                </p>
              </div>

              {/* Center Section - Navigation Links */}
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <div className="flex flex-col space-y-2 text-sm">
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right Section - Social Media Icons */}
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="mt-8 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} AI-Solution. All rights reserved.
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
