
import { Anchor, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border-900 px-6 py-16 text-foreground-400">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6 flex items-center gap-2 text-foreground">
            <Anchor className="h-8 w-8 text-foreground-500" />
            <span className="font-display text-2xl font-bold uppercase tracking-widest">Leviathan</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            Leviathan Marine Park is a world leader in ocean conservation, education, and immersive entertainment. We are dedicated to preserving the wonders of the deep for future generations.
          </p>
        </div>
        
        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">Visit</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-foreground-400">Tickets & Passes</a></li>
            <li><a href="#" className="hover:text-foreground-400">Daily Schedule</a></li>
            <li><a href="#" className="hover:text-foreground-400">Directions & Parking</a></li>
            <li><a href="#" className="hover:text-foreground-400">Accessibility</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-foreground-400">About Us</a></li>
            <li><a href="#" className="hover:text-foreground-400">Conservation Impact</a></li>
            <li><a href="#" className="hover:text-foreground-400">Careers</a></li>
            <li><a href="#" className="hover:text-foreground-400">Press Room</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-border-900 pt-8 md:flex-row">
        <p className="text-xs">© 2025 Leviathan Marine Park. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-foreground-400 hover:text-foreground"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="text-foreground-400 hover:text-foreground"><Twitter className="h-5 w-5" /></a>
          <a href="#" className="text-foreground-400 hover:text-foreground"><Facebook className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
