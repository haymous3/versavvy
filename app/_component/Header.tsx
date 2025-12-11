"use client";

import {useState} from "react";
import Link from "next/link";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {motion, AnimatePresence} from "framer-motion";
import Button from "./Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <div className="flex items-center gap-4">
          {/* <h2 className="border-r-2 pr-3 text-lg font-bold text-gray-800">
            Logo
          </h2> */}
          <img src="/dark_logo.png" alt="logo" className="h-20 w-20" />

          <ul className="hidden md:flex gap-6">
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/about_us">About</Link>
            </li>
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/services">Services</Link>
            </li>
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/contact_us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Button
            className="px-5 py-3 text-[1rem]"
            href="/contact_us"
            variant="primary"
          >
            GET STARTED
          </Button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-800"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{height: 0, opacity: 0}}
              animate={{height: "auto", opacity: 1}}
              exit={{height: 0, opacity: 0}}
              transition={{duration: 0.3, ease: "easeInOut"}}
              className="md:hidden bg-white shadow-lg overflow-hidden z-50 relative"
            >
              <ul className="flex flex-col gap-4 px-6 py-5 border-t">
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/about_us" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/services" onClick={() => setMenuOpen(false)}>
                    Services
                  </Link>
                </li>
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/contact_us" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>

                <Button
                  className="mt-2 px-5 py-3 text-[1rem]"
                  href="/contact_us"
                  variant="primary"
                >
                  GET STARTED
                </Button>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
