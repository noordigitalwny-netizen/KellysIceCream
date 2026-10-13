import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";
import StructuredMenu from "@/components/StructuredMenu";
import { UtensilsCrossed, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Structured Live Menu & Pricing | Food, Scoops & Sundaes",
  description:
    "Authoritative live menu for Kelly's Ice Cream in Mount Bethel, PA. 50+ homemade hard flavors, soft serve, burgers, sandwiches, sundaes, shakes, and take-home packs.",
};

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 print:p-0 print:m-0">
      {/* Page Header (No-Print) */}
      <div className="no-print border-b border-farmhouse-cream-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
            Authoritative Live Menu
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-farmhouse-slate-dark tracking-tight">
            More than a cone.
          </h1>
          <p className="text-sm sm:text-base text-farmhouse-slate/80 mt-1 max-w-2xl leading-relaxed">
            Fresh burgers, hot sandwiches, thick hand-spun milkshakes, loaded sundaes, and 50+ homemade hard ice cream flavors made on-site.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="px-3.5 py-2 bg-farmhouse-cream-paper rounded-xl border border-farmhouse-cream-border text-farmhouse-slate">
            <span className="font-semibold text-farmhouse-river block">Verified Pricing</span>
            <span>Last reviewed: {BUSINESS_INFO.lastMenuUpdate}</span>
          </div>
          <div className="px-3.5 py-2 bg-farmhouse-cream-paper rounded-xl border border-farmhouse-cream-border text-farmhouse-slate">
            <span className="font-semibold text-farmhouse-river block">Grill Notice</span>
            <span>Hot food closes 30m before parlor</span>
          </div>
        </div>
      </div>

      {/* Main Structured Menu Component */}
      <StructuredMenu />
    </div>
  );
}
