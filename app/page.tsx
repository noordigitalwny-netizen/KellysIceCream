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
  ArrowRight,
  Sparkles,
  Waves,
  Mountain,
  Car,
  Landmark,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  Users,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* =========================================================================
          1. HERO SECTION (Above-the-Fold Priority)
          Mobile-first rule: What, where, when, why & one-tap actions in under 30s
         ========================================================================= */}
      <section className="relative pt-4 pb-12 sm:pt-10 sm:pb-20 border-b border-farmhouse-cream-border/70 overflow-hidden">
        {/* Farmhouse ambient glows */}
        <div className="absolute top-0 right-0 -mr-28 -mt-28 w-96 h-96 rounded-full bg-farmhouse-wood/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-96 h-96 rounded-full bg-farmhouse-river/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Context Pill & Live Store Status */}
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge showHours={true} />
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-farmhouse-slate/85 bg-farmhouse-cream-paper px-3 py-1 rounded-full border border-farmhouse-cream-border">
                  <MapPin className="w-3.5 h-3.5 text-farmhouse-wood-warm" />
                  Route 611 • Mount Bethel, PA
                </span>
              </div>

              {/* Exact Strategic Headlines */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-farmhouse-slate-dark leading-[1.12]">
                  Homemade ice cream for the road, the river, and home.
                </h1>
                <p className="font-sans text-base sm:text-xl font-medium text-farmhouse-river leading-snug">
                  50+ hard flavors made on-site • Mount Bethel, PA
                </p>
                <p className="text-sm sm:text-base text-farmhouse-slate/80 leading-relaxed max-w-2xl font-normal">
                  The friendly Route 611 gathering place where rich ice cream is made in small batches on-site. The satisfying food and treat stop for local families, river trips, scenic drives, and Slate Belt adventures.
                </p>
              </div>

              {/* Task-First Action Buttons (One-tap decisions on mobile) */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-farmhouse-river text-farmhouse-cream font-semibold text-base hover:bg-farmhouse-river-hover active:scale-[0.98] transition-all shadow-md group"
                >
                  <UtensilsCrossed className="w-5 h-5 text-farmhouse-wood-light group-hover:rotate-12 transition-transform" />
                  <span>View Menu</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-farmhouse-cream-paper hover:bg-farmhouse-cream text-farmhouse-slate-dark font-semibold text-base border border-farmhouse-cream-border shadow-sm active:scale-[0.98] transition-all"
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

              {/* Instant Trust & Proof Points */}
              <div className="pt-4 border-t border-farmhouse-cream-border/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-farmhouse-slate/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-farmhouse-river flex-shrink-0" />
                  <span>50+ Hard Flavors On-Site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-farmhouse-river flex-shrink-0" />
                  <span>Full Lunch & Dinner Grill</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-farmhouse-river flex-shrink-0" />
                  <span>Custom Ice Cream Cakes</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Wide Candid Photo of Signature Cone/Sundae with Exterior & Outdoor Seating behind */}
            <div className="lg:col-span-5">
              <div className="relative bg-farmhouse-cream-paper p-4 sm:p-5 rounded-3xl border border-farmhouse-cream-border shadow-lifted">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-farmhouse-slate/10">
                  {/* Photo showcasing signature scoop with outdoor seating & roadside parlor atmosphere behind */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                  {/* Vignette & subtle contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-farmhouse-slate-dark/85 via-farmhouse-slate-dark/20 to-transparent" />

                  {/* Overlaid proof badge */}
                  <div className="absolute top-3 left-3 bg-farmhouse-river/90 backdrop-blur-sm text-farmhouse-cream px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3 text-farmhouse-wood-light" />
                    <span>Made Fresh In Mount Bethel</span>
                  </div>

                  {/* Bottom caption with outdoor seating & parlor context */}
                  <div className="absolute bottom-3 left-4 right-4 text-farmhouse-cream">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-farmhouse-wood-light block">
                      Authentic Parlor Experience
                    </span>
                    <p className="font-serif text-base sm:text-lg font-semibold leading-snug">
                      Signature sundaes & fresh scoops with shaded outdoor picnic tables along Route 611.
                    </p>
                  </div>
                </div>

                {/* Instant Mobile Decider Strip */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-white/80 rounded-xl border border-farmhouse-cream-border">
                    <span className="text-farmhouse-slate/60 block text-[10px] uppercase font-bold tracking-wider">
                      Today&apos;s Hours
                    </span>
                    <span className="font-bold text-farmhouse-slate-dark text-xs sm:text-sm">
                      12:00 PM – 9:00 PM
                    </span>
                  </div>
                  <div className="p-2.5 bg-white/80 rounded-xl border border-farmhouse-cream-border">
                    <span className="text-farmhouse-slate/60 block text-[10px] uppercase font-bold tracking-wider">
                      Pull-In Parking
                    </span>
                    <span className="font-bold text-farmhouse-slate-dark text-xs sm:text-sm">
                      Trailers & Gear Welcome
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. "WHAT ARE YOU CRAVING?" (Category Cards)
          Disciplined Grid: Ice Cream, Food, Shakes & Sundaes, Cakes
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm">
            Made Fresh Daily
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
            What are you craving today?
          </h2>
          <p className="text-sm text-farmhouse-slate/75">
            Whether you need a quick post-adventure cone, a full dinner for the family, or a celebration dessert.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 1: Ice Cream */}
          <Link
            href="/flavors"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-river/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center mb-4 group-hover:bg-farmhouse-river group-hover:text-farmhouse-cream transition-colors">
                <IceCream className="w-6 h-6" />
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark group-hover:text-farmhouse-river transition-colors">
                  Hard Ice Cream
                </h3>
                <span className="text-xs font-semibold text-farmhouse-wood-warm">50+ Flavors</span>
              </div>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                Small-batch hard flavors churned on-site. Crisp waffle cones, traditional scoops, soft-serve swirls, and dietary options.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-river group-hover:underline pt-2 border-t border-farmhouse-cream-border/60">
              <span>Browse All Flavors</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Card 2: Food & Grill */}
          <Link
            href="/menu#food"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-rust/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-rust/10 text-farmhouse-rust flex items-center justify-center mb-4 group-hover:bg-farmhouse-rust group-hover:text-farmhouse-cream transition-colors">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark group-hover:text-farmhouse-rust transition-colors">
                  Food & Grill
                </h3>
                <span className="text-xs font-semibold text-farmhouse-rust">Cooked to Order</span>
              </div>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                A real meal stop. Fresh grilled cheeseburgers, Nathan&apos;s all-beef hot dogs, chicken wraps, toasted paninis, and crinkle-cut fries.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-rust group-hover:underline pt-2 border-t border-farmhouse-cream-border/60">
              <span>View Food Menu</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Card 3: Shakes & Sundaes */}
          <Link
            href="/menu#creations"
            className="group bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border hover:border-farmhouse-wood/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-farmhouse-wood/20 text-farmhouse-wood-dark flex items-center justify-center mb-4 group-hover:bg-farmhouse-wood group-hover:text-farmhouse-cream transition-colors">
                <Milk className="w-6 h-6" />
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark group-hover:text-farmhouse-wood-dark transition-colors">
                  Shakes & Sundaes
                </h3>
                <span className="text-xs font-semibold text-farmhouse-wood-warm">Handcrafted</span>
              </div>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                Classic warm hot fudge sundaes, triple-scoop banana splits, thick hand-spun milkshakes, candy flurries, and root beer floats.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-wood-dark group-hover:underline pt-2 border-t border-farmhouse-cream-border/60">
              <span>Explore Sundaes & Shakes</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
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
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark group-hover:text-farmhouse-river transition-colors">
                  Cakes
                </h3>
                <span className="text-xs font-semibold text-farmhouse-river">Advance Order</span>
              </div>
              <p className="text-xs text-farmhouse-slate/70 leading-relaxed mb-4">
                Layers of homemade ice cream with a rich fudge cookie-crunch center. Round and sheet sizes with custom decorative lettering.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-farmhouse-river group-hover:underline pt-2 border-t border-farmhouse-cream-border/60">
              <span>Order Celebration Cake</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          3. CRAFT PROOF SECTION (Made Here, One Batch at a Time)
          Highlights: Small-batch on-site production, stainless equipment, real photography
         ========================================================================= */}
      <section className="bg-farmhouse-river text-farmhouse-cream py-14 sm:py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story & Proof Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-farmhouse-wood-light">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Craft Proof • Made On-Site</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-cream leading-tight">
                Made here, one batch at a time. Never shipped in a tub.
              </h2>
              <p className="text-sm text-farmhouse-cream-paper/90 leading-relaxed">
                Many modern shops scoop factory ice cream delivered from hundreds of miles away. At Kelly&apos;s, our batch freezer is right behind the counter. We churn rich sweet cream, blend real fruits, and hand-fold fudge ripples directly on Route 611.
              </p>

              {/* 3 Proof Standards */}
              <div className="space-y-3 pt-2 text-sm text-farmhouse-cream-paper/90">
                <div className="flex items-start gap-3 bg-farmhouse-river-dark/40 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-farmhouse-cream block font-semibold">Clean Stainless Batch Freezers</strong>
                    <span className="text-xs text-farmhouse-cream-paper/80">
                      Traditional commercial dairy equipment keeps temperatures precise and texture exceptionally dense.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-farmhouse-river-dark/40 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-farmhouse-cream block font-semibold">Controlled Low Overrun</strong>
                    <span className="text-xs text-farmhouse-cream-paper/80">
                      Less injected air means a richer, slower-melting scoop that holds its consistency on warm river days.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-farmhouse-river-dark/40 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-farmhouse-cream block font-semibold">Real Ingredients & Inclusions</strong>
                    <span className="text-xs text-farmhouse-cream-paper/80">
                      Pure Dutch cocoa, real black raspberries, fresh roasted pecans, and thick peanut butter swirls.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-farmhouse-cream text-farmhouse-slate-dark font-semibold text-sm hover:bg-white transition-all shadow-sm"
                >
                  <span>See How We Make It</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Close-up sequence: batch making, scooping, clean stainless equipment */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/15 aspect-[4/5] bg-farmhouse-slate/20 relative group">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farmhouse-slate-dark/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-farmhouse-cream bg-farmhouse-slate-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    Batch Making & Inclusions
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-farmhouse-river-dark/50 border border-white/10 text-xs text-farmhouse-cream-paper/85">
                  <span className="text-farmhouse-wood-light font-bold block mb-1">50+ Flavors Dipped Fresh</span>
                  Every batch is date-tracked and churned weekly for optimal flavor intensity.
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/15 aspect-[4/5] bg-farmhouse-slate/20 relative group">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farmhouse-slate-dark/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-farmhouse-cream bg-farmhouse-slate-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    Generous Scooping Action
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-farmhouse-river-dark/50 border border-white/10 text-xs text-farmhouse-cream-paper/85">
                  <span className="text-farmhouse-wood-light font-bold block mb-1">Stainless Clean Standards</span>
                  Sanitary dairy equipment and daily sanitation protocols.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EXPLORE / REGIONAL TOURISM INTEGRATION CARDS
          River, Trail, Scenic Drive, and Slate Belt Itineraries
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-farmhouse-cream-border">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm block mb-1">
              Gateway to Adventure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
              Make Kelly&apos;s part of the day.
            </h2>
            <p className="text-sm text-farmhouse-slate/75 mt-1 max-w-xl">
              Turn your outdoor recreation or country excursion into an unforgettable day with Kelly&apos;s as the meal and treat stop.
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-farmhouse-river hover:underline"
          >
            <span>View all regional itineraries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. River Day */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between hover:border-farmhouse-river/50 hover:shadow-card transition-all">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                River Day + Cool-Down
              </h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-farmhouse-river block">
                Delaware River Paddlers
              </span>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                For kayakers, tubers, and anglers on the Middle Delaware Scenic River. Fuel up with hot burgers and end the float with a frosty double scoop.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Minutes from river access</span>
              <Link href="/explore#river" className="font-semibold text-farmhouse-river hover:underline">
                View Plan →
              </Link>
            </div>
          </div>

          {/* 2. Trail Day */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between hover:border-farmhouse-wood/50 hover:shadow-card transition-all">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-farmhouse-wood/20 text-farmhouse-wood-dark flex items-center justify-center">
                <Mountain className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                Trail Day + Reward Scoop
              </h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-farmhouse-wood-dark block">
                Mount Minsi & AT Hikers
              </span>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                Conquering the Appalachian Trail or Delaware Water Gap overlooks? Make Kelly&apos;s your celebratory post-hike stop just 10 minutes south of the Gap.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Delaware Water Gap</span>
              <Link href="/explore#trail" className="font-semibold text-farmhouse-wood-dark hover:underline">
                View Plan →
              </Link>
            </div>
          </div>

          {/* 3. Scenic Route 611 Drive */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between hover:border-farmhouse-rust/50 hover:shadow-card transition-all">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-farmhouse-rust/10 text-farmhouse-rust flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                Scenic Route 611 Drive
              </h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-farmhouse-rust block">
                Foliage & River Overlooks
              </span>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                Cruising the Delaware River Valley Scenic Byway for autumn colors and rural countryside? Kelly&apos;s is the beloved roadside landmark on your loop.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Delaware River Byway</span>
              <Link href="/explore#drive" className="font-semibold text-farmhouse-rust hover:underline">
                View Plan →
              </Link>
            </div>
          </div>

          {/* 4. Slate Belt History & Local Flavor */}
          <div className="bg-farmhouse-cream-paper p-6 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between hover:border-farmhouse-slate/50 hover:shadow-card transition-all">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-farmhouse-slate/10 text-farmhouse-slate-dark flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                Slate Belt History & Stops
              </h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-farmhouse-slate-dark block">
                Heritage Day-Trippers
              </span>
              <p className="text-xs text-farmhouse-slate/75 leading-relaxed">
                Connecting Bangor, Portland, and Mount Bethel slate heritage to an authentic meal or dessert stop cherished by generations of local families.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-farmhouse-cream-border/70 flex items-center justify-between text-xs">
              <span className="font-medium text-farmhouse-slate/60">Historic Slate Belt</span>
              <Link href="/explore#slate" className="font-semibold text-farmhouse-slate-dark hover:underline">
                View Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. LOCAL LOVE / SOCIAL PROOF & GALLERY PREVIEW
          Selected reviews, community proof, and real photography showcase
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-farmhouse-cream-paper p-8 sm:p-12 rounded-3xl border border-farmhouse-cream-border space-y-10 shadow-sm">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-wood-warm">
              Local Love & Community Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
              Locally made, locally loved.
            </h2>
            <p className="text-sm text-farmhouse-slate/75">
              Generations of Pennsylvania families, river enthusiasts, and trail explorers make Kelly&apos;s their trusted tradition.
            </p>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="p-6 bg-white/90 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-farmhouse-wood-warm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-farmhouse-wood-warm text-farmhouse-wood-warm" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-farmhouse-slate/90 italic leading-relaxed">
                  &ldquo;The Black Raspberry is legendary. After a 6-mile trek on Mount Minsi and the Appalachian Trail, there is literally nothing better on Route 611 than a double scoop here.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-farmhouse-cream-border flex items-center justify-between text-xs">
                <span className="font-bold text-farmhouse-slate-dark">Dave &amp; Ellen T.</span>
                <span className="text-farmhouse-slate/60">Gap Hikers • Easton, PA</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 bg-white/90 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-farmhouse-wood-warm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-farmhouse-wood-warm text-farmhouse-wood-warm" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-farmhouse-slate/90 italic leading-relaxed">
                  &ldquo;Our family has stopped at Kelly&apos;s after Delaware River float trips for over ten years. True homemade ice cream, giant portions, and the bacon double burgers are incredible.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-farmhouse-cream-border flex items-center justify-between text-xs">
                <span className="font-bold text-farmhouse-slate-dark">Sarah M.</span>
                <span className="text-farmhouse-slate/60">Family Tradition • Stroudsburg, PA</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 bg-white/90 rounded-2xl border border-farmhouse-cream-border flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-farmhouse-wood-warm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-farmhouse-wood-warm text-farmhouse-wood-warm" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-farmhouse-slate/90 italic leading-relaxed">
                  &ldquo;We ordered an 8-inch custom ice cream cake for my daughter&apos;s birthday. The fudge crunch middle layer stole the show. Everyone asked where we got it!&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-farmhouse-cream-border flex items-center justify-between text-xs">
                <span className="font-bold text-farmhouse-slate-dark">Anthony R.</span>
                <span className="text-farmhouse-slate/60">Slate Belt Resident • Bangor, PA</span>
              </div>
            </div>
          </div>

          {/* Photo Gallery Preview */}
          <div className="space-y-4 pt-4 border-t border-farmhouse-cream-border">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-farmhouse-slate-dark">
                Moments at the Parlor
              </span>
              <span className="text-xs text-farmhouse-slate/60">
                Route 611 Outdoor Tables & Dipping Cabinets
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {/* Photo 1 */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-farmhouse-slate/10 group">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-farmhouse-slate-dark/20 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white bg-black/50 px-2 py-0.5 rounded">
                  Hand-Dipped Cones
                </span>
              </div>

              {/* Photo 2 */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-farmhouse-slate/10 group">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-farmhouse-slate-dark/20 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white bg-black/50 px-2 py-0.5 rounded">
                  Fresh Grill Burgers
                </span>
              </div>

              {/* Photo 3 */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-farmhouse-slate/10 group">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-farmhouse-slate-dark/20 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white bg-black/50 px-2 py-0.5 rounded">
                  Loaded Sundaes
                </span>
              </div>

              {/* Photo 4 */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-farmhouse-slate/10 group">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-farmhouse-slate-dark/20 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white bg-black/50 px-2 py-0.5 rounded">
                  Celebration Cakes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CELEBRATION BANNER ("Celebrate with a Kelly's cake")
          Serving guides, fudge crunch center, and lead time notices
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-farmhouse-slate-dark text-farmhouse-cream rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lifted border border-farmhouse-slate/60">
          {/* Subtle wood-toned accent badge in background */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-farmhouse-wood/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-farmhouse-wood-light">
                <Cake className="w-4 h-4" />
                <span>Celebration Centerpiece</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-cream leading-tight">
                Celebrate with a Kelly&apos;s cake.
              </h2>

              <p className="text-sm text-farmhouse-cream-paper/85 leading-relaxed">
                Made here for your next reason to celebrate. Double layers of homemade Kelly&apos;s ice cream paired with a rich chocolate fudge cookie-crunch center and decorated whipped icing.
              </p>

              {/* Serving Guide Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-farmhouse-slate/60 rounded-xl border border-farmhouse-slate/80">
                  <span className="font-bold text-farmhouse-cream block text-sm">8&quot; Round</span>
                  <span className="text-farmhouse-wood-light font-medium">Serves 8 – 10</span>
                  <span className="block text-[11px] text-farmhouse-cream-paper/70 mt-1">Starting at $28</span>
                </div>

                <div className="p-3 bg-farmhouse-slate/60 rounded-xl border border-farmhouse-slate/80">
                  <span className="font-bold text-farmhouse-cream block text-sm">10&quot; Round</span>
                  <span className="text-farmhouse-wood-light font-medium">Serves 12 – 16</span>
                  <span className="block text-[11px] text-farmhouse-cream-paper/70 mt-1">Starting at $36</span>
                </div>

                <div className="p-3 bg-farmhouse-slate/60 rounded-xl border border-farmhouse-slate/80">
                  <span className="font-bold text-farmhouse-cream block text-sm">Half-Sheet</span>
                  <span className="text-farmhouse-wood-light font-medium">Serves 20 – 26</span>
                  <span className="block text-[11px] text-farmhouse-cream-paper/70 mt-1">Starting at $52</span>
                </div>
              </div>

              {/* Lead Time Notice */}
              <div className="flex items-center gap-2.5 text-xs text-farmhouse-cream-paper/90 bg-farmhouse-river/40 p-3 rounded-xl border border-farmhouse-river/50">
                <Clock className="w-4 h-4 text-farmhouse-wood-light flex-shrink-0" />
                <span>
                  <strong>Lead Time Notice:</strong> Please allow <strong>48 to 72 hours advance notice</strong> so our kitchen can freeze and hand-pipe your custom cake.
                </span>
              </div>
            </div>

            {/* Right Call-to-Action Box */}
            <div className="lg:col-span-5 bg-farmhouse-slate/40 p-6 sm:p-8 rounded-2xl border border-farmhouse-slate/50 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-farmhouse-river/60 text-farmhouse-wood-light flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-farmhouse-cream">
                  Ready to Order Your Cake?
                </h3>
                <p className="text-xs text-farmhouse-cream-paper/70 mt-1">
                  Call our team directly to select your flavor combination and schedule your pickup date.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover active:scale-[0.98] transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-farmhouse-wood-light" />
                  <span>Call to Order: {BUSINESS_INFO.phone}</span>
                </a>

                <Link
                  href="/cakes"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-transparent hover:bg-white/10 text-farmhouse-cream text-xs font-medium border border-farmhouse-cream/30 transition-colors"
                >
                  <span>View Full Cake Sizing & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PLAN YOUR VISIT WRAPPER
          Roadside arrival details on Route 611
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-farmhouse-cream-paper rounded-3xl border border-farmhouse-cream-border p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-farmhouse-river">
                Visit Us in Mount Bethel
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
                Convenient pull-in parking & outdoor seating.
              </h2>
              <p className="text-sm text-farmhouse-slate/80 leading-relaxed">
                Located right on South Delaware Drive (Route 611) with ample pull-in parking for cars, trailers, and outdoor recreation gear. Shaded picnic bench tables on the lawn.
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
                <span>Launch GPS Directions</span>
              </a>
              <Link
                href="/visit"
                className="w-full text-center py-3 px-6 rounded-xl bg-white text-farmhouse-slate-dark font-medium text-xs border border-farmhouse-cream-border hover:bg-farmhouse-cream-paper transition-colors"
              >
                <span>View Full Parlor & Parking Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
