"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Briefcase,
  Users,
  Phone,
  BookOpen,
  HeartPulse,
  UsersRound,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  {
    label: "Our Services",
    icon: Briefcase,
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Exercise Therapy",
        icon: HeartPulse,
        href: "/exercise-therapy",
      },
      {
        label: "Education and Training",
        icon: UsersRound,
        href: "/education-and-training",
      },
    ],
  },
  { label: "Team", href: "/team", icon: Users },
  { label: "Contact", href: "/contact", icon: Phone },
];

const specialLink = {
  label: "Our Model of Care",
  href: "/model-of-care",
  icon: Layers,
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar – Brand + Logo */}
      <div className="bg-[#4793FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src="/images/logoA.png"
                  alt="Arukah Health Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight group-hover:opacity-90 transition">
                ARUKAH HEALTH
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  ref={item.hasDropdown ? dropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className={`flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-[#4793FF] font-medium transition-colors ${
                          servicesOpen ? "text-[#4793FF]" : ""
                        }`}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        <item.icon size={18} />
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Dropdown */}
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                        >
                          {item.dropdownItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-center gap-3 px-6 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-[#4793FF] transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              <sub.icon size={20} className="text-[#4793FF]" />
                              <span className="font-medium">{sub.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-[#4793FF] font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-[#4793FF] font-semibold"
                          : ""
                      }`}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Special Link – Our Model of Care */}
            <div className="hidden lg:flex items-center">
              <Link
                href={specialLink.href}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#4793FF] text-[#4793FF] font-semibold hover:bg-blue-50 transition-colors ${
                  isActive(specialLink.href) ? "bg-blue-50" : ""
                }`}
              >
                <specialLink.icon size={18} />
                {specialLink.label}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4793FF] rounded-lg p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-5 py-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={22} />
                          <span className="font-medium text-lg">
                            {item.label}
                          </span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {servicesOpen && (
                        <div className="ml-10 mt-2 space-y-3 border-l-2 border-[#4793FF]/30 pl-5">
                          {item.dropdownItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-center gap-3 py-3 text-gray-700 hover:text-[#4793FF] transition-colors text-base"
                              onClick={() => setMobileOpen(false)}
                            >
                              <sub.icon size={20} />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-colors text-lg ${
                        isActive(item.href)
                          ? "bg-blue-50 text-[#4793FF] font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon size={22} />
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Special Link */}
              <Link
                href={specialLink.href}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl font-semibold transition-colors mt-4 text-lg ${
                  isActive(specialLink.href)
                    ? "bg-blue-50 text-[#4793FF] border-l-4 border-[#4793FF] pl-4"
                    : "text-[#4793FF] hover:bg-blue-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <specialLink.icon size={22} />
                {specialLink.label}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
