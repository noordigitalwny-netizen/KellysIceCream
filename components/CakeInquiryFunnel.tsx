"use client";

import { useState } from "react";
import { BUSINESS_INFO } from "@/lib/business-info";
import {
  Cake,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Info,
  ShieldCheck,
  Check,
} from "lucide-react";

interface CakeSize {
  id: string;
  name: string;
  serves: string;
  price: string;
  description: string;
  dimensions: string;
}

const CAKE_SIZES: CakeSize[] = [
  {
    id: "8-round",
    name: '8" Round Cake',
    serves: "Serves 8 – 10 Guests",
    price: "$28.00",
    dimensions: '8" diameter round • 2 layers',
    description: "Ideal for family birthdays, small dinner parties, and casual weekend milestones.",
  },
  {
    id: "10-round",
    name: '10" Round Cake',
    serves: "Serves 12 – 16 Guests",
    price: "$36.00",
    dimensions: '10" diameter round • 2 layers',
    description: "Our most popular size! Plenty of generous slices for team parties, reunions, and festive gatherings.",
  },
  {
    id: "half-sheet",
    name: "Half-Sheet Cake",
    serves: "Serves 20 – 26 Guests",
    price: "$52.00",
    dimensions: "12\" x 16\" rectangular sheet",
    description: "Generous crowd pleaser designed for large graduations, sports banquets, and milestone anniversaries.",
  },
];

const FLAVOR_OPTIONS = [
  "Old-Fashioned Vanilla",
  "Dutch Dark Chocolate",
  "Black Raspberry (Local Favorite)",
  "Peanut Butter Ripple",
  "Oreo Cookies & Cream",
  "Crisp Mint Chocolate Chip",
  "Roasted Butter Pecan",
  "Fresh Valley Strawberry",
  "Chocolate Chip Cookie Dough",
  "Creamy Vanilla Soft Serve",
  "Creamy Chocolate Soft Serve",
];

const DECORATIVE_THEMES = [
  {
    id: "classic",
    title: "Classic Parlor Rosettes & Sprinkles",
    description: "Timeless border piping with whipped rosettes and colorful celebration sprinkles.",
  },
  {
    id: "birthday",
    title: "Birthday Balloon Fiesta",
    description: "Festive balloon cluster piped in bright edible icing colors.",
  },
  {
    id: "rustic",
    title: "Modern Farmhouse Minimalist",
    description: "Clean textured whipped white icing with elegant chocolate drizzle border.",
  },
  {
    id: "sports",
    title: "Local Team / School Spirit",
    description: "Piped accents tailored to your school or sports team colors.",
  },
];

export default function CakeInquiryFunnel() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
  const [selectedSize, setSelectedSize] = useState<string>("10-round");
  const [bottomFlavor, setBottomFlavor] = useState<string>("Dutch Dark Chocolate");
  const [topFlavor, setTopFlavor] = useState<string>("Old-Fashioned Vanilla");
  const [middleCrunch, setMiddleCrunch] = useState<boolean>(true);
  const [selectedTheme, setSelectedTheme] = useState<string>("classic");
  const [pickupDate, setPickupDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("3:00 PM");
  const [pipedMessage, setPipedMessage] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [specialInstructions, setSpecialInstructions] = useState<string>("");

  const currentSizeObj = CAKE_SIZES.find((s) => s.id === selectedSize) || CAKE_SIZES[1];
  const currentThemeObj = DECORATIVE_THEMES.find((t) => t.id === selectedTheme) || DECORATIVE_THEMES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      {!isSubmitted && (
        <div className="bg-farmhouse-cream-paper p-4 sm:p-6 rounded-2xl border border-farmhouse-cream-border">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {[
              { num: 1, title: "1. Choose Size" },
              { num: 2, title: "2. Flavors & Style" },
              { num: 3, title: "3. Date & Message" },
              { num: 4, title: "4. Review & Confirm" },
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    step === s.num
                      ? "bg-farmhouse-river text-farmhouse-cream ring-4 ring-farmhouse-river/20"
                      : step > s.num
                      ? "bg-farmhouse-river-light text-white"
                      : "bg-white text-farmhouse-slate/50 border border-farmhouse-cream-border"
                  }`}
                >
                  {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-semibold mt-1 hidden sm:block ${
                    step === s.num ? "text-farmhouse-river" : "text-farmhouse-slate/60"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation Screen */}
      {isSubmitted ? (
        <div className="bg-farmhouse-cream-paper p-8 sm:p-12 rounded-3xl border border-farmhouse-cream-border text-center max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-farmhouse-river/10 text-farmhouse-river flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-farmhouse-wood-warm">
              Inquiry Submitted Successfully
            </span>
            <h2 className="font-serif text-3xl font-bold text-farmhouse-slate-dark">
              We&apos;ve received your cake request!
            </h2>
            <p className="text-sm text-farmhouse-slate/85 leading-relaxed">
              Inquiry Reference: <strong>#KC-{Math.floor(100000 + Math.random() * 900000)}</strong>
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-farmhouse-cream-border text-left space-y-3 text-xs text-farmhouse-slate">
            <div className="flex justify-between border-b border-farmhouse-cream-border/60 pb-2">
              <span className="font-semibold text-farmhouse-slate-dark">Size &amp; Base Price:</span>
              <span className="font-bold">{currentSizeObj.name} ({currentSizeObj.price})</span>
            </div>
            <div className="flex justify-between border-b border-farmhouse-cream-border/60 pb-2">
              <span className="font-semibold text-farmhouse-slate-dark">Flavor Combination:</span>
              <span>{bottomFlavor} + {topFlavor}</span>
            </div>
            <div className="flex justify-between border-b border-farmhouse-cream-border/60 pb-2">
              <span className="font-semibold text-farmhouse-slate-dark">Middle Crunch Layer:</span>
              <span>{middleCrunch ? "Chocolate Fudge Cookie Crunch (Included)" : "None"}</span>
            </div>
            <div className="flex justify-between border-b border-farmhouse-cream-border/60 pb-2">
              <span className="font-semibold text-farmhouse-slate-dark">Requested Pickup:</span>
              <span>{pickupDate || "Within 48–72 hours"} at {pickupTime}</span>
            </div>
            {pipedMessage && (
              <div className="flex justify-between border-b border-farmhouse-cream-border/60 pb-2">
                <span className="font-semibold text-farmhouse-slate-dark">Decorative Inscription:</span>
                <span className="italic">&ldquo;{pipedMessage}&rdquo;</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="font-semibold text-farmhouse-slate-dark">Contact:</span>
              <span>{customerName} • {customerPhone}</span>
            </div>
          </div>

          {/* Expectation Box */}
          <div className="p-4 bg-farmhouse-river/10 rounded-2xl border border-farmhouse-river/20 text-xs text-farmhouse-slate space-y-1.5">
            <strong className="text-farmhouse-river-dark block text-sm">What happens next?</strong>
            <p>
              1. A Kelly&apos;s kitchen team member will review freezer capacity and call you at <strong>{customerPhone}</strong> within 24 hours.
            </p>
            <p>
              2. We will confirm your requested pickup slot, answer decorative questions, and take your phone deposit.
            </p>
            <p className="text-[11px] text-farmhouse-slate/75 pt-1">
              Have an urgent question right now? Call our parlor directly at <strong>{BUSINESS_INFO.phone}</strong>.
            </p>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            type="button"
            className="px-6 py-2.5 rounded-xl bg-farmhouse-cream hover:bg-white text-farmhouse-slate-dark text-xs font-semibold border border-farmhouse-cream-border transition-colors"
          >
            Start Another Inquiry
          </button>
        </div>
      ) : (
        /* Multi-Step Flow */
        <div className="bg-farmhouse-cream-paper p-6 sm:p-10 rounded-3xl border border-farmhouse-cream-border shadow-sm max-w-4xl mx-auto">
          {/* STEP 1: CHOOSE SIZE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-farmhouse-wood-warm block mb-1">
                  Step 1 of 4
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
                  Choose Your Cake Size &amp; Serving Guide
                </h2>
                <p className="text-xs sm:text-sm text-farmhouse-slate/75 mt-1">
                  All cakes include two layers of homemade ice cream and our signature fudge cookie-crunch center.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {CAKE_SIZES.map((size) => {
                  const isSelected = selectedSize === size.id;
                  return (
                    <div
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-white border-farmhouse-river ring-2 ring-farmhouse-river/20 shadow-md"
                          : "bg-white/80 border-farmhouse-cream-border hover:border-farmhouse-river/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-farmhouse-river bg-farmhouse-river text-white"
                                : "border-farmhouse-cream-border bg-farmhouse-cream-paper"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </span>
                          <span className="font-serif text-lg font-bold text-farmhouse-slate-dark">
                            {size.price}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                          {size.name}
                        </h3>
                        <span className="text-xs font-semibold text-farmhouse-wood-warm block mt-0.5">
                          {size.serves}
                        </span>
                        <p className="text-[11px] text-farmhouse-slate/60 mt-1">
                          {size.dimensions}
                        </p>
                        <p className="text-xs text-farmhouse-slate/75 mt-3 leading-relaxed">
                          {size.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-farmhouse-cream-border/60">
                        <span
                          className={`text-xs font-semibold ${
                            isSelected ? "text-farmhouse-river" : "text-farmhouse-slate/50"
                          }`}
                        >
                          {isSelected ? "Selected Size" : "Click to select"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4 border-t border-farmhouse-cream-border">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm"
                >
                  <span>Continue: Flavors &amp; Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE FLAVORS & STYLE */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-farmhouse-wood-warm block mb-1">
                  Step 2 of 4
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
                  Select Flavor Pairing &amp; Decoration
                </h2>
                <p className="text-xs sm:text-sm text-farmhouse-slate/75 mt-1">
                  Pair any two homemade flavors or keep it classic.
                </p>
              </div>

              {/* Flavor selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-5 rounded-2xl border border-farmhouse-cream-border">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark mb-1">
                    Bottom Ice Cream Layer
                  </label>
                  <select
                    value={bottomFlavor}
                    onChange={(e) => setBottomFlavor(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                  >
                    {FLAVOR_OPTIONS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <span className="text-[11px] text-farmhouse-slate/60 block mt-1">
                    Forms the sturdy base of your cake
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark mb-1">
                    Top Ice Cream Layer
                  </label>
                  <select
                    value={topFlavor}
                    onChange={(e) => setTopFlavor(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                  >
                    {FLAVOR_OPTIONS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <span className="text-[11px] text-farmhouse-slate/60 block mt-1">
                    The top layer beneath the whipped frosting
                  </span>
                </div>

                {/* Middle Crunch Checkbox */}
                <div className="sm:col-span-2 pt-3 border-t border-farmhouse-cream-border flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="middleCrunch"
                      checked={middleCrunch}
                      onChange={(e) => setMiddleCrunch(e.target.checked)}
                      className="w-4 h-4 rounded text-farmhouse-river focus:ring-farmhouse-river/40"
                    />
                    <label htmlFor="middleCrunch" className="text-xs font-medium text-farmhouse-slate-dark cursor-pointer">
                      Include signature <strong>Chocolate Fudge Cookie-Crunch Middle Layer</strong> (Free &amp; highly recommended)
                    </label>
                  </div>
                  <span className="text-[11px] font-semibold text-farmhouse-river">Kelly&apos;s Signature</span>
                </div>
              </div>

              {/* Decorative Theme Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark mb-2">
                  Choose Decorative Theme
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DECORATIVE_THEMES.map((theme) => {
                    const isSelected = selectedTheme === theme.id;
                    return (
                      <div
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-white border-farmhouse-river ring-2 ring-farmhouse-river/20 shadow-sm"
                            : "bg-white/70 border-farmhouse-cream-border hover:border-farmhouse-river/30"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-sm font-bold text-farmhouse-slate-dark">
                            {theme.title}
                          </h4>
                          {isSelected && <Check className="w-4 h-4 text-farmhouse-river" />}
                        </div>
                        <p className="text-[11px] text-farmhouse-slate/70 mt-1">
                          {theme.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-farmhouse-cream-border">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-farmhouse-cream-border bg-white text-farmhouse-slate text-xs font-semibold hover:bg-farmhouse-cream transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Sizes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm"
                >
                  <span>Continue: Date &amp; Inscription</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ADD DETAILS (DATE & MESSAGE) */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-farmhouse-wood-warm block mb-1">
                  Step 3 of 4
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
                  Pickup Schedule &amp; Inscription
                </h2>
                <p className="text-xs sm:text-sm text-farmhouse-slate/75 mt-1">
                  Please provide your target pickup date and personalized greeting message.
                </p>
              </div>

              {/* Lead Time Notice Banner */}
              <div className="p-4 bg-farmhouse-river/10 rounded-2xl border border-farmhouse-river/20 flex items-start gap-3 text-xs text-farmhouse-slate">
                <Clock className="w-5 h-5 text-farmhouse-river flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-farmhouse-river-dark block font-semibold">
                    48 – 72 Hours Lead Time Policy:
                  </strong>
                  Because every cake is handmade on-site from scratch and properly deep-frozen to survive travel, we kindly request a minimum of 48 to 72 hours notice.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-2xl border border-farmhouse-cream-border">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark mb-1">
                    Target Pickup Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                  />
                  <span className="text-[11px] text-farmhouse-slate/60 block mt-1">
                    Parlor open 7 days a week (12:00 PM – 9:00 PM)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark mb-1">
                    Approximate Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                  >
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark mb-1">
                    Piped Inscription Greeting (Free)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Happy 10th Birthday Emma!"
                    value={pipedMessage}
                    onChange={(e) => setPipedMessage(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                  />
                  <span className="text-[11px] text-farmhouse-slate/60 block mt-1">
                    Piped by hand with decorative icing. Leave blank if no writing is desired.
                  </span>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="bg-white p-5 rounded-2xl border border-farmhouse-cream-border space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-farmhouse-slate-dark block">
                  Your Contact Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-farmhouse-slate mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-farmhouse-slate mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(570) 555-0123"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-farmhouse-slate mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-farmhouse-slate mb-1">
                      Allergy Notes or Special Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any allergen notes or specific color preferences..."
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-farmhouse-cream-border bg-farmhouse-cream-paper text-sm text-farmhouse-slate-dark focus:ring-2 focus:ring-farmhouse-river/50 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-farmhouse-cream-border">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-farmhouse-cream-border bg-white text-farmhouse-slate text-xs font-semibold hover:bg-farmhouse-cream transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Flavors</span>
                </button>
                <button
                  type="button"
                  disabled={!customerName || !customerPhone}
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover disabled:opacity-50 transition-colors shadow-sm"
                >
                  <span>Review &amp; Confirm Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & CONFIRM */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-farmhouse-wood-warm block mb-1">
                  Step 4 of 4
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-farmhouse-slate-dark">
                  Confirm Your Cake Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-farmhouse-slate/75 mt-1">
                  Please review your custom cake specifications before sending to our kitchen team.
                </p>
              </div>

              {/* Order Recap Card */}
              <div className="bg-white p-6 rounded-2xl border border-farmhouse-cream-border space-y-4">
                <div className="flex justify-between items-baseline border-b border-farmhouse-cream-border/70 pb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                      {currentSizeObj.name}
                    </h3>
                    <span className="text-xs text-farmhouse-wood-warm font-semibold">
                      {currentSizeObj.serves}
                    </span>
                  </div>
                  <span className="font-serif text-xl font-bold text-farmhouse-slate-dark">
                    {currentSizeObj.price}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-farmhouse-slate">
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Bottom Layer:</span>
                    <span>{bottomFlavor}</span>
                  </div>
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Top Layer:</span>
                    <span>{topFlavor}</span>
                  </div>
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Middle Crunch:</span>
                    <span>{middleCrunch ? "Chocolate Fudge Cookie Crunch (Yes)" : "None"}</span>
                  </div>
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Decorative Theme:</span>
                    <span>{currentThemeObj.title}</span>
                  </div>
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Pickup Date &amp; Time:</span>
                    <span>{pickupDate ? `${pickupDate} around ${pickupTime}` : `Approx. 48–72h (${pickupTime})`}</span>
                  </div>
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Piped Inscription:</span>
                    <span>{pipedMessage ? `"${pipedMessage}"` : "None requested"}</span>
                  </div>
                  <div>
                    <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Contact Person:</span>
                    <span>{customerName} • {customerPhone}</span>
                  </div>
                  {customerEmail && (
                    <div>
                      <span className="font-bold text-farmhouse-slate-dark block mb-0.5">Email:</span>
                      <span>{customerEmail}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Explicit Non-Instant Payment Notice (Strategic Plan guardrail) */}
              <div className="p-4 bg-farmhouse-slate/10 rounded-2xl border border-farmhouse-slate/20 text-xs text-farmhouse-slate space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-farmhouse-slate-dark">
                  <ShieldCheck className="w-4 h-4 text-farmhouse-river" />
                  <span>Notice: No Instant Payment Charged Today</span>
                </div>
                <p className="leading-relaxed">
                  Submitting this inquiry does not require immediate payment. Kelly&apos;s staff will verify schedule availability and <strong>call you at {customerPhone} within 24 hours</strong> to confirm pickup, answer any custom requests, and finalize deposit details over the phone.
                </p>
              </div>

              <div className="flex justify-between pt-4 border-t border-farmhouse-cream-border">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-farmhouse-cream-border bg-white text-farmhouse-slate text-xs font-semibold hover:bg-farmhouse-cream transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Schedule</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-farmhouse-river text-farmhouse-cream font-bold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-md active:scale-[0.98]"
                >
                  <CheckCircle2 className="w-5 h-5 text-farmhouse-wood-light" />
                  <span>Submit Cake Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
