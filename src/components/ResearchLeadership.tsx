const publications = [
  {
    title: 'Teacher Motivation, Time Preference, Information Overload, and Pedagogical Practices',
    journal: 'Journal of ESL Practitioner',
    year: '2024',
    type: 'Qualitative Grounded Theory',
    icon: '📖',
    gradient: 'from-blue-400 to-indigo-500',
    description: 'An in-depth qualitative study exploring the intersection of teacher motivation, time management preferences, information overload, and their collective impact on pedagogical practices in ESL classrooms.',
  },
  {
    title: 'The Raindrop Method: A CT Approach to ESL Narrative Writing',
    journal: 'Malaysian Journal of ELT Research',
    year: '2023',
    type: 'Action Research',
    icon: '🌧️',
    gradient: 'from-amber-400 to-orange-500',
    description: 'Presents the Raindrop Method as a systematic scaffolding framework using CT decomposition and pattern recognition to improve narrative writing outcomes for weak-to-intermediate learners.',
  },
  {
    title: 'DSKP Alignment Strategies for Reducing Cognitive Load in Lesson Planning',
    journal: 'International Journal of Education & Pedagogy',
    year: '2022',
    type: 'Conceptual Paper',
    icon: '📋',
    gradient: 'from-emerald-400 to-teal-500',
    description: 'Proposes practical strategies for maintaining DSKP curriculum fidelity while minimizing information overload through structured lesson design frameworks.',
  },
];

const leadershipRoles = [
  { title: 'District Technical Official', organization: 'MSSPK Basketball', period: '2018–Present', icon: '🏀', gradient: 'from-orange-400 to-red-500', description: 'Officiating and coordinating district-level basketball competitions, ensuring fair play and adherence to sports regulations.' },
  { title: 'State Technical Chairman', organization: 'MSSPK Basketball', period: '2020–Present', icon: '🏅', gradient: 'from-yellow-400 to-amber-500', description: 'Leading technical committees for state-level basketball, overseeing referee development and competition standards.' },
  { title: 'Master Trainer', organization: 'Ministry of Education', period: '2019–Present', icon: '🎓', gradient: 'from-purple-400 to-pink-500', description: 'Conducting professional development workshops for peer educators on pedagogical innovation and curriculum alignment.' },
  { title: 'Head of English Panel', organization: 'SMK Cemerlang', period: '2016–Present', icon: '📚', gradient: 'from-blue-400 to-cyan-500', description: 'Leading the English Language department in curriculum planning, teacher mentoring, and academic program development.' },
];

const resources = [
  { name: 'Raindrop Method Training Module', format: 'PDF', size: '2.4 MB', color: 'from-amber-400 to-orange-500' },
  { name: 'Trilingual Learning Glossary (EN-BM-Mandarin)', format: 'XLSX', size: '1.1 MB', color: 'from-emerald-400 to-teal-500' },
  { name: 'Qualitative Vignette Hypothetical Scenarios', format: 'DOCX', size: '856 KB', color: 'from-blue-400 to-indigo-500' },
  { name: 'HOTS-Integrated Lesson Plan Template', format: 'PDF', size: '1.8 MB', color: 'from-purple-400 to-pink-500' },
  { name: 'PBPPP Performance Tracking Dashboard', format: 'XLSX', size: '3.2 MB', color: 'from-cyan-400 to-blue-500' },
];

export default function ResearchLeadership() {
  return (
    <section id="research">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Research & Leadership</h2>
        <p className="text-gray-500 mt-1">🌟 Academic contributions, co-curricular leadership, and professional resources</p>
      </div>

      {/* Publications */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full" />
          <h3 className="text-lg font-bold text-primary">Academic Publications Repository</h3>
        </div>

        <div className="space-y-4 stagger-children">
          {publications.map((pub, i) => (
            <div key={i} className="metric-card group relative overflow-hidden hover:-translate-y-2">
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${pub.gradient} rounded-l-xl`} />
              <div className="absolute -top-6 -right-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity select-none">{pub.icon}</div>

              <div className="relative z-10 pl-2">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-all">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                      <span>{pub.journal}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{pub.year}</span>
                    </p>
                  </div>
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${pub.gradient} text-white text-xs font-bold rounded-full shadow-sm whitespace-nowrap`}>
                    {pub.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{pub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
          <h3 className="text-lg font-bold text-primary">Co-Curricular & Sports Leadership</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
          {leadershipRoles.map((role, i) => (
            <div key={i} className="metric-card group relative overflow-hidden hover:-translate-y-2 cursor-default">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${role.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <span className="text-3xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">{role.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-all">
                      {role.title}
                    </h4>
                    <p className="text-xs font-semibold text-accent">{role.organization}</p>
                    <p className="text-xs text-gray-400">{role.period}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed group-hover:text-gray-700 transition-colors">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full" />
          <h3 className="text-lg font-bold text-primary">Downloadable Resource Matrix</h3>
        </div>

        <div className="glass-card overflow-hidden shadow-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-primary via-primary-light to-primary text-white">
                <th className="text-left p-4 font-semibold">Resource Name</th>
                <th className="text-left p-4 font-semibold hidden sm:table-cell">Format</th>
                <th className="text-left p-4 font-semibold hidden sm:table-cell">Size</th>
                <th className="text-right p-4 font-semibold">Download</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((r, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-200 group">
                  <td className="p-4 font-medium text-primary flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${r.color} inline-block`} />
                    {r.name}
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <span className={`inline-block px-2.5 py-1 bg-gradient-to-r ${r.color} text-white text-xs font-bold rounded-lg`}>
                      {r.format}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400 hidden sm:table-cell font-mono text-xs">{r.size}</td>
                  <td className="p-4 text-right">
                    <button className="px-4 py-2 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
                      ⬇ Download
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
