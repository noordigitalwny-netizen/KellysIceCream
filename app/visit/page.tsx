import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";
import StatusBadge from "@/components/StatusBadge";
import { MapPin, Clock, Phone, Navigation, Car, Users, Dog, Accessibility, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan Your Visit | Hours, Location & Parking",
  description:
    "Find Kelly's Ice Cream on Route 611 in Mount Bethel, PA. Check current hours, directions, parking, outdoor picnic tables, and accessibility information.",
};

export default function VisitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-farmhouse-cream-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <StatusBadge showHours={true} />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-farmhouse-slate-dark">
            Plan Your Visit
          </h1>
          <p className="text-base text-farmhouse-slate/80 mt-2 max-w-2xl">
            Everything you need for an easy stop on Route 611 in Mount Bethel, PA — hours, directions, parking, and amenities.
          </p>
        </div>

        <a
          href={BUSINESS_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-farmhouse-river text-farmhouse-cream font-semibold text-sm hover:bg-farmhouse-river-hover transition-colors shadow-sm"
        >
          <Navigation className="w-4 h-4 text-farmhouse-wood-light" />
          <span>Launch Turn-by-Turn GPS</span>
        </a>
      </div>

      {/* Grid: Hours & Amenities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hours Card */}
        <div className="bg-farmhouse-cream-paper p-6 sm:p-8 rounded-2xl border border-farmhouse-cream-border space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-farmhouse-cream-border">
            <Clock className="w-5 h-5 text-farmhouse-river" />
            <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">
              Parlor Hours
            </h2>
          </div>

          <ul className="space-y-2.5 text-sm">
            {BUSINESS_INFO.hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between items-center py-1.5 border-b border-farmhouse-cream-border/50 text-farmhouse-slate"
              >
                <span className="font-medium text-farmhouse-slate-dark">{h.day}</span>
                <span className="font-semibold">{h.openTime} – {h.closeTime}</span>
              </li>
            ))}
          </ul>

          <div className="text-xs text-farmhouse-slate/75 bg-farmhouse-cream p-4 rounded-xl border border-farmhouse-cream-border">
            <strong>Kitchen Order Cut-Off:</strong> Grill food closes 30 minutes before parlor closing time each evening.
          </div>
        </div>

        {/* Location & Contact Card */}
        <div className="bg-farmhouse-cream-paper p-6 sm:p-8 rounded-2xl border border-farmhouse-cream-border space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-farmhouse-cream-border">
            <MapPin className="w-5 h-5 text-farmhouse-wood-warm" />
            <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">
              Location & Contact
            </h2>
          </div>

          <div className="space-y-4 text-sm text-farmhouse-slate">
            <div>
              <span className="font-semibold block text-farmhouse-slate-dark">Address:</span>
              <p>{BUSINESS_INFO.address.street}</p>
              <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
              <span className="text-xs text-farmhouse-slate/60 block mt-1">Route 611 Corridor (Delaware River Scenic Byway)</span>
            </div>

            <div>
              <span className="font-semibold block text-farmhouse-slate-dark">Telephone:</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-farmhouse-river font-semibold hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-farmhouse-river hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Visitor Amenities Card */}
        <div className="bg-farmhouse-cream-paper p-6 sm:p-8 rounded-2xl border border-farmhouse-cream-border space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-farmhouse-cream-border">
            <Users className="w-5 h-5 text-farmhouse-rust" />
            <h2 className="font-serif text-2xl font-bold text-farmhouse-slate-dark">
              Parlor Amenities
            </h2>
          </div>

          <ul className="space-y-4 text-xs text-farmhouse-slate">
            <li className="flex items-start gap-3">
              <Car className="w-5 h-5 text-farmhouse-wood-warm flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-farmhouse-slate-dark block">Pull-In Parking:</span>
                Spacious on-site parking lot accommodating standard vehicles, boat trailers, and bike racks.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-farmhouse-river flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-farmhouse-slate-dark block">Outdoor Picnic Seating:</span>
                Shaded picnic benches and grassy areas for families and groups to enjoy their cones.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Accessibility className="w-5 h-5 text-farmhouse-slate-dark flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-farmhouse-slate-dark block">Accessibility:</span>
                Ground-level entrance, ramp access, and accessible ordering counter windows.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Dog className="w-5 h-5 text-farmhouse-rust flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-farmhouse-slate-dark block">Pup Friendly:</span>
                Leashed dogs welcome in our outdoor lawn and patio area. Pup cups available!
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
