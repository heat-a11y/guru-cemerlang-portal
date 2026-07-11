'use client';

import { useState } from 'react';

const milestones = [
  {
    year: '2005',
    grade: 'DG41',
    title: 'Initial Appointment',
    school: 'SMK Taman Desa',
    description: 'Commenced career as a full-time English Language teacher, laying the foundation for two decades of classroom practice.',
  },
  {
    year: '2010',
    grade: 'DG44',
    title: 'Senior Educator Promotion',
    school: 'SMK Taman Desa',
    description: 'Promoted to Senior Educator (DG44) after 5 years of dedicated service and consistent high performance.',
  },
  {
    year: '2015',
    grade: 'DG48',
    title: 'Master Educator',
    school: 'SMK Bandar Utama',
    description: 'Elevated to Master Educator rank, recognized for pedagogical leadership and curriculum development.',
  },
  {
    year: '2018',
    grade: 'DG52',
    title: 'Senior Master Educator',
    school: 'SMK Bandar Utama',
    description: 'Advanced to Senior Master Educator, mentoring junior teachers and leading department-wide initiatives.',
  },
  {
    year: '2020',
    grade: 'DG54',
    title: 'Lead Educator',
    school: 'SMK Cemerlang',
    description: 'Attained Lead Educator designation, overseeing cross-curricular innovation projects.',
  },
  {
    year: '2024',
    grade: 'DG44–DG54',
    title: 'Excellent Teacher Applicant',
    school: 'SMK Cemerlang',
    description: 'Current application for Guru Cemerlang promotion, reflecting sustained excellence across all domains.',
  },
];

export default function CareerTimeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

      <div className="space-y-8">
        {milestones.map((m, i) => (
          <div key={i} className="relative pl-16">
            <div className="timeline-dot absolute left-[18px] -translate-x-1/2 top-1" />

            <div
              className="metric-card cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                    {m.grade}
                  </span>
                  <h4 className="text-lg font-bold text-primary">{m.title}</h4>
                  <p className="text-sm text-gray-500">{m.school}</p>
                </div>
                <span className="text-accent font-bold text-lg whitespace-nowrap">{m.year}</span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded === i ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>

              <div className="mt-2">
                <span className="text-xs text-accent font-medium">
                  {expanded === i ? '▲ Less' : '▼ More'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
