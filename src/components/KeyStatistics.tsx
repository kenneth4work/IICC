import { KEY_STATISTICS } from '../data/mockData';

export default function KeyStatistics() {
  return (
    <section className="relative bg-[#FAF8F5] border-b border-[#C5A059]/20 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A059]/20">
          {KEY_STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="py-6 sm:py-0 px-4 lg:px-8 text-center flex flex-col items-center justify-center first:pl-0 last:pr-0"
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A1A18] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs lg:text-sm font-sans uppercase tracking-[0.2em] text-[#9E7B3B] font-bold">
                  {stat.unit}
                </span>
              </div>
              <h4 className="font-serif-luxury text-lg text-[#1A1A18] font-medium tracking-wide mb-1.5">
                {stat.label}
              </h4>
              <p className="text-xs text-[#73726E] font-sans max-w-[210px] leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
