import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/business-info";
import { Sparkles, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Handcrafted Ice Cream in Mount Bethel, PA",
  description:
    "Learn the story of Kelly's Ice Cream in Mount Bethel, PA. How we make over 50 flavors of hard ice cream on-site and serve generations of families along Route 611.",
};

export default function StoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-farmhouse-cream-border pb-8 text-center sm:text-left">
        <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-river block mb-1">
          Rooted in Mount Bethel, PA
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-farmhouse-slate-dark">
          Homemade here. Worth the stop.
        </h1>
        <p className="text-base text-farmhouse-slate/80 mt-2">
          From the beginning, Kelly&apos;s was founded on a simple promise: make real ice cream on-site, serve hot food with pride, and treat every customer like a neighbor.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="space-y-8 text-farmhouse-slate leading-relaxed text-base">
        <section className="bg-farmhouse-cream-paper p-8 rounded-3xl border border-farmhouse-cream-border space-y-4">
          <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">
            Why Making It Here Matters
          </h2>
          <p>
            In a world of factory-churned tubs shipped across state lines, making hard ice cream on-site is a labor of love. It means arriving early in the morning to prepare the batch freezer, selecting real fruits, premium chocolates, and freshly roasted nuts, and folding in toppings by hand.
          </p>
          <p>
            When ice cream is crafted on-site, the overrun (air content) is tightly controlled. The result is a richer, denser, creamier scoop that holds its texture on a hot summer afternoon along the Delaware River.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">
            A Landmark on Route 611
          </h2>
          <p>
            Over the years, Kelly&apos;s has evolved into much more than an ice cream parlor. We are the gathering spot for local Little League teams celebrating victories, the meeting point for grandparents treating their grandkids to a double scoop, and the reward stop for hikers descending Mount Minsi.
          </p>
          <p>
            Whether you&apos;re stopping by for a cheeseburger on your lunch break or ordering a custom ice cream cake for a milestone birthday, we are honored to be part of your family&apos;s memories.
          </p>
        </section>

        {/* Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-5 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2">
            <span className="font-serif text-lg font-bold text-farmhouse-river block">50+ Flavors</span>
            <p className="text-xs text-farmhouse-slate/75">
              Dedicated small batches ensure both nostalgic classics and innovative seasonal specials are always ready to scoop.
            </p>
          </div>
          <div className="p-5 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2">
            <span className="font-serif text-lg font-bold text-farmhouse-wood-dark block">Fresh Grill</span>
            <p className="text-xs text-farmhouse-slate/75">
              Juicy burgers, crispy tenders, and toasted paninis cooked fresh for lunch and dinner on the go.
            </p>
          </div>
          <div className="p-5 bg-farmhouse-cream-paper rounded-2xl border border-farmhouse-cream-border space-y-2">
            <span className="font-serif text-lg font-bold text-farmhouse-rust block">Warm Community</span>
            <p className="text-xs text-farmhouse-slate/75">
              Welcoming local staff, honest hospitality, and shaded outdoor seating for every visitor.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-farmhouse-cream-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-lg font-bold text-farmhouse-slate-dark">Come visit us today</p>
            <p className="text-xs text-farmhouse-slate/75">{BUSINESS_INFO.address.full}</p>
          </div>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm"
          >
            <span>Plan Your Stop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
