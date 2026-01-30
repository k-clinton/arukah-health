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
  Globe,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  {
    label: "Services",
    href: "/services",
    icon: Briefcase,
    hasDropdown: true,
    dropdownItems: [
      { label: "Pediatric Exercise Therapy", icon: HeartPulse },
      { label: "Neurodevelopmental Support", icon: UsersRound },
      { label: "Family & Caregiver Training", icon: BookOpen },
      { label: "Community & Outreach Programs", icon: Globe },
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

  // Close dropdown when clicking outside
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar – Brand + Utility */}
      <div className="bg-gradient-to-r from-blue-500  to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-700 font-bold">
                <Image
                  src="/images/logo.png"
                  alt="Arukah Health Logo"
                  width={37}
                  height={37}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight group-hover:opacity-90 transition">
                ARUKAH HEALTH
              </span>
            </Link>

            {/* Utility link */}
            <Link
              href="/education-training"
              className="hidden md:flex items-center text-orange-500 gap-2 text-sm font-medium hover:text-blue-100 transition-colors"
            >
              <BookOpen size={18} />
              Education & Training
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
                        className={`flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                          servicesOpen ? "text-blue-600" : ""
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
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                        >
                          {item.dropdownItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href="/services" // can be customized per sub-item later
                              className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              <sub.icon size={18} className="text-blue-600" />
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                        isActive(item.href) ? "text-blue-600 font-semibold" : ""
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
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border--600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors ${
                  isActive(specialLink.href) ? "bg-blue-50" : ""
                }`}
              >
                <specialLink.icon size={18} />
                {specialLink.label}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
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
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {servicesOpen && (
                        <div className="ml-8 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                          {item.dropdownItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href="/services"
                              className="flex items-center gap-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              <sub.icon size={18} />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon size={20} />
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Special Link */}
              <Link
                href={specialLink.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors mt-4 ${
                  isActive(specialLink.href)
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600 pl-3"
                    : "text-blue-700 hover:bg-blue-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <specialLink.icon size={20} />
                {specialLink.label}
              </Link>

              {/* Mobile Utility */}
              <Link
                href="/education-training"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mt-2"
                onClick={() => setMobileOpen(false)}
              >
                <BookOpen size={20} />
                Education & Training
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
