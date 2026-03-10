"use client";

export default function AnnouncementBar() {
  const items = [
    "🚚 FREE SHIPPING ORDERS OVER $15",
    "🎉 GRAND OPENING SALE",
    "🔥 UP TO 30% OFF ALL ITEMS",
  ];

  // We multiply the array to ensure it's wider than the screen
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="fixed top-20 left-0 w-full bg-neutral-100 overflow-hidden z-40">
      <div className="marquee-track">
        {duplicatedItems.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}