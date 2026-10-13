export interface BusinessHours {
  day: string;
  shortDay: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
  openTime: string;
  closeTime: string;
  isClosed?: boolean;
}

export const BUSINESS_INFO = {
  name: "Kelly's Ice Cream",
  tagline: "Homemade here. Worth the stop.",
  descriptor: "Part ice cream destination, part family gathering place, and part gateway to the Delaware River, Water Gap, and Slate Belt.",
  address: {
    street: "3416 S Delaware Dr",
    corridor: "Route 611",
    city: "Mount Bethel",
    state: "PA",
    zip: "18343",
    full: "3416 S Delaware Dr, Mount Bethel, PA 18343",
  },
  phone: "(570) 897-6212",
  phoneRaw: "+15708976212",
  email: "hello@kellysicecream.com",
  directionsUrl: "https://maps.google.com/?q=3416+S+Delaware+Dr,+Mount+Bethel,+PA+18343",
  socials: {
    facebook: "https://facebook.com/kellysicecreampa",
    instagram: "https://instagram.com/kellysicecreampa",
  },
  lastMenuUpdate: "October 12, 2026",
  hours: [
    { day: "Sunday", shortDay: "Sun", dayIndex: 0, openTime: "12:00 PM", closeTime: "9:00 PM" },
    { day: "Monday", shortDay: "Mon", dayIndex: 1, openTime: "12:00 PM", closeTime: "9:00 PM" },
    { day: "Tuesday", shortDay: "Tue", dayIndex: 2, openTime: "12:00 PM", closeTime: "9:00 PM" },
    { day: "Wednesday", shortDay: "Wed", dayIndex: 3, openTime: "12:00 PM", closeTime: "9:00 PM" },
    { day: "Thursday", shortDay: "Thu", dayIndex: 4, openTime: "12:00 PM", closeTime: "9:00 PM" },
    { day: "Friday", shortDay: "Fri", dayIndex: 5, openTime: "11:30 AM", closeTime: "9:30 PM" },
    { day: "Saturday", shortDay: "Sat", dayIndex: 6, openTime: "11:30 AM", closeTime: "9:30 PM" },
  ] as BusinessHours[],
  navLinks: [
    { name: "Menu", href: "/menu" },
    { name: "Flavors", href: "/flavors" },
    { name: "Cakes", href: "/cakes" },
    { name: "Visit", href: "/visit" },
    { name: "Explore", href: "/explore" },
    { name: "Our Story", href: "/story" },
  ],
};

export function getStoreStatus(customDate?: Date) {
  const now = customDate || new Date();
  const dayIndex = now.getDay();
  const currentSchedule = BUSINESS_INFO.hours.find((h) => h.dayIndex === dayIndex);

  if (!currentSchedule || currentSchedule.isClosed) {
    return {
      isOpen: false,
      statusText: "Closed Today",
      todayHours: "Closed",
      message: "Opens tomorrow at 12:00 PM",
    };
  }

  // Parse hours for basic open check
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  // Approx 12:00 PM (12.0) to 9:00 PM (21.0)
  const isWeekend = dayIndex === 5 || dayIndex === 6;
  const openDec = isWeekend ? 11.5 : 12.0;
  const closeDec = isWeekend ? 21.5 : 21.0;

  const isOpen = currentTimeDec >= openDec && currentTimeDec < closeDec;

  return {
    isOpen,
    statusText: isOpen ? "Open Today" : "Closed Now",
    todayHours: `${currentSchedule.openTime} – ${currentSchedule.closeTime}`,
    schedule: currentSchedule,
  };
}
