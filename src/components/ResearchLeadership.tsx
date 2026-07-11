const publications = [
  {
    title: 'Teacher Motivation, Time Preference, Information Overload, and Pedagogical Practices',
    journal: 'Journal of ESL Practitioner',
    year: '2024',
    type: 'Qualitative Constructivist Grounded Theory',
    description:
      'An in-depth qualitative study exploring the intersection of teacher motivation, time management preferences, information overload, and their collective impact on pedagogical practices in ESL classrooms.',
  },
  {
    title: 'The Raindrop Method: A Computational Thinking Approach to ESL Narrative Writing',
    journal: 'Malaysian Journal of ELT Research',
    year: '2023',
    type: 'Action Research',
    description:
      'Presents the Raindrop Method as a systematic scaffolding framework using CT decomposition and pattern recognition to improve narrative writing outcomes for weak-to-intermediate learners.',
  },
  {
    title: 'DSKP Alignment Strategies for Reducing Cognitive Load in Lesson Planning',
    journal: 'International Journal of Education & Pedagogy',
    year: '2022',
    type: 'Conceptual Paper',
    description:
      'Proposes practical strategies for maintaining DSKP curriculum fidelity while minimizing information overload through structured lesson design frameworks.',
  },
];

const leadershipRoles = [
  {
    title: 'District Technical Official',
    organization: 'MSSPK Basketball',
    period: '2018–Present',
    icon: '🏀',
    description: 'Officiating and coordinating district-level basketball competitions, ensuring fair play and adherence to sports regulations.',
  },
  {
    title: 'State Technical Chairman',
    organization: 'MSSPK Basketball',
    period: '2020–Present',
    icon: '🏅',
    description: 'Leading technical committees for state-level basketball, overseeing referee development and competition standards.',
  },
  {
    title: 'Master Trainer',
    organization: 'Ministry of Education',
    period: '2019–Present',
    icon: '🎓',
    description: 'Conducting professional development workshops for peer educators on pedagogical innovation and curriculum alignment.',
  },
  {
    title: 'Head of English Panel',
    organization: 'SMK Cemerlang',
    period: '2016–Present',
    icon: '📚',
    description: 'Leading the English Language department in curriculum planning, teacher mentoring, and academic program development.',
  },
];

const resources = [
  { name: 'Raindrop Method Training Module', format: 'PDF', size: '2.4 MB' },
  { name: 'Trilingual Learning Glossary (EN-BM-Mandarin)', format: 'XLSX', size: '1.1 MB' },
  { name: 'Qualitative Vignette Hypothetical Scenarios', format: 'DOCX', size: '856 KB' },
  { name: 'HOTS-Integrated Lesson Plan Template', format: 'PDF', size: '1.8 MB' },
  { name: 'PBPPP Performance Tracking Dashboard', format: 'XLSX', size: '3.2 MB' },
];

export default function ResearchLeadership() {
  return (
    <section id="research">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Research & Leadership</h2>
        <p className="text-gray-500 mt-1">Academic contributions, co-curricular leadership, and professional resources</p>
      </div>

      {/* Publications */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h3 className="text-lg font-bold text-primary">Academic Publications Repository</h3>
        </div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div key={i} className="metric-card">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h4 className="font-bold text-primary">{pub.title}</h4>
                  <p className="text-sm text-gray-500">
                    {pub.journal} • {pub.year}
                  </p>
                </div>
                <span className="inline-block px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full whitespace-nowrap">
                  {pub.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h3 className="text-lg font-bold text-primary">Co-Curricular & Sports Leadership</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadershipRoles.map((role, i) => (
            <div key={i} className="metric-card group">
              <div className="flex items-start gap-3">
                <span className="text-3xl group-hover:scale-110 transition-transform">{role.icon}</span>
                <div>
                  <h4 className="font-bold text-primary">{role.title}</h4>
                  <p className="text-xs text-accent font-semibold">{role.organization}</p>
                  <p className="text-xs text-gray-400">{role.period}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h3 className="text-lg font-bold text-primary">Downloadable Resource Matrix</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left p-4 font-semibold">Resource Name</th>
                <th className="text-left p-4 font-semibold hidden sm:table-cell">Format</th>
                <th className="text-left p-4 font-semibold hidden sm:table-cell">Size</th>
                <th className="text-right p-4 font-semibold">Download</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((r, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-primary">{r.name}</td>
                  <td className="p-4 text-gray-500 hidden sm:table-cell">
                    <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {r.format}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400 hidden sm:table-cell">{r.size}</td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg hover:bg-accent-light transition-colors">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
