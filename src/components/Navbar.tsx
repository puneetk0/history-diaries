
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROGRAMS", path: "/programs" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-hd-orange rounded-full flex items-center justify-center shadow-sm">
            <BookOpen className="text-white" size={20} />
          </div>
          <span className="font-garamond font-normal text-xl md:text-2xl tracking-wider text-[#fff]">
            HISTORY DIARIES
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-raleway text-base font-normal tracking-wide transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-hd-orange"
                    : "text-[#fff] hover:text-hd-orange"
                } hover:opacity-80`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none z-50"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-raleway text-xl py-5 font-normal tracking-wider ${
                    location.pathname === link.path
                      ? "text-hd-orange"
                      : "text-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
