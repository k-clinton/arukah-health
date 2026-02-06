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
    href: "/services",
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
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ---------------- DESKTOP: CLOSE ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#4793FF] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-12">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logoA.png"
                alt="Arukah Health Logo"
                width={36}
                height={36}
              />
              <span className="font-serif text-xl font-semibold">
                ARUKAH HEALTH
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() =>
                        setDesktopServicesOpen(!desktopServicesOpen)
                      }
                      className="flex items-center gap-2 font-medium text-gray-700 hover:text-[#4793FF]"
                    >
                      <item.icon size={18} />
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          desktopServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {desktopServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute mt-3 w-72 rounded-xl bg-white shadow-xl border py-3"
                      >
                        {item.dropdownItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={closeMenus}
                            className={`flex items-center gap-3 px-6 py-3 hover:bg-blue-50 ${
                              isActive(sub.href)
                                ? "font-semibold text-[#4793FF]"
                                : "text-gray-700"
                            }`}
                          >
                            <sub.icon size={20} />
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className={`flex items-center gap-2 font-medium ${
                      isActive(item.href)
                        ? "text-[#4793FF]"
                        : "text-gray-700 hover:text-[#4793FF]"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Link>
                ),
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href={specialLink.href}
                onClick={closeMenus}
                className="border-2 border-[#4793FF] text-[#4793FF] px-6 py-2 rounded-full font-semibold hover:bg-blue-50"
              >
                {specialLink.label}
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
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
            className="lg:hidden border-t"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex justify-between w-full px-4 py-3 rounded-lg hover:bg-blue-50"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon size={22} />
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.dropdownItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={closeMenus}
                            className="block py-2 text-gray-700 hover:text-[#4793FF]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className="block px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <Link
                href={specialLink.href}
                onClick={closeMenus}
                className="block px-4 py-3 font-semibold text-[#4793FF]"
              >
                {specialLink.label}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
