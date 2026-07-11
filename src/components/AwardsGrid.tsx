const awards = [
  { title: 'Excellent Service Award (APC)', year: '2018, 2020, 2022, 2024', icon: '🏆', gradient: 'from-amber-300 to-yellow-500', description: 'Consistently recognized for outstanding performance and contribution to educational excellence.' },
  { title: 'Gold Award – Pedagogical Innovation', year: '2021', icon: '🥇', gradient: 'from-yellow-300 to-orange-500', description: 'National-level recognition for developing the Raindrop Method for ESL Narrative Mastery.' },
  { title: 'Gold Award – Teaching Aid Innovation', year: '2022', icon: '🥇', gradient: 'from-emerald-300 to-teal-500', description: 'Awarded for innovative digital teaching aids leveraging Computational Thinking frameworks.' },
  { title: 'Gold Award – Curriculum Design', year: '2023', icon: '🥇', gradient: 'from-blue-300 to-indigo-500', description: 'Recognized for outstanding curriculum alignment and HOTS-integrated lesson planning.' },
  { title: '20 Years Frontline Service', year: '2005–2025', icon: '⏳', gradient: 'from-purple-300 to-pink-500', description: 'Two decades of unwavering dedication to classroom instruction and student development.' },
  { title: 'District Best Teacher Award', year: '2019', icon: '📜', gradient: 'from-rose-300 to-red-500', description: 'Honored as the top-performing educator across the district for academic and co-curricular contributions.' },
];

export default function AwardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
      {awards.map((a, i) => (
        <div key={i} className="metric-card group relative overflow-hidden hover:-translate-y-2 cursor-default">
          {/* Gradient top bar */}
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${a.gradient}`} />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="flex items-start gap-3">
              <span className="text-3xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">{a.icon}</span>
              <div className="flex-1">
                <h4 className="font-bold text-primary text-sm leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-all">
                  {a.title}
                </h4>
                <span className={`text-xs font-semibold bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent`}>
                  {a.year}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed group-hover:text-gray-700 transition-colors">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
