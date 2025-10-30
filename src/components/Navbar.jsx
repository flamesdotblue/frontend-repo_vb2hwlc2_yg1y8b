import { Home, Info, UserPlus, FolderOpen, Shield, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: Info },
    { href: "#join", label: "Join", icon: UserPlus },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#transparency", label: "Transparency", icon: Shield },
    { href: "#contact", label: "Contact", icon: Phone },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF9933] via-white to-[#138808] border" />
          <div className="leading-tight">
            <p className="font-bold text-gray-900">Andhra Vikasam</p>
            <p className="text-xs text-gray-500 -mt-0.5">Youth for Real Change</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 inline-flex items-center gap-2 transition"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-1">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-gray-700 hover:bg-gray-50 inline-flex items-center gap-3"
              >
                <Icon className="w-5 h-5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
