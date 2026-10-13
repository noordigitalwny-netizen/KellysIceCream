import type { Metadata } from "next";
import { IceCream, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "50+ Hard Ice Cream Flavors | Made On-Site",
  description:
    "Browse over 50 flavors of hard ice cream made on-site at Kelly's Ice Cream in Mount Bethel, PA. Local favorites, seasonal rotations, and dietary options.",
};

const FLAVOR_CATEGORIES = [
  {
    category: "Local Signatures & Fruit",
    description: "Beloved Pennsylvania and Slate Belt parlor classics made with real fruit purées.",
    flavors: [
      "Black Raspberry (Local Favorite)",
      "Pennsylvania Dutch Apple Pie",
      "Fresh Strawberry",
      "Peach Cobbler",
      "Cherry Vanilla",
      "Blueberry Cheesecake",
      "Banana Pudding",
      "Coconut Cream Pie",
    ],
  },
  {
    category: "Chocolate & Decadence",
    description: "Rich cocoa bases folded with artisan fudges, brownies, and chips.",
    flavors: [
      "Dutch Dark Chocolate",
      "Chocolate Fudge Brownie",
      "Moose Tracks",
      "Midnight Mudslide",
      "Chocolate Marshmallow",
      "German Chocolate Cake",
      "Cookies & Cream",
      "Chocolate Chip Cookie Dough",
    ],
  },
  {
    category: "Peanut Butter & Nuts",
    description: "Loaded with freshly roasted nuts, praline swirls, and creamy peanut butter cups.",
    flavors: [
      "Peanut Butter Ripple",
      "Butter Pecan",
      "Buckeye Blast",
      "Pistachio Nut",
      "Maple Walnut",
      "Caramel Cashew",
      "Toffee Crunch",
      "Peanut Butter Cup",
    ],
  },
  {
    category: "Parlor Classics & Cream",
    description: "Timeless flavors churned with pure cream and Madagascar vanilla.",
    flavors: [
      "Old-Fashioned Vanilla",
      "French Vanilla Bean",
      "Mint Chocolate Chip",
      "Coffee Bean",
      "Espresso Chip",
      "Cotton Candy",
      "Birthday Cake Confetti",
      "Rum Raisin",
      "Orange Creamsicle",
    ],
  },
  {
    category: "Dietary, Yogurt & No-Sugar-Added",
    description: "Options crafted for varying dietary preferences.",
    flavors: [
      "No Sugar Added Butter Pecan",
      "No Sugar Added Vanilla Raspberry Swirl",
      "Non-Dairy Raspberry Sorbet",
      "Non-Dairy Lemon Sorbet",
      "Low-Fat Vanilla Yogurt",
    ],
  },
];

export default function FlavorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-farmhouse-cream-border pb-8">
        <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-river block mb-1">
          Made In Small Batches In Mount Bethel
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-farmhouse-slate-dark">
          50+ Homemade Flavors
        </h1>
        <p className="text-base text-farmhouse-slate/80 mt-2 max-w-2xl">
          Every flavor is churned on-site. Dipping cabinets rotate daily with seasonal batches, traditional family staples, and rich creations.
        </p>
      </div>

      {/* Flavor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FLAVOR_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <IceCream className="w-4 h-4 text-farmhouse-river" />
                <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                  {cat.category}
                </h2>
              </div>
              <p className="text-xs text-farmhouse-slate/70 mb-4">{cat.description}</p>
              <ul className="space-y-2 text-sm">
                {cat.flavors.map((flavor) => (
                  <li
                    key={flavor}
                    className="flex items-center gap-2 py-1 border-b border-farmhouse-cream-border/40 text-farmhouse-slate"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-farmhouse-wood flex-shrink-0" />
                    <span>{flavor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Rotation Notice */}
      <div className="p-6 bg-farmhouse-river/10 border border-farmhouse-river/20 rounded-2xl flex items-start gap-4">
        <Sparkles className="w-5 h-5 text-farmhouse-river flex-shrink-0 mt-0.5" />
        <div className="text-xs text-farmhouse-slate space-y-1">
          <p className="font-semibold text-farmhouse-slate-dark">Flavor Availability Note:</p>
          <p>
            Because we make our ice cream in small batches directly on Route 611, select seasonal and specialty flavors are subject to daily parlor rotation. Feel free to call us at (570) 897-6212 to confirm current dipping cabinet batches!
          </p>
        </div>
      </div>
    </div>
  );
}
