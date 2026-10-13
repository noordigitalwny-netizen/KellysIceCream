import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { BUSINESS_INFO } from "@/lib/business-info";
import {
  IceCream,
  UtensilsCrossed,
  Cake,
  Milk,
  Navigation,
  Phone,
  Compass,
  ArrowRight,
  Sparkles,
  Waves,
  Mountain,
  Car,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section: Task-First & Grounded Farmhouse Aesthetic */}
      <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 border-b border-farmhouse-cream-border/70 overflow-hidden">
        {/* Subtle background glow/organic shapes */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-farmhouse-wood/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-farmhouse-river/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Context Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge showHours={true} />
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-farmhouse-slate/80 bg-farmhouse-cream-paper px-3 py-1 rounded-full border border-farmhouse-cream-border">
                  <MapPin className="w-3.5 h-3.5 text-farmhouse-wood" />
                  Route 611 Corridor • Mount Bethel, PA
                </span>
              </div>

              {/* Editorial Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-farmhouse-slate-dark leading-[1.12]">
                  Homemade ice cream for the road, the river, and home.
                </h1>
                <p className="text-lg sm:text-xl text-farmhouse-slate/85 font-normal leading-relaxed max-w-2xl">
                  More than 50 flavors of hard ice cream made right on-site. Kelly&apos;s is the friendly Route 611 gathering place for families, river days, scenic drives, and Slate Belt adventures.
                </p>
              </div>

              {/* Task-First Action Bar (Answer 5 questions under 30s) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-farmhouse-river text-farmhouse-cream font-semibold text-base hover:bg-farmhouse-river-hover active:scale-[0.98] transition-all shadow-md group"
                >
                  <UtensilsCrossed className="w-5 h-5 text-farmhouse-wood-light group-hover:rotate-12 transition-transform" />
                  <span>View Full Menu & Pricing</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-farmhouse-cream-paper hover:bg-farmhouse-cream text-farmhouse-slate-dark font-medium text-base border border-farmhouse-cream-border shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-farmhouse-wood-warm" />
                  <span>Get Directions (Route 611)</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-farmhouse-slate hover:text-farmhouse-river text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-farmhouse-rust" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Proof Badges */}
              <div className="pt-4 border-t border-farmhouse-cream-border/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-farmhouse-slate/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-farmhouse-river flex-shrink-0" />
                  <span>50+ Hard Flavors On-Site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-farmhouse-river flex-shrink-0" />
                  <span>Full Lunch & Dinner Grill</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-farmhouse-river flex-shrink-0" />
                  <span>Custom Ice Cream Cakes</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-farmhouse-cream-paper p-4 sm:p-5 rounded-3xl border border-farmhouse-cream-border shadow-lifted">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-farmhouse-slate/10">
                  {/* Farmhouse Photo Representation */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1000&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farmhouse-slate-dark/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-farmhouse-cream">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-farmhouse-wood-light block">
                      Small-Batch Craft
                    </span>
                    <p className="font-serif text-lg font-semibold">
                      Freshly scooped right here on Route 611
                    </p>
                  </div>
                </div>

                {/* Quick Info Strip */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-white/70 rounded-xl border border-farmhouse-cream-border">
                    <span className="text-farmhouse-slate/60 block text-[10px] uppercase font-semibold">
                      Today&apos;s Hours
                    </span>
                    <span className="font-bold text-farmhouse-slate-dark text-sm">
                      12:00 PM – 9:00 PM
                    </span>
                  </div>
                  <div className="p-3 bg-white/70 rounded-xl border border-farmhouse-cream-border">
                    <span className="text-farmhouse-slate/60 block text-[10px] uppercase font-semibold">
                      Location
                    </span>
                    <span className="font-bold text-farmhouse-slate-dark text-sm">
                      Mount Bethel, PA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What are you craving? (Disciplined Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm">
            Made Fresh Daily
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
            What are you craving today?
          </h2>
          <p className="text-sm text-farmhouse-slate/75">
            From classic waffle cones and custom sundaes to warm grill melts and celebration cakes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Hard Ice Cream */}
          <Link
            href="/flavors"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-river/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center mb-4 group-hover:bg-farmhouse-river group-hover:text-farmhouse-cream transition-colors">
                <IceCream className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark mb-1 group-hover:text-farmhouse-river transition-colors">
                Hard Ice Cream
              </h3>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                50+ rotating flavors made in small batches on-site. Traditional favorites, seasonal fruits, chocolate decadence, and dietary options.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-river group-hover:underline">
              <span>Browse 50+ Flavors</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </Link>

          {/* Card 2: Hot Food & Grill */}
          <Link
            href="/menu#food"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-river/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-rust/10 text-farmhouse-rust flex items-center justify-center mb-4 group-hover:bg-farmhouse-rust group-hover:text-farmhouse-cream transition-colors">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark mb-1 group-hover:text-farmhouse-rust transition-colors">
                Food & Grill
              </h3>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                A real meal stop. Fresh grilled burgers, hot dogs, chicken wraps, toasted paninis, hot sandwiches, and crispy fries.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-rust group-hover:underline">
              <span>View Food Menu</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </Link>

          {/* Card 3: Sundaes & Shakes */}
          <Link
            href="/menu#creations"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-river/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-wood/20 text-farmhouse-wood-dark flex items-center justify-center mb-4 group-hover:bg-farmhouse-wood group-hover:text-farmhouse-cream transition-colors">
                <Milk className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark mb-1 group-hover:text-farmhouse-wood-dark transition-colors">
                Sundaes & Shakes
              </h3>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                Classic hot fudge sundaes, loaded banana splits, thick hand-spun milkshakes, flurries, and refreshing floats.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-wood-dark group-hover:underline">
              <span>Explore Creations</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </Link>

          {/* Card 4: Custom Ice Cream Cakes */}
          <Link
            href="/cakes"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-river/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center mb-4 group-hover:bg-farmhouse-river group-hover:text-farmhouse-cream transition-colors">
                <Cake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark mb-1 group-hover:text-farmhouse-river transition-colors">
                Celebration Cakes
              </h3>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                Layers of homemade ice cream and fudge crunch for birthdays, family parties, and graduations. Clear sizing and advance ordering.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-river group-hover:underline">
              <span>Order a Cake</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* Section 3: Craft Proof (Made Here, One Batch at a Time) */}
      <section className="bg-farmhouse-river text-farmhouse-cream py-16 sm:py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-farmhouse-wood-light">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Kelly&apos;s Standard</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-cream leading-tight">
                Made here, one batch at a time. Never shipped in a tub.
              </h2>
              <p className="text-sm text-farmhouse-cream-paper/85 leading-relaxed">
                We believe you can taste the difference when ice cream is crafted where it is scooped. Every week, our team churns rich cream, folds in pure inclusions, and fills the dipping cabinets right here in Mount Bethel.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-farmhouse-cream-paper/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light flex-shrink-0 mt-0.5" />
                  <span><strong>Small-Batch Precision:</strong> Churned in dedicated batches to ensure dense, creamy texture without excessive air.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light flex-shrink-0 mt-0.5" />
                  <span><strong>50+ Hard Flavors:</strong> From local black raspberry to rich peanut butter swirls and seasonal fall harvest treats.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light flex-shrink-0 mt-0.5" />
                  <span><strong>Honest Hospitality:</strong> Generous scoops, clean stainless counters, and welcoming local staff.</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-farmhouse-cream text-farmhouse-slate-dark font-semibold text-sm hover:bg-white transition-all shadow-sm"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 aspect-square bg-farmhouse-slate/20 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80')",
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 aspect-square bg-farmhouse-slate/20 relative mt-6">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Make Kelly's Part of the Day (Gateway to Gap, River & Slate Belt) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-farmhouse-cream-border">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
              Gateway to Adventure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
              Make Kelly&apos;s part of your day.
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-farmhouse-river hover:underline"
          >
            <span>Explore all regional itineraries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: River Day */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                River Day + Cool-Down
              </h3>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                For kayakers, tubers, anglers, and families along the Middle Delaware Scenic River. Stop at Kelly&apos;s for burgers and a refreshing sundae before heading home.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Minutes from river access</span>
              <Link href="/explore#river" className="font-semibold text-farmhouse-river hover:underline">
                View Plan →
              </Link>
            </div>
          </div>

          {/* Card 2: Trail Day */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-farmhouse-wood/20 text-farmhouse-wood-dark flex items-center justify-center">
                <Mountain className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                Trail Day + Reward Scoop
              </h3>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                Hiking Mt. Minsi, Dunnfield Creek, or the Appalachian Trail? Re-energize with hot grilled food and your favorite double scoop.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Delaware Water Gap</span>
              <Link href="/explore#trail" className="font-semibold text-farmhouse-wood-dark hover:underline">
                View Plan →
              </Link>
            </div>
          </div>

          {/* Card 3: Scenic Drive */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-farmhouse-rust/10 text-farmhouse-rust flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                Route 611 Scenic Byway
              </h3>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                Taking in fall foliage, roadside farm stands, or historic Slate Belt towns? Kelly&apos;s is the beloved landmark stop on your Sunday drive.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Delaware River Byway</span>
              <Link href="/explore#drive" className="font-semibold text-farmhouse-rust hover:underline">
                View Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Plan Your Visit Quick Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-farmhouse-cream-paper rounded-3xl border border-farmhouse-cream-border p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-river">
                Visit Us in Mount Bethel
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
                Convenient parking, outdoor picnic tables & family seating.
              </h2>
              <p className="text-sm text-farmhouse-slate/80 leading-relaxed">
                Located right on South Delaware Drive (Route 611) with ample pull-in parking for cars, trailers, and outdoor recreation gear.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-farmhouse-wood-light" />
                <span>Launch Turn-by-Turn GPS</span>
              </a>
              <Link
                href="/visit"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-white text-farmhouse-slate-dark font-medium text-sm border border-farmhouse-cream-border hover:bg-farmhouse-cream-paper transition-colors"
              >
                <span>View Full Visit & Parking Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
