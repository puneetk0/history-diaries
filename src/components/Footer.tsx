
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <h3 className="font-trajan text-2xl mb-4">HISTORY DIARIES</h3>
            <p className="text-gray-300 mb-6 font-raleway">
              Bringing Social Sciences to Life Through Theatre and Innovation
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-hd-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-hd-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-hd-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-hd-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-garamond text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hd-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-hd-orange transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-hd-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-hd-orange transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-garamond text-xl mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-hd-orange" />
                <span>connect@historydiaries.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-hd-orange" />
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-hd-orange mt-1" />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} History Diaries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
