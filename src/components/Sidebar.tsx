'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'profile', label: 'Professional Profile', icon: '👤', color: 'from-blue-400 to-cyan-300' },
  { id: 'innovations', label: 'Pedagogical Innovations', icon: '💡', color: 'from-amber-400 to-orange-300' },
  { id: 'planner', label: 'Curriculum Fidelity Planner', icon: '📋', color: 'from-emerald-400 to-teal-300' },
  { id: 'research', label: 'Research & Leadership', icon: '🎓', color: 'from-purple-400 to-pink-300' },
];

export default function Sidebar() {
  const [active, setActive] = useState('profile');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]!;
        if (el.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sidebarContent = (
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            GC Portal
          </span>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setMobileOpen(false); setCollapsed(!collapsed); }}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white hidden md:block"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white md:hidden"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-40 md:hidden w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl shadow-lg flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all"
        aria-label="Open navigation"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 flex-col ${
          collapsed ? 'md:w-16' : 'md:w-64'
        } ${
          mobileOpen ? 'flex w-64' : 'hidden md:flex'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f33] via-[#1a2f4f] to-[#0f1f33]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        {sidebarContent}
      </aside>
    </>
  );
}
