import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF9933] via-white to-[#138808] border" />
              <p className="font-semibold">Andhra Vikasam</p>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              A non-political student community empowering villages through
              local leadership and transparent action.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Contact</p>
            <p className="text-sm text-gray-600 mt-2">support@andhravikasam.org</p>
            <div className="flex items-center gap-3 mt-4">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border hover:bg-gray-50">
                <Instagram className="w-5 h-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full border hover:bg-gray-50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-full border hover:bg-gray-50">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Quick Links</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-2">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#join" className="hover:text-gray-900">Join Us</a></li>
              <li><a href="#report" className="hover:text-gray-900">Report a Problem</a></li>
              <li><a href="#transparency" className="hover:text-gray-900">Transparency</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Andhra Vikasam. Built with pride in Andhra Pradesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
