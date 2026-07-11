const awards = [
  {
    title: 'Excellent Service Award (APC)',
    year: '2018, 2020, 2022, 2024',
    icon: '🏆',
    description: 'Consistently recognized for outstanding performance and contribution to educational excellence.',
  },
  {
    title: 'Gold Award – Pedagogical Innovation',
    year: '2021',
    icon: '🥇',
    description: 'National-level recognition for developing the Raindrop Method for ESL Narrative Mastery.',
  },
  {
    title: 'Gold Award – Teaching Aid Innovation',
    year: '2022',
    icon: '🥇',
    description: 'Awarded for innovative digital teaching aids leveraging Computational Thinking frameworks.',
  },
  {
    title: 'Gold Award – Curriculum Design',
    year: '2023',
    icon: '🥇',
    description: 'Recognized for outstanding curriculum alignment and HOTS-integrated lesson planning.',
  },
  {
    title: '20 Years Frontline Service',
    year: '2005–2025',
    icon: '⏳',
    description: 'Two decades of unwavering dedication to classroom instruction and student development.',
  },
  {
    title: 'District Best Teacher Award',
    year: '2019',
    icon: '📜',
    description: 'Honored as the top-performing educator across the district for academic and co-curricular contributions.',
  },
];

export default function AwardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {awards.map((a, i) => (
        <div key={i} className="metric-card group">
          <div className="flex items-start gap-3">
            <span className="text-3xl group-hover:scale-110 transition-transform">{a.icon}</span>
            <div>
              <h4 className="font-bold text-primary text-sm leading-tight mb-1">{a.title}</h4>
              <span className="text-xs text-accent font-semibold">{a.year}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">{a.description}</p>
        </div>
      ))}
    </div>
  );
}
