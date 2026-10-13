import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";
import { UtensilsCrossed, IceCream, Milk, Sparkles, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu & Pricing | Food, Ice Cream & Treats",
  description:
    "Explore the full menu at Kelly's Ice Cream in Mount Bethel, PA. Fresh burgers, hot dogs, sandwiches, sundaes, shakes, and 50+ hard ice cream flavors.",
};

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-farmhouse-cream-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
            Authoritative Food & Ice Cream Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-farmhouse-slate-dark">
            More than a cone.
          </h1>
          <p className="text-base text-farmhouse-slate/80 mt-2 max-w-2xl">
            Lunch, dinner, shakes, loaded sundaes, and 50+ homemade hard ice cream flavors. All food is cooked to order; parlor ice cream is scooped fresh.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-farmhouse-slate">
          <div className="p-3 bg-farmhouse-cream-paper rounded-xl border border-farmhouse-cream-border">
            <span className="font-semibold block text-farmhouse-river">Verified Menu Pricing</span>
            <span>Last reviewed: {BUSINESS_INFO.lastMenuUpdate}</span>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category 1: Food & Grill */}
        <div id="food" className="bg-farmhouse-cream-paper p-8 rounded-2xl border border-farmhouse-cream-border space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-farmhouse-cream-border">
            <div className="p-2.5 rounded-xl bg-farmhouse-rust/10 text-farmhouse-rust">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">Grill & Kitchen</h2>
              <span className="text-xs text-farmhouse-slate/60">Made hot to order</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Classic Cheeseburger</h3>
                <p className="text-xs text-farmhouse-slate/70">Fresh beef patty, American cheese, lettuce, tomato, pickles</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$6.75</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Bacon Double Burger</h3>
                <p className="text-xs text-farmhouse-slate/70">Two patties, smoked bacon, double cheese on toasted brioche</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$8.95</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Nathan&apos;s Jumbo Hot Dog</h3>
                <p className="text-xs text-farmhouse-slate/70">All-beef frank, grilled bun. Chili & cheese available</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$4.25</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Crispy Chicken Tenders & Fries</h3>
                <p className="text-xs text-farmhouse-slate/70">Golden tenders served with seasoned crinkle-cut fries</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$9.25</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Toasted Turkey Bacon Panini</h3>
                <p className="text-xs text-farmhouse-slate/70">Sliced turkey breast, bacon, provolone, herb mayo</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$8.50</span>
            </div>

            <div className="flex justify-between items-baseline pb-1">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Crinkle-Cut Golden Fries</h3>
                <p className="text-xs text-farmhouse-slate/70">Crispy salted fries. Regular or Large</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$3.75+</span>
            </div>
          </div>
        </div>

        {/* Category 2: Ice Cream & Cones */}
        <div id="icecream" className="bg-farmhouse-cream-paper p-8 rounded-2xl border border-farmhouse-cream-border space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-farmhouse-cream-border">
            <div className="p-2.5 rounded-xl bg-farmhouse-river/10 text-farmhouse-river">
              <IceCream className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">Cones & Dishes</h2>
              <span className="text-xs text-farmhouse-slate/60">50+ Homemade hard flavors</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Single Scoop</h3>
                <p className="text-xs text-farmhouse-slate/70">Cake cone, sugar cone, or dish</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$4.25</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Double Scoop</h3>
                <p className="text-xs text-farmhouse-slate/70">Mix or match any two homemade flavors</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$5.75</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Waffle Cone / Bowl</h3>
                <p className="text-xs text-farmhouse-slate/70">Freshly pressed waffle cone</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">+$1.25</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Creamy Soft Serve</h3>
                <p className="text-xs text-farmhouse-slate/70">Vanilla, Chocolate, or Twist</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$3.75+</span>
            </div>

            <div className="flex justify-between items-baseline pb-1">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Hand-Packed Pints & Quarts</h3>
                <p className="text-xs text-farmhouse-slate/70">Take your favorite flavors home</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$7.50+</span>
            </div>
          </div>
        </div>

        {/* Category 3: Sundaes, Shakes & Creations */}
        <div id="creations" className="bg-farmhouse-cream-paper p-8 rounded-2xl border border-farmhouse-cream-border space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-farmhouse-cream-border">
            <div className="p-2.5 rounded-xl bg-farmhouse-wood/20 text-farmhouse-wood-dark">
              <Milk className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">Specialty Creations</h2>
              <span className="text-xs text-farmhouse-slate/60">Handcrafted desserts</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Kelly&apos;s Classic Hot Fudge Sundae</h3>
                <p className="text-xs text-farmhouse-slate/70">Warm fudge, whipped cream, crushed nuts, cherry</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$6.95</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Famous Banana Split</h3>
                <p className="text-xs text-farmhouse-slate/70">3 scoops, split ripe banana, strawberry, pineapple, chocolate</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$8.50</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Thick Hand-Spun Milkshake</h3>
                <p className="text-xs text-farmhouse-slate/70">Any ice cream flavor blended with local whole milk</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$6.50</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/50 pb-2">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Root Beer Float</h3>
                <p className="text-xs text-farmhouse-slate/70">Draft root beer poured over double vanilla scoop</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$5.50</span>
            </div>

            <div className="flex justify-between items-baseline pb-1">
              <div>
                <h3 className="font-medium text-farmhouse-slate-dark text-sm">Ice Cream Flurry</h3>
                <p className="text-xs text-farmhouse-slate/70">Soft serve blended with Oreos, Reese&apos;s, or M&amp;Ms</p>
              </div>
              <span className="text-sm font-semibold text-farmhouse-slate-dark ml-4">$6.25</span>
            </div>
          </div>
        </div>
      </div>

      {/* Allergen & Dietary Note */}
      <div className="p-6 bg-farmhouse-cream-paper/70 rounded-2xl border border-farmhouse-cream-border text-xs text-farmhouse-slate/80 space-y-1">
        <p className="font-semibold text-farmhouse-slate-dark">Allergen & Cross-Contact Disclosure:</p>
        <p>
          Our kitchen and parlor handle dairy, nuts, peanuts, wheat, eggs, and soy. While equipment is sanitized regularly, we cannot guarantee an allergen-free environment. Please notify our staff of any severe allergies before ordering.
        </p>
      </div>
    </div>
  );
}
