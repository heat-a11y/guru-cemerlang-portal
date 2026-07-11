'use client';

export default function PerformanceMetrics() {
  const metrics = [
    { year: '2020', score: 94.20, color: '#3b82f6', label: 'PBPPP Score' },
    { year: '2021', score: 95.10, color: '#06b6d4', label: 'PBPPP Score' },
    { year: '2022', score: 95.80, color: '#f59e0b', label: 'PBPPP Score' },
    { year: '2023', score: 96.46, color: '#f97316', label: 'PBPPP Score' },
    { year: '2024', score: 97.75, color: '#10b981', label: 'PBPPP Score' },
  ];

  const circumference = 2 * Math.PI * 54;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
      {metrics.map((m) => {
        const progress = m.score / 100;
        const offset = circumference - progress * circumference;

        return (
          <div key={m.year} className="metric-card flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
            <div className="relative w-28 h-28 mb-3">
              {/* Glow effect behind gauge */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: m.color }}
              />
              <svg className="w-28 h-28 -rotate-90 relative z-10" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke={m.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-1500 ease-out drop-shadow-lg"
                  style={{ filter: `drop-shadow(0 0 6px ${m.color}40)` }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: m.color }}>{m.score}%</span>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{m.year}</span>
            <span className="text-xs text-gray-400">{m.label}</span>

            {/* Trend arrow */}
            {metrics.indexOf(m) > 0 && m.score > metrics[metrics.indexOf(m) - 1].score && (
              <span className="text-xs text-emerald-500 font-bold mt-1 animate-bounce-in">▲ +{(m.score - metrics[metrics.indexOf(m) - 1].score).toFixed(2)}%</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
