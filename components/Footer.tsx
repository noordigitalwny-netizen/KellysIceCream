import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/business-info";
import { MapPin, Phone, Clock, Compass, ShieldCheck, Heart, Sparkles, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-farmhouse-slate-dark text-farmhouse-cream-light border-t border-farmhouse-slate/40 pb-24 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-farmhouse-slate/30">
          {/* Col 1: Brand & Local Mission */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-bold tracking-tight text-farmhouse-cream">
                Kelly&apos;s
              </span>
              <p className="text-xs tracking-wider uppercase font-semibold text-farmhouse-wood-warm">
                Ice Cream • Homemade on Route 611
              </p>
            </div>
            <p className="text-sm text-farmhouse-cream-paper/80 leading-relaxed">
              Homemade here. Worth the stop. Handcrafting over 50 flavors of hard ice cream, rich sundaes, and classic grill favorites for local families and Delaware River adventurers.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-farmhouse-slate flex items-center justify-center text-farmhouse-cream hover:bg-farmhouse-river hover:text-white transition-colors"
                aria-label="Kelly's Ice Cream on Facebook"
              >
                <span className="text-xs font-bold">fb</span>
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-farmhouse-slate flex items-center justify-center text-farmhouse-cream hover:bg-farmhouse-river hover:text-white transition-colors"
                aria-label="Kelly's Ice Cream on Instagram"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <span className="text-xs text-farmhouse-cream-paper/50 pl-1">
                @kellysicecreampa
              </span>
            </div>
          </div>

          {/* Col 2: Hours & Status */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-farmhouse-cream flex items-center gap-2">
              <Clock className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Current Hours</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {BUSINESS_INFO.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between items-center py-1 border-b border-farmhouse-slate/20 text-farmhouse-cream-paper/85"
                >
                  <span className="font-medium text-farmhouse-cream">{h.day}</span>
                  <span>{h.openTime} – {h.closeTime}</span>
                </li>
              ))}
            </ul>
            <div className="bg-farmhouse-river/30 rounded-xl p-3 border border-farmhouse-river/40 text-xs text-farmhouse-cream-paper/90">
              <span className="font-semibold text-farmhouse-wood-light block">Seasonal Kitchen Notice:</span>
              Grill & hot food service closes 30 minutes prior to parlor closing.
            </div>
          </div>

          {/* Col 3: Location & Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-farmhouse-cream flex items-center gap-2">
              <MapPin className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Find Us on Route 611</span>
            </h3>
            <div className="space-y-2 text-sm text-farmhouse-cream-paper/85">
              <p className="font-semibold text-farmhouse-cream">
                {BUSINESS_INFO.address.street}
              </p>
              <p>
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
              </p>
              <p className="text-xs text-farmhouse-cream-paper/60 pt-1">
                Between Portland and Martins Creek, minutes from the Delaware Water Gap National Recreation Area.
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-farmhouse-wood-light hover:text-farmhouse-cream transition-colors"
              >
                <span>Get Turn-by-Turn Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="block">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-farmhouse-cream hover:text-farmhouse-wood-light transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-farmhouse-wood-light" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links & Last Verified Stamp */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-farmhouse-cream flex items-center gap-2">
              <Compass className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Quick Navigation</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {BUSINESS_INFO.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-farmhouse-cream-paper/75 hover:text-farmhouse-cream transition-colors hover:underline underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Menu verification stamp */}
            <div className="pt-3">
              <div className="p-3 bg-farmhouse-slate/40 rounded-xl border border-farmhouse-slate/50">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-farmhouse-wood-warm">
                  <Sparkles className="w-3 h-3 text-farmhouse-wood-light" />
                  <span>Freshness & Accuracy</span>
                </div>
                <p className="text-xs text-farmhouse-cream-paper/75 mt-1">
                  Menu & seasonal flavors verified:
                </p>
                <p className="text-xs font-bold text-farmhouse-cream mt-0.5">
                  {BUSINESS_INFO.lastMenuUpdate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Accessibility Statement, Legal & Credits */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-farmhouse-cream-paper/60">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-farmhouse-cream underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-farmhouse-cream underline underline-offset-2 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-farmhouse-wood-light" />
              <span>Accessibility Statement (WCAG 2.2 AA)</span>
            </Link>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-farmhouse-cream-paper/50">
            <span>Proudly serving Pennsylvania&apos;s Slate Belt & River Country</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
