// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`w-full bg-black text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Company Section */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-bold">Applically</h2>
              <span className="bg-blue-500 text-white text-xs px-1 ml-1"></span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Your trusted platform to ace any job interview. Find the perfect
              resume, and land your dream job.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/media"
                  className="text-gray-300 hover:text-blue-400"
                >
                  PR & Media
                </Link> */}
              </li>
              <li>
                {/* <Link
                  href="/careers"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Careers
                </Link> */}
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
      <h3 className="text-lg font-semibold mb-4">Products</h3>
      <ul className="space-y-3">
        <li>
          <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-300 hover:text-blue-400">
            Interview Copilot
          </a>
        </li>
        <li>
          <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-300 hover:text-blue-400">
            AI Mock Interview
          </a>
        </li>
        <li>
          <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-300 hover:text-blue-400">
            AI Resume Builder
          </a>
        </li>
        <li>
          <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-300 hover:text-blue-400">
            AI Auto Apply
          </a>
        </li>
        <li>
          <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-300 hover:text-blue-400">
            Interview Questions
          </a>
        </li>
      </ul>
    </div>
          {/* Interview Questions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Interview Questions</h3>
            <ul className="space-y-3">
              <li>
                {/* <Link
                  href="/leadership-questions"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Leadership Interview Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/product-manager-questions"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Product Manager Interview Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/coding-questions"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Coding Interview Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-questions"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Technical Interview Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-engineer-questions"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Generative AI Engineer Interview Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/swift-questions"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Swift Developer Interview Questions
                </Link> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-300 hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-blue-400">
              Terms & Conditions
            </Link>
            <Link
              href="/returnandrefund"
              className="text-gray-300 hover:text-blue-400"
            >
              Return and Refund
            </Link>
            <Link
              href="/madeinindia"
              className="text-gray-300 hover:text-blue-400"
            >
              Made in India
            </Link>
            <p className="text-gray-300">
              © 2025 Applically, INCEPTIA EDTECH LLP.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
