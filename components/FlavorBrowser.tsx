"use client";

import { useState } from "react";
import {
  ALL_FLAVORS,
  FEATURED_FAVORITES,
  FLAVOR_CATEGORIES,
  Flavor,
} from "@/lib/flavors-data";
import { BUSINESS_INFO } from "@/lib/business-info";
import {
  Search,
  Sparkles,
  IceCream,
  Phone,
  CheckCircle2,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function FlavorBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFlavors = ALL_FLAVORS.filter((flavor) => {
    const matchesCategory =
      selectedCategory === "all" || flavor.category === selectedCategory;
    const matchesSearch =
      flavor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flavor.flavorNotes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* =========================================================================
          SECTION 1: FEATURED FAVORITES (6-10 with Real Photography & Notes)
         ========================================================================= */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
              Parlor Signatures
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
              Featured Current Favorites
            </h2>
            <p className="text-xs sm:text-sm text-farmhouse-slate/75 mt-0.5">
              Hand-churned in small batches with premium purées, roasted nuts, and pure cream.
            </p>
          </div>
          <div className="text-xs text-farmhouse-slate/70 bg-farmhouse-cream-paper px-3 py-1.5 rounded-xl border border-farmhouse-cream-border">
            <span>Dipping Cabinets Churned Weekly</span>
          </div>
        </div>

        {/* 8 Featured Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_FAVORITES.map((flavor) => (
            <div
              key={flavor.id}
              className="bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border overflow-hidden shadow-sm flex flex-col justify-between group hover:border-farmhouse-river/40 hover:shadow-card transition-all"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[4/3] bg-farmhouse-slate/10 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${flavor.imageUrl}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farmhouse-slate-dark/70 via-transparent to-transparent" />

                  {/* Expectation Label ("typically available" vs "while supplies last") */}
                  <span
                    className={`absolute top-2.5 right-2.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-sm ${
                      flavor.expectation === "typically available"
                        ? "bg-farmhouse-river/90 text-farmhouse-cream"
                        : "bg-farmhouse-rust/90 text-farmhouse-cream"
                    }`}
                  >
                    {flavor.expectation}
                  </span>

                  {flavor.dietaryTag && (
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold bg-farmhouse-slate-dark/80 text-farmhouse-cream-paper px-2 py-0.5 rounded">
                      {flavor.dietaryTag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-farmhouse-slate-dark group-hover:text-farmhouse-river transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                    {flavor.flavorNotes}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-1">
                <span className="text-[11px] font-semibold text-farmhouse-wood-warm block">
                  Category: {flavor.category.charAt(0).toUpperCase() + flavor.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: COMPLETE BROWSER & SEARCH FILTER (50+ Flavors)
         ========================================================================= */}
      <section className="space-y-6 pt-6 border-t border-farmhouse-cream-border">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-river block mb-1">
            Complete Dipping Cabinet Roster
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
            Browse All 50+ Homemade Flavors
          </h2>
          <p className="text-xs sm:text-sm text-farmhouse-slate/75 mt-0.5">
            Use the search bar or category filters below to find exactly what you love.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-farmhouse-cream-paper p-4 sm:p-5 rounded-2xl border border-farmhouse-cream-border space-y-4 shadow-sm">
          {/* Search input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-farmhouse-slate/60 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by flavor name (e.g. raspberry, peanut, pecan, mint)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-farmhouse-cream-border text-sm text-farmhouse-slate placeholder:text-farmhouse-slate/50 focus:outline-none focus:ring-2 focus:ring-farmhouse-river/50 focus:border-farmhouse-river transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-farmhouse-cream-border/70">
            {FLAVOR_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? ALL_FLAVORS.length
                  : ALL_FLAVORS.filter((f) => f.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-farmhouse-river text-farmhouse-cream shadow-sm"
                      : "bg-white text-farmhouse-slate hover:bg-farmhouse-cream border border-farmhouse-cream-border"
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Flavors Grid */}
        {filteredFlavors.length === 0 ? (
          <div className="text-center py-12 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border">
            <p className="text-farmhouse-slate text-sm font-medium">
              No flavors found matching &quot;{searchQuery}&quot;.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFlavors.map((flavor) => (
              <div
                key={flavor.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-river/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-base font-bold text-farmhouse-slate-dark">
                      {flavor.name}
                    </h3>
                    {/* Expectation label */}
                    <span
                      className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 ${
                        flavor.expectation === "typically available"
                          ? "bg-farmhouse-river/10 text-farmhouse-river border border-farmhouse-river/20"
                          : "bg-farmhouse-rust/10 text-farmhouse-rust border border-farmhouse-rust/20"
                      }`}
                    >
                      {flavor.expectation}
                    </span>
                  </div>

                  <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                    {flavor.flavorNotes}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-farmhouse-cream-border/60 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-farmhouse-wood-warm">
                    {flavor.category.charAt(0).toUpperCase() + flavor.category.slice(1)}
                  </span>
                  {flavor.dietaryTag && (
                    <span className="text-[10px] font-semibold bg-farmhouse-cream-paper px-2 py-0.5 rounded border border-farmhouse-cream-border text-farmhouse-slate-dark">
                      {flavor.dietaryTag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Expectation Disclaimer & Daily Rotation Callout */}
      <div className="p-6 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-2 text-xs text-farmhouse-slate">
          <div className="flex items-center gap-2 text-farmhouse-slate-dark font-bold text-sm">
            <Info className="w-4 h-4 text-farmhouse-river" />
            <span>Setting Expectations: Dipping Cabinet Rotation</span>
          </div>
          <p className="leading-relaxed">
            Because our ice cream is handcrafted in small batches right here on Route 611, flavors labeled <strong>&quot;typically available&quot;</strong> are scooped nearly every day, while specialty and harvest flavors marked <strong>&quot;while supplies last&quot;</strong> rotate when batches sell through.
          </p>
          <p className="leading-relaxed text-farmhouse-slate/75">
            Looking for a specific seasonal flavor? Give our parlor team a quick call to check the current dipping cabinet case!
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-xs sm:text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-farmhouse-wood-light" />
            <span>Check Current Tub: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
