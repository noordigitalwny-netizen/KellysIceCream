import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Mountain, Car, Landmark, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore the Area | Delaware River, Water Gap & Slate Belt Itineraries",
  description:
    "Curated day-trip itineraries near Mount Bethel, PA. Pair your trip to the Delaware Water Gap, scenic Route 611, and the Slate Belt with a stop at Kelly's Ice Cream.",
};

const ITINERARIES = [
  {
    id: "river",
    title: "River Day + Cool-Down",
    target: "Paddlers, kayakers, anglers & river-tubing families",
    duration: "Half-day to Full-day",
    highlight: "Middle Delaware National Scenic River",
    summary:
      "Spend the afternoon exploring the gentle rapids and secluded gravel bars of the Delaware River. Wrap up with fresh burgers and a cool double-scoop cone at Kelly's.",
    kellysStop: "Post-river lunch or evening dessert stop right off Route 611.",
    officialLink: "https://www.nps.gov/dewa/planyourvisit/river-trips.htm",
    linkText: "National Park Service River Safety & Boat Access",
    icon: Waves,
    accentColor: "text-farmhouse-river",
    bgColor: "bg-farmhouse-river/10",
  },
  {
    id: "trail",
    title: "Trail Day + Reward Scoop",
    target: "Hikers, Appalachian Trail day-hikers & nature lovers",
    duration: "2 to 5 hours",
    highlight: "Mount Minsi & Delaware Water Gap Overlooks",
    summary:
      "Climb to panoramic vistas overlooking Mt. Tammany and the river valley. When your trek is complete, reward your hiking crew with a cold sundae or thick milkshake.",
    kellysStop: "The celebratory end-of-hike treat just 10 minutes south of the Gap.",
    officialLink: "https://www.nps.gov/dewa/planyourvisit/hiking.htm",
    linkText: "NPS Delaware Water Gap Trail Conditions",
    icon: Mountain,
    accentColor: "text-farmhouse-wood-dark",
    bgColor: "bg-farmhouse-wood/20",
  },
  {
    id: "drive",
    title: "Route 611 Scenic Byway Drive",
    target: "Sunday drivers, leaf peepers & motorcycle tours",
    duration: "Full-day scenic loop",
    highlight: "Delaware River Valley Scenic Byway",
    summary:
      "Cruise Pennsylvania Route 611 as it winds between limestone cliffs and river bends. Stop by local farm stands and take in historic stone farmhouses.",
    kellysStop: "The roadside landmark destination along Route 611 in Mount Bethel.",
    officialLink: "https://www.discoverlehighvalley.com/",
    linkText: "Discover Lehigh Valley Scenic Routes",
    icon: Car,
    accentColor: "text-farmhouse-rust",
    bgColor: "bg-farmhouse-rust/10",
  },
  {
    id: "slate",
    title: "Slate Belt History & Local Flavor",
    target: "Heritage enthusiasts & antique hunters",
    duration: "Half-day",
    highlight: "Bangor, Portland & Lower Mount Bethel Heritage",
    summary:
      "Explore the historic slate quarries, preserved downtowns, and countryside markets of the Slate Belt corridor.",
    kellysStop: "An authentic, locally owned gathering spot beloved by generations.",
    officialLink: "https://www.slatebeltchamber.org/",
    linkText: "Slate Belt Chamber of Commerce Directory",
    icon: Landmark,
    accentColor: "text-farmhouse-slate-dark",
    bgColor: "bg-farmhouse-slate/10",
  },
];

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-farmhouse-cream-border pb-8">
        <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
          Make a Day of It
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-farmhouse-slate-dark">
          Explore the River & Slate Belt
        </h1>
        <p className="text-base text-farmhouse-slate/80 mt-2 max-w-2xl">
          Kelly&apos;s sits at the crossroads of the Delaware River recreation corridor, the Appalachian Trail, and historic Pennsylvania slate towns. Build an authentic day trip with these itineraries.
        </p>
      </div>

      {/* Itinerary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ITINERARIES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              id={item.id}
              className="bg-farmhouse-cream-paper p-8 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">
                      {item.title}
                    </h2>
                    <span className="text-xs font-medium text-farmhouse-wood-warm block">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-farmhouse-slate/70 space-y-1 bg-white/70 p-3 rounded-xl border border-farmhouse-cream-border">
                  <p><strong>Ideal For:</strong> {item.target}</p>
                  <p><strong>Recommended Time:</strong> {item.duration}</p>
                </div>

                <p className="text-sm text-farmhouse-slate/80 leading-relaxed">
                  {item.summary}
                </p>

                <div className="p-3 bg-farmhouse-river/10 rounded-xl border border-farmhouse-river/20 text-xs text-farmhouse-slate">
                  <strong className="text-farmhouse-river-dark block mb-0.5">Where Kelly&apos;s Fits:</strong>
                  {item.kellysStop}
                </div>
              </div>

              <div className="pt-4 border-t border-farmhouse-cream-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <a
                  href={item.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-farmhouse-slate hover:text-farmhouse-river transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/visit"
                  className="font-semibold text-farmhouse-river hover:underline flex items-center gap-1"
                >
                  <span>Directions & Hours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
