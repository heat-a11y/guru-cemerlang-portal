export default function HeroSection() {
  return (
    <section className="rainbow-gradient text-white rounded-3xl p-8 md:p-12 mb-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center">
          <span className="text-5xl">👨‍🏫</span>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Application for Promotion to Excellent Teacher
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-accent-light mb-1">
            Guru Cemerlang
          </p>
          <p className="text-white/80 text-sm md:text-base">
            Dedicated Educator | Curriculum Innovator | Instructional Leader
          </p>

          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/15 rounded-full text-xs font-medium backdrop-blur-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              heat.a11y@example.edu
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/15 rounded-full text-xs font-medium backdrop-blur-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +60 12-345 6789
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/15 rounded-full text-xs font-medium backdrop-blur-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ministry of Education Malaysia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
