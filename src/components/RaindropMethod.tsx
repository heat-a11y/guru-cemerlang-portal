'use client';

import { useState } from 'react';

const cloudIdeas = [
  'My best holiday ever',
  'I feel happy when...',
  'The most exciting adventure',
  'A person I admire',
];

const whPrompts = [
  { q: 'Who?', hint: 'Who is involved in your story?', icon: '👤' },
  { q: 'What?', hint: 'What happened or will happen?', icon: '❓' },
  { q: 'Where?', hint: 'Where does the story take place?', icon: '📍' },
  { q: 'When?', hint: 'When did it happen?', icon: '⏰' },
  { q: 'Why?', hint: 'Why did it happen or why is it important?', icon: '💭' },
  { q: 'How?', hint: 'How did it make you feel or how was it resolved?', icon: '🔍' },
];

export default function RaindropMethod() {
  const [selectedIdea, setSelectedIdea] = useState(0);
  const [activePhase, setActivePhase] = useState<'cloud' | 'raindrops' | 'ground'>('cloud');

  const sampleNarrative = `My most memorable holiday was when I visited Langkawi with my family during the school break. It happened in December last year. The crystal-clear waters and golden beaches made it feel like paradise. More importantly, this trip taught me the value of spending quality time with loved ones. I learned that happiness is not about grand adventures but about the simple moments shared with family.`;

  return (
    <section id="innovations">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Pedagogical Innovations</h2>
        <p className="text-gray-500 mt-1">✨ Signature Innovation Showcase — The Raindrop Method for ESL Narrative Mastery</p>
      </div>

      {/* Phase selector - responsive wrapping */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
        {([
          { key: 'cloud', label: 'The Cloud', icon: '☁️', color: 'from-blue-400 to-blue-600' },
          { key: 'raindrops', label: 'The Raindrops', icon: '🌧️', color: 'from-indigo-400 to-indigo-600' },
          { key: 'ground', label: 'The Ground', icon: '🌱', color: 'from-emerald-400 to-emerald-600' },
        ] as const).map((phase) => (
          <button
            key={phase.key}
            onClick={() => setActivePhase(phase.key)}
            className={`px-4 md:px-5 py-2.5 md:py-3 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 md:gap-2 ${
              activePhase === phase.key
                ? `bg-gradient-to-r ${phase.color} text-white shadow-xl scale-105 md:scale-110`
                : 'glass-card text-gray-600 hover:shadow-lg hover:scale-105 border border-gray-100'
            }`}
          >
            <span className={activePhase === phase.key ? 'animate-float-slow' : ''}>{phase.icon}</span>
            {phase.label}
          </button>
        ))}
      </div>

      <div className="space-y-4 md:space-y-6">
        {/* The Cloud */}
        <div
          className={`rounded-2xl p-5 md:p-8 transition-all duration-500 relative overflow-hidden ${
            activePhase === 'cloud'
              ? 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-2 border-blue-200 shadow-2xl scale-100 opacity-100'
              : 'bg-gray-50 border-2 border-gray-100 scale-95 opacity-50 blur-[1px]'
          }`}
        >
          {activePhase === 'cloud' && (
            <div className="absolute -top-10 -right-10 text-6xl md:text-8xl opacity-10 animate-float-slow select-none pointer-events-none">☁️</div>
          )}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl animate-float-slow">☁️</span>
            <div>
              <h3 className="text-base md:text-lg font-bold text-primary">The Cloud — Broad Ideas</h3>
              <p className="text-xs text-gray-500">Unstructured creative writing ideas from learners</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {cloudIdeas.map((idea, i) => (
              <button
                key={i}
                onClick={() => setSelectedIdea(i)}
                className={`p-3 md:p-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  selectedIdea === i
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg scale-105 -translate-y-1'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 border border-blue-100 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {selectedIdea === i && <span className="block text-[10px] md:text-xs mb-1">✦ Selected</span>}
                {idea}
              </button>
            ))}
          </div>
        </div>

        {/* The Raindrops */}
        <div
          className={`rounded-2xl p-5 md:p-8 transition-all duration-500 relative overflow-hidden ${
            activePhase === 'raindrops'
              ? 'bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 border-2 border-indigo-200 shadow-2xl scale-100 opacity-100'
              : 'bg-gray-50 border-2 border-gray-100 scale-95 opacity-50 blur-[1px]'
          }`}
        >
          {activePhase === 'raindrops' && (
            <div className="absolute -bottom-5 -left-5 text-6xl md:text-8xl opacity-10 select-none pointer-events-none">🌧️</div>
          )}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl" style={{ animation: 'raindrop-fall 0.6s ease-out' }}>🌧️</span>
            <div>
              <h3 className="text-base md:text-lg font-bold text-primary">The Raindrops — CT Decomposition</h3>
              <p className="text-xs text-gray-500">Computational Thinking: Decomposition & Pattern Recognition</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 animate-rain-fall">
            {whPrompts.map((prompt, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <span className="text-base md:text-lg">{prompt.icon}</span>
                  <span className="inline-block px-2 py-0.5 md:px-2.5 md:py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] md:text-xs font-bold rounded-full">
                    {prompt.q}
                  </span>
                </div>
                <p className="text-[11px] md:text-xs text-gray-500 group-hover:text-gray-700 transition-colors">{prompt.hint}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Ground */}
        <div
          className={`rounded-2xl p-5 md:p-8 transition-all duration-500 relative overflow-hidden ${
            activePhase === 'ground'
              ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-200 shadow-2xl scale-100 opacity-100'
              : 'bg-gray-50 border-2 border-gray-100 scale-95 opacity-50 blur-[1px]'
          }`}
        >
          {activePhase === 'ground' && (
            <div className="absolute -bottom-8 -right-8 text-6xl md:text-8xl opacity-10 select-none pointer-events-none animate-grow">🌱</div>
          )}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl animate-grow">🌱</span>
            <div>
              <h3 className="text-base md:text-lg font-bold text-primary">The Ground — Cohesive Narrative</h3>
              <p className="text-xs text-gray-500">From low mastery → independent proficiency</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-100 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-emerald-500 rounded-full animate-pulse-glow" />
              <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest">Final Narrative Output</span>
              {activePhase === 'ground' && (
                <span className="ml-auto text-xs text-emerald-400 animate-sparkle">✦</span>
              )}
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed italic border-l-4 border-emerald-300 pl-3 md:pl-4">
              &ldquo;{sampleNarrative}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 p-4 md:p-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-xl md:rounded-2xl border border-amber-200 shadow-lg">
        <p className="text-[11px] md:text-xs text-amber-700 text-center leading-relaxed">
          💡 <strong>Pedagogical Insight:</strong> The Raindrop Method guides students from <strong>broad unstructured ideas</strong> (Cloud)
          through <strong>WH-question scaffolding</strong> (Raindrops) using Computational Thinking decomposition,
          producing <strong>coherent narratives</strong> (Ground) — systematically building independent writing proficiency.
        </p>
      </div>
    </section>
  );
}
