"use client";

import { useEffect, useState } from "react";
import { getStoreStatus } from "@/lib/business-info";

interface StatusBadgeProps {
  showHours?: boolean;
  className?: string;
}

export default function StatusBadge({ showHours = false, className = "" }: StatusBadgeProps) {
  // Use client-side state to avoid SSR hydration mismatch for local time
  const [status, setStatus] = useState<{
    isOpen: boolean;
    statusText: string;
    todayHours: string;
  }>({
    isOpen: true,
    statusText: "Open Today",
    todayHours: "12:00 PM – 9:00 PM",
  });

  useEffect(() => {
    setStatus(getStoreStatus());
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full transition-colors ${
        status.isOpen
          ? "bg-farmhouse-river/10 text-farmhouse-river-dark border border-farmhouse-river/20"
          : "bg-farmhouse-rust/10 text-farmhouse-rust border border-farmhouse-rust/20"
      } ${className}`}
      aria-label={`Kelly's Ice Cream is currently ${status.statusText}. Today's hours: ${status.todayHours}`}
    >
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-farmhouse-river opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? "bg-farmhouse-river" : "bg-farmhouse-rust"
          }`}
        />
      </span>
      <span className="font-semibold tracking-wide uppercase text-[11px]">{status.statusText}</span>
      {showHours && (
        <>
          <span className="text-farmhouse-slate/40">•</span>
          <span className="text-farmhouse-slate font-normal">{status.todayHours}</span>
        </>
      )}
    </div>
  );
}
