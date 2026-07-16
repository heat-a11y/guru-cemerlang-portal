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
      {/* Jalur Gemilang flag stripe */}
      <div className="flex h-1 w-full">
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#CC0000]" />
        <span className="flex-1 bg-white" />
      </div>
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <svg viewBox="0 0 30 20" className="w-6 h-4 rounded-sm shadow-sm">
              <rect width="30" height="20" fill="#000080" />
              <rect y="2" width="30" height="2" fill="#CC0000" />
              <rect y="6" width="30" height="2" fill="#CC0000" />
              <rect y="10" width="30" height="2" fill="#CC0000" />
              <rect y="14" width="30" height="2" fill="#CC0000" />
              <rect y="18" width="30" height="2" fill="#CC0000" />
              <rect width="14" height="12" fill="#000080" />
              <polygon points="7,1 9,5 13,5 10,8 11,12 7,9 3,12 4,8 1,5 5,5" fill="#FFCC00" />
            </svg>
            <span className="text-[#FFCC00]">Guru</span> Cemerlang
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

      {/* Songket-inspired decorative border */}
      <div className="relative z-10 px-4 py-1 border-t border-white/10">
        {!collapsed && (
          <div className="flex justify-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]/60" />
          </div>
        )}
      </div>
      <div className="relative z-10 p-4 pt-2 border-t border-white/10">
        {!collapsed && (
          <div className="text-[10px] text-white/30 text-center leading-relaxed">
            <div className="flex items-center justify-center gap-1 mb-1">
              <svg viewBox="0 0 16 12" className="w-3 h-2.5">
                <rect width="16" height="12" fill="#000080" />
                <rect y="1" width="16" height="1.5" fill="#CC0000" />
                <rect y="3.5" width="16" height="1.5" fill="#CC0000" />
                <rect y="6" width="16" height="1.5" fill="#CC0000" />
                <rect y="8.5" width="16" height="1.5" fill="#CC0000" />
                <rect y="11" width="16" height="1" fill="#CC0000" />
                <rect width="7" height="7" fill="#000080" />
                <polygon points="3.5,0.5 4.5,2.5 6.5,2.5 5,4 5.5,6 3.5,4.5 1.5,6 2,4 0.5,2.5 2.5,2.5" fill="#FFCC00" />
              </svg>
              <span className="tracking-wider">MALAYSIA</span>
            </div>
            ✦ Guru Cemerlang Portal v1.0 ✦
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#000080] via-[#1a2f4f] to-[#0f1f33]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNDBsMTAtMTAgMTAgMTAtMTAgMTB6TTUwIDQwbDEwLTEwIDEwIDEwLTEwIDEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48cGF0aCBkPSJNMjAgNzBsMTAtMTAgMTAgMTAtMTAgMTB6TTUwIDcwbDEwLTEwIDEwIDEwLTEwIDEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48cGF0aCBkPSJNMjAgMTBsMTAtMTAgMTAgMTAtMTAgMTB6TTUwIDEwbDEwLTEwIDEwIDEwLTEwIDEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')] opacity-40" />
        {sidebarContent}
      </aside>
    </>
  );
}
