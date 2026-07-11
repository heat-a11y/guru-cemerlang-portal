'use client';

import { useState } from 'react';

const navItems = [
  { id: 'profile', label: 'Professional Profile', icon: '👤', color: 'from-blue-400 to-cyan-300' },
  { id: 'innovations', label: 'Pedagogical Innovations', icon: '💡', color: 'from-amber-400 to-orange-300' },
  { id: 'planner', label: 'Curriculum Fidelity Planner', icon: '📋', color: 'from-emerald-400 to-teal-300' },
  { id: 'research', label: 'Research & Leadership', icon: '🎓', color: 'from-purple-400 to-pink-300' },
];

export default function Sidebar() {
  const [active, setActive] = useState('profile');
  const [collapsed, setCollapsed] = useState(false);

  const scrollToSection = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f33] via-[#1a2f4f] to-[#0f1f33]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {!collapsed && (
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              GC Portal
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg
              className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`sidebar-link w-full text-left ${
                active === item.id ? 'active' : 'text-white/70 hover:text-white'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <span className={`text-xl ${active === item.id ? 'animate-float-slow' : ''}`}>
                {item.icon}
              </span>
              {!collapsed && (
                <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
              )}
              {active === item.id && !collapsed && (
                <span className={`ml-auto w-2 h-2 rounded-full bg-gradient-to-r ${item.color} animate-pulse`} />
              )}
            </button>
          ))}
        </nav>

        <div className="relative z-10 p-4 border-t border-white/10">
          {!collapsed && (
            <div className="text-xs text-white/40 text-center">
              ✨ Guru Cemerlang v1.0
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
