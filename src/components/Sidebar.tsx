'use client';

import { useState } from 'react';

const navItems = [
  { id: 'profile', label: 'Professional Profile', icon: '👤' },
  { id: 'innovations', label: 'Pedagogical Innovations', icon: '💡' },
  { id: 'planner', label: 'Curriculum Fidelity Planner', icon: '📋' },
  { id: 'research', label: 'Research & Leadership', icon: '🎓' },
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
      className={`fixed left-0 top-0 h-full bg-primary text-white z-50 transition-all duration-300 flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight">GC Portal</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`sidebar-link w-full text-left ${
              active === item.id ? 'active' : ''
            }`}
            title={collapsed ? item.label : undefined}
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        {!collapsed && (
          <div className="text-xs text-white/60 text-center">
            Guru Cemerlang v1.0
          </div>
        )}
      </div>
    </aside>
  );
}
