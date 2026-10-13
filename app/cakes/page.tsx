import type { Metadata } from "next";
import CakeInquiryFunnel from "@/components/CakeInquiryFunnel";
import { BUSINESS_INFO } from "@/lib/business-info";
import { Cake, Phone, Clock, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Homemade Ice Cream Cakes | Custom Orders & Sizing Guide",
  description:
    "Order custom homemade ice cream cakes from Kelly's Ice Cream in Mount Bethel, PA. 8-inch, 10-inch, and half-sheet sizes with signature chocolate fudge cookie-crunch centers.",
};

export default function CakesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Page Header */}
      <div className="border-b border-farmhouse-cream-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
            Made On-Site in Mount Bethel
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-farmhouse-slate-dark tracking-tight">
            Celebrate with a Kelly&apos;s Cake
          </h1>
          <p className="text-sm sm:text-base text-farmhouse-slate/80 mt-1 max-w-2xl leading-relaxed">
            Double layers of your favorite homemade hard ice cream with our signature chocolate fudge cookie-crunch center, finished in hand-piped whipped frosting.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="px-3.5 py-2 bg-farmhouse-cream-paper rounded-xl border border-farmhouse-cream-border text-farmhouse-slate">
            <span className="font-semibold text-farmhouse-river block">Standard Lead Time</span>
            <span>48 to 72 hours advance notice</span>
          </div>
          <div className="px-3.5 py-2 bg-farmhouse-cream-paper rounded-xl border border-farmhouse-cream-border text-farmhouse-slate">
            <span className="font-semibold text-farmhouse-river block">Staff Follow-Up</span>
            <span>Phone confirmation within 24h</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Funnel Component */}
      <CakeInquiryFunnel />

      {/* FAQ & Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-farmhouse-cream-border">
        <div className="p-6 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2">
          <div className="flex items-center gap-2 text-farmhouse-slate-dark font-serif text-lg font-bold">
            <Clock className="w-5 h-5 text-farmhouse-wood-warm" />
            <span>Lead Times &amp; Rush Orders</span>
          </div>
          <p className="text-xs text-farmhouse-slate/80 leading-relaxed">
            Custom flavor pairings and hand-piped inscriptions require 48 to 72 hours so the kitchen can freeze and set the layers. If you need a cake today, call us directly at {BUSINESS_INFO.phone} to check pre-made cakes in our freezer case!
          </p>
        </div>

        <div className="p-6 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2">
          <div className="flex items-center gap-2 text-farmhouse-slate-dark font-serif text-lg font-bold">
            <ShieldCheck className="w-5 h-5 text-farmhouse-river" />
            <span>Deposits &amp; Confirmations</span>
          </div>
          <p className="text-xs text-farmhouse-slate/80 leading-relaxed">
            To ensure zero mix-ups, we do not process instant online payments. A staff member will speak with you directly to verify the inscription spelling and collect your phone deposit.
          </p>
        </div>

        <div className="p-6 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2">
          <div className="flex items-center gap-2 text-farmhouse-slate-dark font-serif text-lg font-bold">
            <Heart className="w-5 h-5 text-farmhouse-rust" />
            <span>Travel &amp; Storage Tips</span>
          </div>
          <p className="text-xs text-farmhouse-slate/80 leading-relaxed">
            All cakes are packed in sturdy insulated boxes. We recommend bringing a cooler or towel for trips longer than 20 minutes, especially during summer river days.
          </p>
        </div>
      </div>
    </div>
  );
}
