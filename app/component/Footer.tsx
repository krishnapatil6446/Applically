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
    <footer className={`w-full bg-blue-100 text-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-blue-100">
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-bold">Applically</h2>
              <span className="bg-blue-500 text-white text-xs px-1 ml-1"></span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Your trusted platform to ace any job interview. Find the perfect
              resume, and land your dream job.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/returnandrefund" className="text-gray-600 hover:text-blue-600">
                  Return and Refund
                </Link>
              </li>
              <li>
                <Link href="/madeinindia" className="text-gray-600 hover:text-blue-600">
                  Made in India
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-600 hover:text-blue-600">
                  Interview Copilot
                </a>
              </li>
              <li>
                <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-600 hover:text-blue-600">
                  AI Mock Interview
                </a>
              </li>
              <li>
                <a href="https://ai-resume-builder-snowy.vercel.app/" className="text-gray-600 hover:text-blue-600">
                  AI Resume Builder
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Interview Questions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  Interview Questions
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600">
              Terms & Conditions
            </Link>
            <p className="text-gray-600">
              © 2025 Applically, INCEPTIA EDTECH LLP.
            </p>
          </div>
          {/* <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaYoutube size={20} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;