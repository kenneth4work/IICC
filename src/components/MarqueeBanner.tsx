import { MARQUEE_ITEMS } from '../data/mockData';

export default function MarqueeBanner() {
  return (
    <section id="marquee" className="relative bg-[#181818] border-y border-[#C5A059]/25 py-4 overflow-hidden select-none">
      {/* Infinite scrolling ticker */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="text-[11px] md:text-xs font-sans tracking-[0.24em] uppercase text-[#F5F5F3]/85 font-medium">
                {item}
              </span>
              <span className="mx-6 text-[#C5A059] text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
