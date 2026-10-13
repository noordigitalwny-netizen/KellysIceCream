"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/business-info";
import StatusBadge from "./StatusBadge";
import { Menu as MenuIcon, X, MapPin, Phone, IceCream } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F0]/95 backdrop-blur-md border-b border-farmhouse-cream-border/70 transition-all">
      {/* Top micro-utility bar */}
      <div className="hidden sm:block bg-farmhouse-river text-farmhouse-cream-light text-xs font-medium py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-farmhouse-wood-light" />
              <span>Route 611 • Mount Bethel, PA</span>
            </span>
            <span className="text-farmhouse-river-light">•</span>
            <span className="text-farmhouse-cream-paper/85">50+ Hard Flavors Made On-Site</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hover:text-farmhouse-wood-light transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-farmhouse-wood-light" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-farmhouse-wood/60 underline-offset-2 hover:text-farmhouse-wood-light transition-colors"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-farmhouse-river rounded-lg p-1"
            >
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-farmhouse-river/10 text-farmhouse-river group-hover:bg-farmhouse-river group-hover:text-farmhouse-cream transition-colors">
                  <IceCream className="w-4 h-4" />
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-farmhouse-slate-dark group-hover:text-farmhouse-river transition-colors">
                  Kelly&apos;s
                </span>
              </div>
              <span className="text-[11px] tracking-wider uppercase font-semibold text-farmhouse-slate/75 -mt-1 pl-10">
                Ice Cream • Mount Bethel
              </span>
            </Link>

            {/* Desktop Status Badge */}
            <div className="hidden lg:flex items-center ml-2">
              <StatusBadge showHours={true} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {BUSINESS_INFO.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-farmhouse-slate hover:text-farmhouse-river hover:bg-farmhouse-cream-paper transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-farmhouse-river text-farmhouse-cream text-sm font-semibold tracking-wide hover:bg-farmhouse-river-hover active:scale-[0.98] transition-all shadow-sm"
            >
              <MapPin className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Visit Route 611</span>
            </a>
          </div>

          {/* Mobile Status + Hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <StatusBadge showHours={false} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-farmhouse-slate hover:bg-farmhouse-cream-paper border border-farmhouse-cream-border focus:outline-none focus:ring-2 focus:ring-farmhouse-river"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-farmhouse-cream-border bg-[#FAF7F0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {BUSINESS_INFO.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-farmhouse-slate hover:text-farmhouse-river hover:bg-farmhouse-cream transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-farmhouse-cream-border/70 space-y-2">
            <div className="px-4 py-2 bg-farmhouse-cream-paper rounded-xl border border-farmhouse-cream-border text-xs text-farmhouse-slate">
              <span className="font-semibold text-farmhouse-river block mb-0.5">Today&apos;s Store Hours:</span>
              <span>12:00 PM – 9:00 PM • 3416 S Delaware Dr, Mount Bethel, PA</span>
            </div>
            <a
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-farmhouse-river text-farmhouse-cream text-sm font-semibold shadow-sm"
            >
              <MapPin className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Launch Directions (Route 611)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
