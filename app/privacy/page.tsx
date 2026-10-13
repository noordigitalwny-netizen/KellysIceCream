import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Kelly's Ice Cream in Mount Bethel, PA.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-farmhouse-cream-border pb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-farmhouse-slate-dark">
          Privacy Policy
        </h1>
        <p className="text-xs text-farmhouse-slate/70 mt-1">Last updated: {BUSINESS_INFO.lastMenuUpdate}</p>
      </div>

      <div className="space-y-6 text-sm text-farmhouse-slate leading-relaxed">
        <p>
          Kelly&apos;s Ice Cream (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values the privacy of our website visitors. This Privacy Policy outlines the information we collect and how it is used.
        </p>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">Information Collection & Use</h2>
        <p>
          We do not sell, rent, or share personal information with third parties for marketing purposes. When you contact us via telephone or email for cake orders or inquiries, we only collect the information necessary to fulfill your request (such as your name, phone number, and pickup specifications).
        </p>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">Website Analytics & Cookies</h2>
        <p>
          We may use privacy-respecting analytics tools to evaluate general site performance (such as page visits, popular menu items, and direction clicks) to improve user experience. No personally identifiable tracking data is captured.
        </p>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">External Links</h2>
        <p>
          Our site includes links to third-party services such as Google Maps for driving directions and the National Park Service for trail and river conditions. We are not responsible for the privacy practices or content of external websites.
        </p>

        <h2 className="font-serif text-xl font-bold text-farmhouse-slate-dark">Questions & Inquiries</h2>
        <p>
          If you have questions regarding our privacy practices, please contact us at {BUSINESS_INFO.email} or call {BUSINESS_INFO.phone}.
        </p>
      </div>
    </div>
  );
}
