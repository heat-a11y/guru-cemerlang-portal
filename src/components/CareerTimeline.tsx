'use client';

import { useState } from 'react';

const milestones = [
  { year: '2005', grade: 'DG41', title: 'Initial Appointment', school: 'SMK Taman Desa', color: 'from-blue-400 to-blue-600', description: 'Commenced career as a full-time English Language teacher, laying the foundation for two decades of classroom practice.' },
  { year: '2010', grade: 'DG44', title: 'Senior Educator Promotion', school: 'SMK Taman Desa', color: 'from-teal-400 to-teal-600', description: 'Promoted to Senior Educator (DG44) after 5 years of dedicated service and consistent high performance.' },
  { year: '2015', grade: 'DG48', title: 'Master Educator', school: 'SMK Bandar Utama', color: 'from-amber-400 to-amber-600', description: 'Elevated to Master Educator rank, recognized for pedagogical leadership and curriculum development.' },
  { year: '2018', grade: 'DG52', title: 'Senior Master Educator', school: 'SMK Bandar Utama', color: 'from-orange-400 to-orange-600', description: 'Advanced to Senior Master Educator, mentoring junior teachers and leading department-wide initiatives.' },
  { year: '2020', grade: 'DG54', title: 'Lead Educator', school: 'SMK Cemerlang', color: 'from-purple-400 to-purple-600', description: 'Attained Lead Educator designation, overseeing cross-curricular innovation projects.' },
  { year: '2024', grade: 'DG44–DG54', title: 'Excellent Teacher Applicant', school: 'SMK Cemerlang', color: 'from-accent to-amber-500', description: 'Current application for Guru Cemerlang promotion, reflecting sustained excellence across all domains.' },
];

export default function CareerTimeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Gradient timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-teal-400 via-amber-400 via-orange-400 via-purple-400 to-accent rounded-full" />

      <div className="space-y-8">
        {milestones.map((m, i) => (
          <div key={i} className="relative pl-16 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
            {/* Animated dot */}
            <div className="timeline-dot absolute left-[18px] -translate-x-1/2 top-1">
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${m.color} shadow-lg`} />
            </div>

            <div
              className={`metric-card cursor-pointer group border-l-4 transition-all duration-300 ${
                expanded === i ? 'shadow-2xl scale-[1.01]' : ''
              }`}
              style={{ borderLeftColor: m.color.split(' ')[1].replace(')', '').replace('from-', '').replace('to-', '').split('-').pop() ? '#f59e0b' : '#3b82f6' }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-block px-2.5 py-0.5 bg-gradient-to-r ${m.color} text-white text-xs font-bold rounded-full shadow-sm`}>
                      {m.grade}
                    </span>
                    {i === milestones.length - 1 && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent text-xs font-bold rounded-full animate-pulse-glow">
                        ⭐ Current
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all">
                    {m.title}
                  </h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {m.school}
                  </p>
                </div>
                <span className="text-accent font-bold text-lg whitespace-nowrap bg-amber-50 px-3 py-1 rounded-lg">
                  {m.year}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  expanded === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="h-px bg-gradient-to-r from-accent/50 to-transparent mb-3" />
                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>

              <div className="mt-2 flex items-center gap-1 text-xs text-accent font-medium">
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  {expanded === i ? '▲ Show less' : '▼ Click for details'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
