import type { Metadata } from "next";
import FlavorBrowser from "@/components/FlavorBrowser";
import { BUSINESS_INFO } from "@/lib/business-info";

export const metadata: Metadata = {
  title: "50+ Hard Ice Cream Flavors | Flavor Browser & Featured Scoops",
  description:
    "Explore over 50 homemade hard ice cream flavors churned on-site at Kelly's Ice Cream in Mount Bethel, PA. Filter by chocolate, fruit, nut, coffee, classics, and dietary options.",
};

export default function FlavorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Page Header */}
      <div className="border-b border-farmhouse-cream-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-river block mb-1">
            Made In Small Batches In Mount Bethel
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-farmhouse-slate-dark tracking-tight">
            50+ Homemade Flavors
          </h1>
          <p className="text-sm sm:text-base text-farmhouse-slate/80 mt-1 max-w-2xl leading-relaxed">
            Every flavor is churned on-site on Route 611. Traditional family staples, regional berry favorites, and seasonal harvests dipped fresh.
          </p>
        </div>

        <div className="text-xs text-farmhouse-slate bg-farmhouse-cream-paper px-4 py-2.5 rounded-xl border border-farmhouse-cream-border">
          <span className="font-semibold text-farmhouse-river block">Pints &amp; Quarts Available</span>
          <span>Take any flavor home in a hand-packed container</span>
        </div>
      </div>

      {/* Main Interactive Flavor Browser */}
      <FlavorBrowser />
    </div>
  );
}
