import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility commitment and WCAG 2.2 AA standards statement for Kelly's Ice Cream.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-farmhouse-cream-border pb-6 flex items-center gap-3">
        <div className="p-3 bg-farmhouse-river/10 rounded-2xl text-farmhouse-river">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
            Accessibility Statement
          </h1>
          <p className="text-xs text-farmhouse-slate/70 mt-1">Conforming to WCAG 2.2 Level AA Guidelines</p>
        </div>
      </div>

      <div className="space-y-6 text-sm text-farmhouse-slate leading-relaxed">
        <p>
          At Kelly&apos;s Ice Cream, we are committed to providing a website that is accessible to all guests, including individuals with disabilities. We continually review and enhance the digital user experience to comply with relevant accessibility standards, including the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.
        </p>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">Accessibility Features</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>High contrast color ratios exceeding 4.5:1 for body copy and 3:1 for large headlines.</li>
          <li>Full keyboard navigation support with visible focus rings on interactive elements.</li>
          <li>Descriptive semantic HTML structure, ARIA roles, and labels on forms and buttons.</li>
          <li>Structured live text menus rather than inaccessible scanned PDF images.</li>
          <li>Responsive layouts optimized for zoom and screen magnification up to 200%.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">Physical Parlor Accessibility</h2>
        <p>
          Our parlor at {BUSINESS_INFO.address.full} features ground-level entry, dedicated accessible parking spaces, step-free ordering windows, and accessible outdoor picnic bench seating.
        </p>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">Feedback & Assistance</h2>
        <p>
          If you encounter any difficulty accessing any part of this website or require assistance with menu details or cake orders, please call us directly at{" "}
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-farmhouse-river font-semibold underline">
            {BUSINESS_INFO.phone}
          </a>{" "}
          or email us at{" "}
          <a href={`mailto:${BUSINESS_INFO.email}`} className="text-farmhouse-river font-semibold underline">
            {BUSINESS_INFO.email}
          </a>
          . We are always happy to help.
        </p>
      </div>
    </div>
  );
}
