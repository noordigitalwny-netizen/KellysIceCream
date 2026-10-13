"use client";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/business-info";
import { UtensilsCrossed, Navigation, PhoneCall } from "lucide-react";

export default function MobileUtilityBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#FAF7F0]/95 backdrop-blur-md border-t border-farmhouse-cream-border/90 shadow-[0_-4px_12px_rgba(47,87,72,0.08)] pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5 transition-transform"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-1 px-3">
        {/* Menu Action */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-farmhouse-slate hover:text-farmhouse-river active:bg-farmhouse-cream-paper transition-colors group"
        >
          <div className="p-1.5 rounded-lg group-hover:bg-farmhouse-river/10 transition-colors">
            <UtensilsCrossed className="w-5 h-5 text-farmhouse-river" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight mt-0.5 text-farmhouse-slate-dark">
            Menu
          </span>
        </Link>

        {/* Directions Action */}
        <a
          href={BUSINESS_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-farmhouse-slate hover:text-farmhouse-river active:bg-farmhouse-cream-paper transition-colors group"
        >
          <div className="p-1.5 rounded-lg group-hover:bg-farmhouse-wood/20 transition-colors">
            <Navigation className="w-5 h-5 text-farmhouse-wood-warm" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight mt-0.5 text-farmhouse-slate-dark">
            Directions
          </span>
        </a>

        {/* Call Action */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-farmhouse-slate hover:text-farmhouse-river active:bg-farmhouse-cream-paper transition-colors group"
        >
          <div className="p-1.5 rounded-lg group-hover:bg-farmhouse-rust/10 transition-colors">
            <PhoneCall className="w-5 h-5 text-farmhouse-rust" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight mt-0.5 text-farmhouse-slate-dark">
            Call
          </span>
        </a>
      </div>
    </aside>
  );
}
