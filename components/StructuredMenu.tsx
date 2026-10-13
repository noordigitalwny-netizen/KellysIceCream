"use client";

import { useState } from "react";
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from "@/lib/menu-data";
import { BUSINESS_INFO } from "@/lib/business-info";
import {
  Printer,
  Search,
  IceCream,
  Milk,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
  Info,
  CheckCircle2,
  Tag,
} from "lucide-react";

export default function StructuredMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group items by subcategory for elegant structured presentation
  const subcategoryGroups = filteredItems.reduce((acc, item) => {
    if (!acc[item.subcategory]) {
      acc[item.subcategory] = [];
    }
    acc[item.subcategory].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-8">
      {/* Printable Header (Visible only when printed) */}
      <div className="hidden print:block border-b-2 border-black pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-black">
              {BUSINESS_INFO.name}
            </h1>
            <p className="text-sm font-semibold">{BUSINESS_INFO.tagline}</p>
            <p className="text-xs text-gray-700">
              {BUSINESS_INFO.address.full} • {BUSINESS_INFO.phone}
            </p>
          </div>
          <div className="text-right text-xs">
            <p className="font-bold">Official Store Menu</p>
            <p>Verified: {BUSINESS_INFO.lastMenuUpdate}</p>
            <p>Hours: 12:00 PM – 9:00 PM Daily</p>
          </div>
        </div>
      </div>

      {/* Screen Controls & Search Filter (Hidden on Print) */}
      <div className="no-print space-y-4 bg-farmhouse-cream-paper p-4 sm:p-6 rounded-2xl border border-farmhouse-cream-border shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Real-time search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-farmhouse-slate/60 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, scoops, sundaes, fries..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-farmhouse-cream-border text-sm text-farmhouse-slate placeholder:text-farmhouse-slate/50 focus:outline-none focus:ring-2 focus:ring-farmhouse-river/50 focus:border-farmhouse-river transition-all"
            />
          </div>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-farmhouse-cream text-farmhouse-slate-dark text-xs sm:text-sm font-semibold border border-farmhouse-cream-border active:scale-[0.98] transition-all shadow-sm group"
          >
            <Printer className="w-4 h-4 text-farmhouse-river group-hover:scale-110 transition-transform" />
            <span>Print Menu (Auto-Formatted)</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-farmhouse-cream-border/70">
          <button
            onClick={() => setSelectedCategory("all")}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-farmhouse-river text-farmhouse-cream shadow-sm"
                : "bg-white text-farmhouse-slate hover:bg-farmhouse-cream border border-farmhouse-cream-border"
            }`}
          >
            All Menu Items ({MENU_ITEMS.length})
          </button>
          {MENU_CATEGORIES.map((cat) => {
            const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-farmhouse-river text-farmhouse-cream shadow-sm"
                    : "bg-white text-farmhouse-slate hover:bg-farmhouse-cream border border-farmhouse-cream-border"
                }`}
              >
                {cat.id === "ice-cream" && <IceCream className="w-3.5 h-3.5" />}
                {cat.id === "creations" && <Milk className="w-3.5 h-3.5" />}
                {cat.id === "food" && <UtensilsCrossed className="w-3.5 h-3.5" />}
                {cat.id === "take-home" && <ShoppingBag className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
                <span className={`text-[11px] ${isSelected ? "text-farmhouse-cream-paper/80" : "text-farmhouse-slate/50"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Structured Items Display */}
      {Object.keys(subcategoryGroups).length === 0 ? (
        <div className="text-center py-12 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border">
          <p className="text-farmhouse-slate font-medium text-sm">
            No menu items found matching &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-3 text-xs font-semibold text-farmhouse-river hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10 print:space-y-6">
          {Object.entries(subcategoryGroups).map(([subcategory, items]) => (
            <div
              key={subcategory}
              className="space-y-4 print-break-inside-avoid"
            >
              <div className="flex items-center gap-2 pb-2 border-b-2 border-farmhouse-cream-border print:border-black">
                <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark print:text-xl print:text-black">
                  {subcategory}
                </h2>
                <span className="text-xs font-medium text-farmhouse-slate/60 print:text-black">
                  ({items.length} {items.length === 1 ? "item" : "items"})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-2xl border border-farmhouse-cream-border shadow-sm flex flex-col justify-between hover:border-farmhouse-river/40 transition-all print:p-2.5 print:border-gray-300 print:shadow-none print-break-inside-avoid"
                  >
                    <div>
                      {/* Name & Price */}
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif text-base sm:text-lg font-bold text-farmhouse-slate-dark print:text-black leading-snug">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <span className="no-print text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-farmhouse-river/10 text-farmhouse-river border border-farmhouse-river/20 flex-shrink-0">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="font-serif text-base font-bold text-farmhouse-slate-dark print:text-black whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-farmhouse-slate/80 print:text-gray-800 leading-relaxed mt-1.5">
                        {item.description}
                      </p>

                      {/* Sizes & Serving Data */}
                      {item.sizes && item.sizes.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-farmhouse-cream-border/60 print:border-gray-200">
                          <span className="text-[11px] font-semibold text-farmhouse-slate/70 print:text-black block mb-1">
                            Sizes &amp; Portions:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.sizes.map((size) => (
                              <span
                                key={size}
                                className="text-[10px] font-medium bg-farmhouse-cream-paper px-2 py-0.5 rounded-md border border-farmhouse-cream-border text-farmhouse-slate-dark print:bg-gray-100 print:border-gray-300"
                              >
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Meta row: Availability & Dietary flags */}
                    <div className="mt-3 pt-2.5 border-t border-farmhouse-cream-border/50 flex flex-wrap items-center justify-between gap-2 text-[10px]">
                      {/* Availability */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-farmhouse-river" />
                        <span className="font-medium text-farmhouse-slate/70">
                          {item.availability}
                        </span>
                      </div>

                      {/* Dietary Indicators */}
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {item.dietary.map((diet) => (
                            <span
                              key={diet}
                              className="px-2 py-0.5 rounded bg-farmhouse-slate/5 text-farmhouse-slate font-medium text-[10px] print:border print:border-gray-300"
                            >
                              {diet}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Plain-Language Cross-Contact Allergen Disclaimer (Strategic Plan requirement) */}
      <div className="p-6 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2 text-xs text-farmhouse-slate print:p-3 print:border-gray-400 print-break-inside-avoid">
        <div className="flex items-center gap-2 text-farmhouse-slate-dark font-bold text-sm">
          <Info className="w-4 h-4 text-farmhouse-rust" />
          <span>Allergen &amp; Cross-Contact Safety Disclosure</span>
        </div>
        <p className="leading-relaxed">
          At Kelly&apos;s Ice Cream, we take guest well-being seriously. However, our open parlor kitchen and dipping cases routinely handle dairy, eggs, peanuts, tree nuts, wheat (gluten), and soy. While equipment is sanitized and dedicated scoops are used for allergen requests, <strong>we cannot promise an allergen-free environment</strong> due to airborne flours and shared dipping wells.
        </p>
        <p className="leading-relaxed text-[11px] text-farmhouse-slate/75">
          Please notify our staff of any severe allergies before ordering so we can use a fresh scoop from a newly opened tub upon request.
        </p>
      </div>
    </div>
  );
}
