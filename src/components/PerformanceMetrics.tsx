'use client';

export default function PerformanceMetrics() {
  const metrics = [
    { year: '2020', score: 94.20, label: 'PBPPP Score' },
    { year: '2021', score: 95.10, label: 'PBPPP Score' },
    { year: '2022', score: 95.80, label: 'PBPPP Score' },
    { year: '2023', score: 96.46, label: 'PBPPP Score' },
    { year: '2024', score: 97.75, label: 'PBPPP Score' },
  ];

  const circumference = 2 * Math.PI * 54;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((m) => {
        const progress = m.score / 100;
        const offset = circumference - progress * circumference;

        return (
          <div key={m.year} className="metric-card flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-3">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke={m.score >= 97 ? '#10b981' : m.score >= 95 ? '#f59e0b' : '#3b82f6'}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{m.score}%</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{m.year}</span>
            <span className="text-xs text-gray-400">{m.label}</span>
          </div>
        );
      })}
    </div>
  );
}
