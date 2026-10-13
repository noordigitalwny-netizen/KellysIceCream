import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";
import { Cake, Phone, Clock, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Ice Cream Cakes | Custom Made in Mount Bethel, PA",
  description:
    "Order custom homemade ice cream cakes from Kelly's Ice Cream. Available in 8-inch, 10-inch, and sheet sizes with rich fudge crunch centers.",
};

const CAKE_SIZES = [
  {
    name: '8" Round Cake',
    serves: "Serves 8 – 10 Guests",
    price: "$28.00",
    description: "Perfect for family birthdays and intimate dinner celebrations.",
  },
  {
    name: '10" Round Cake',
    serves: "Serves 12 – 16 Guests",
    price: "$36.00",
    description: "Our most popular size for team parties, reunions, and festive gatherings.",
  },
  {
    name: "Half-Sheet Cake",
    serves: "Serves 20 – 26 Guests",
    price: "$52.00",
    description: "Generous celebration size for large gatherings, graduations, and sports banquets.",
  },
];

export default function CakesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-farmhouse-cream-border pb-8">
        <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
          Made Fresh For Your Celebration
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-farmhouse-slate-dark">
          Homemade Ice Cream Cakes
        </h1>
        <p className="text-base text-farmhouse-slate/80 mt-2 max-w-2xl">
          Layers of your favorite homemade Kelly&apos;s ice cream separated by a decadent fudge cookie-crunch center, finished with creamy whipped frosting.
        </p>
      </div>

      {/* Sizing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CAKE_SIZES.map((cake) => (
          <div
            key={cake.name}
            className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center mb-4">
                <Cake className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">{cake.name}</h2>
              <span className="text-xs font-semibold text-farmhouse-wood-warm block mt-1">{cake.serves}</span>
              <p className="text-xs text-farmhouse-slate/70 mt-3">{cake.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-farmhouse-cream-border/60 flex justify-between items-baseline">
              <span className="text-xs text-farmhouse-slate/60">Starting at</span>
              <span className="text-xl font-bold text-farmhouse-slate-dark">{cake.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* How to Order & Lead Times */}
      <div className="bg-farmhouse-slate-dark text-farmhouse-cream rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-farmhouse-wood-light flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Ordering Guidelines</span>
          </span>
          <h2 className="font-serif text-3xl font-bold text-farmhouse-cream">
            Order in advance for your event.
          </h2>
          <p className="text-xs text-farmhouse-cream-paper/80 leading-relaxed">
            Please allow a minimum of <strong>48 to 72 hours advance notice</strong> for custom flavor pairings and personalized decorative writing so our kitchen can freeze and finish your cake properly.
          </p>
          <ul className="space-y-2 text-xs text-farmhouse-cream-paper/90">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Choose 1 or 2 ice cream flavors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Includes chocolate fudge cookie-crunch middle layer</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-farmhouse-wood-light" />
              <span>Custom greeting message piped in icing at no extra charge</span>
            </li>
          </ul>
        </div>

        <div className="bg-farmhouse-slate/50 p-6 rounded-2xl border border-farmhouse-slate/60 text-center space-y-4">
          <div className="p-3 bg-farmhouse-river/40 rounded-xl inline-block text-farmhouse-wood-light">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-farmhouse-cream">Call to Order</h3>
            <p className="text-xs text-farmhouse-cream-paper/70 mt-1">
              Speak directly with our parlor team to customize your flavors and schedule pickup.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm"
          >
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
