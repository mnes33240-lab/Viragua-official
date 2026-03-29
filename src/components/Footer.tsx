export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-gray-600 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-xl text-gray-300">VIRÁGUA</div>
        <div className="flex gap-8 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <div className="text-xs font-light">
          &copy; 2025 VIRÁGUA INC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
