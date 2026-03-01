import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-16 relative">
      <div className="mx-auto max-w-6xl px-6 mt-16 md:-mt-32 relative z-10">
        <div className="bg-[#0a0f18] text-white rounded-[48px] p-10 md:p-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left Section: Logo, Tagline, and Contact Info */}
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <Link
                  to="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                </Link>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  Delivering excellence through <br /> innovation and dedication, every day.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                  <p className="text-gray-300 max-w-sm">
                    Second Floor 60 Ahmadu Bello way, Murtala Muhammad Library, Nasarawa GRA.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-400 shrink-0" />
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    +234 81 1452 8984
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-400 shrink-0" />
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    info@innospacex.ng
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section: Navigation Links */}
            <div className="flex flex-col space-y-6 md:text-right md:pt-12">
              <Link to="/" className="text-xl font-medium text-gray-300 hover:text-white transition-colors">
                Programs
              </Link>
              <Link to="/" className="text-xl font-medium text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/" className="text-xl font-medium text-gray-300 hover:text-white transition-colors">
                Community
              </Link>
              <Link to="/" className="text-xl font-medium text-gray-300 hover:text-white transition-colors">
                Our Hub
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm">
                2025 © InnoSpace X. All rights reserved
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm hidden md:inline">
                  Follow us @ InnospaceX on ||
                </span>
                <div className="flex items-center gap-4">
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X/Twitter"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Twitter className="w-5 h-5 fill-current" />
                  </Link>
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="bg-[#1877F2] p-1.5 rounded-full text-white hover:opacity-80 transition-opacity"
                  >
                    <Facebook className="w-4 h-4 fill-current" />
                  </Link>
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="bg-gradient-to-tr from-[#FFD600] via-[#FF0000] to-[#D600AD] p-1.5 rounded-full text-white hover:opacity-80 transition-opacity"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="bg-[#0A66C2] p-1.5 rounded-sm text-white hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
