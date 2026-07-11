'use client';

import { useState } from 'react';

const subjects = [
  'Bahasa Inggeris (English) Tahun 4',
  'Bahasa Inggeris (English) Tahun 5',
  'Bahasa Inggeris (English) Tahun 6',
  'Bahasa Inggeris (English) Tingkatan 1',
  'Bahasa Inggeris (English) Tingkatan 2',
  'Bahasa Inggeris (English) Tingkatan 3',
];

const hotsLevels = [
  { id: 'c4', label: 'Analyzing (C4)', desc: 'Breaking down material into parts', icon: '🔍', gradient: 'from-blue-400 to-cyan-500' },
  { id: 'c5', label: 'Evaluating (C5)', desc: 'Making judgments based on criteria', icon: '⚖️', gradient: 'from-amber-400 to-orange-500' },
  { id: 'c6', label: 'Creating (C6)', desc: 'Putting elements together to form a coherent whole', icon: '🎨', gradient: 'from-purple-400 to-pink-500' },
];

const emkElements = [
  { id: 'creativity', label: 'Creativity & Innovation', icon: '💡', color: 'from-yellow-300 to-amber-500' },
  { id: 'entrepreneurship', label: 'Entrepreneurship', icon: '🚀', color: 'from-emerald-300 to-teal-500' },
  { id: 'financial', label: 'Financial Education', icon: '💰', color: 'from-green-300 to-emerald-500' },
  { id: 'ict', label: 'ICT & Computational Thinking', icon: '💻', color: 'from-blue-300 to-indigo-500' },
];

const assessmentTypes = [
  { id: 'oral', label: 'Oral Presentation', icon: '🎤', color: 'from-pink-400 to-rose-500' },
  { id: 'quiz', label: 'Quiz', icon: '📝', color: 'from-amber-400 to-yellow-500' },
  { id: 'observation', label: 'Observation', icon: '👁️', color: 'from-cyan-400 to-blue-500' },
  { id: 'task', label: 'Task Sheet', icon: '📄', color: 'from-violet-400 to-purple-500' },
  { id: 'project', label: 'Project-Based', icon: '🏗️', color: 'from-emerald-400 to-teal-500' },
  { id: 'written', label: 'Written Test', icon: '✍️', color: 'from-orange-400 to-red-500' },
];

export default function CurriculumPlanner() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedHOTS, setSelectedHOTS] = useState<string[]>([]);
  const [selectedEMK, setSelectedEMK] = useState<string[]>([]);
  const [selectedAssessments, setSelectedAssessments] = useState<string[]>([]);
  const [lessonTopic, setLessonTopic] = useState('');
  const [saved, setSaved] = useState(false);

  const toggleArray = (arr: string[], item: string, setter: (v: string[]) => void) => {
    setter(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section id="planner">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Curriculum Fidelity & Lesson Planner</h2>
        <p className="text-gray-500 mt-1">
          🎯 Minimize information overload while maintaining strict alignment with DSKP national syllabus standards
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Planning Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Syllabus Selection */}
          <div className="metric-card group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl group-hover:animate-tilt-shake">📚</span>
              <h3 className="font-bold text-primary">DSKP Syllabus Selection</h3>
            </div>
            <div className="relative">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-3.5 rounded-2xl border-2 border-blue-100 bg-white/80 text-sm font-medium text-primary focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 appearance-none cursor-pointer transition-all"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-600 mb-1.5 block">Lesson Topic</label>
              <input
                type="text"
                value={lessonTopic}
                onChange={(e) => setLessonTopic(e.target.value)}
                placeholder="e.g., Narrative Writing: My Holiday Experience"
                className="w-full p-3.5 rounded-2xl border-2 border-blue-100 bg-white/80 text-sm focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          {/* HOTS Selectors */}
          <div className="metric-card group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl group-hover:animate-tilt-shake">🧠</span>
              <h3 className="font-bold text-primary">HOTS Cognitive Level Selectors</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">🎯 Tag classroom activities to Higher Order Thinking Skills levels</p>
            <div className="space-y-3">
              {hotsLevels.map((h) => (
                <button
                  key={h.id}
                  onClick={() => toggleArray(selectedHOTS, h.id, setSelectedHOTS)}
                  className={`w-full text-left p-4 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${
                    selectedHOTS.includes(h.id)
                      ? `bg-gradient-to-r ${h.gradient} text-white shadow-xl scale-[1.02]`
                      : 'bg-white/50 text-gray-700 border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg'
                  }`}
                >
                  <span className={`text-xl ${selectedHOTS.includes(h.id) ? 'animate-float-slow' : ''}`}>{h.icon}</span>
                  <div>
                    <span className="font-bold">{h.label}</span>
                    <span className={`block text-xs ${selectedHOTS.includes(h.id) ? 'text-white/80' : 'text-gray-400'}`}>
                      {h.desc}
                    </span>
                  </div>
                  {selectedHOTS.includes(h.id) && (
                    <span className="ml-auto text-white/80">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Assessment Methods */}
          <div className="metric-card group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl group-hover:animate-tilt-shake">📝</span>
              <h3 className="font-bold text-primary">Classroom Assessment Toggle</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">🎯 Select formative assessment strategies for continuous student progress tracking</p>
            <div className="flex flex-wrap gap-3">
              {assessmentTypes.map((a) => (
                <button
                  key={a.id}
                  onClick={() => toggleArray(selectedAssessments, a.id, setSelectedAssessments)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                    selectedAssessments.includes(a.id)
                      ? `bg-gradient-to-r ${a.color} text-white shadow-lg scale-105`
                      : 'glass-card text-gray-600 hover:shadow-md hover:scale-105 border border-gray-100'
                  }`}
                >
                  <span>{a.icon}</span>
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* EMK Filters */}
          <div className="metric-card group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl group-hover:animate-tilt-shake">🔗</span>
              <h3 className="font-bold text-primary">Cross-Curricular Elements (EMK)</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">🎯 Embed required cross-curricular components</p>
            <div className="space-y-3">
              {emkElements.map((e) => (
                <label
                  key={e.id}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedEMK.includes(e.id)
                      ? `bg-gradient-to-r ${e.color} bg-opacity-10 border-transparent text-white shadow-lg`
                      : 'bg-white/50 border-gray-100 hover:border-gray-200 hover:shadow-md text-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedEMK.includes(e.id)}
                    onChange={() => toggleArray(selectedEMK, e.id, setSelectedEMK)}
                    className="w-5 h-5 rounded-lg border-gray-300 text-accent focus:ring-accent cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{e.icon}</span>
                    <span className={`text-sm font-medium ${selectedEMK.includes(e.id) ? 'text-white' : 'text-gray-700'}`}>{e.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="metric-card group bg-gradient-to-br from-white to-blue-50/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl group-hover:animate-tilt-shake">📋</span>
              <h3 className="font-bold text-primary">Lesson Plan Summary</h3>
            </div>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Subject', value: selectedSubject.split('(')[0].trim(), icon: '📚' },
                { label: 'HOTS Levels', value: selectedHOTS.length ? `${selectedHOTS.length} selected` : '—', icon: '🧠' },
                { label: 'EMK Elements', value: selectedEMK.length ? `${selectedEMK.length} selected` : '—', icon: '🔗' },
                { label: 'Assessments', value: selectedAssessments.length ? `${selectedAssessments.length} selected` : '—', icon: '📝' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/60">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <span>{row.icon}</span>
                    {row.label}
                  </span>
                  <span className="font-semibold text-primary">{row.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSave}
              className={`w-full mt-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                saved
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl hover:scale-[1.02] active:scale-95'
              }`}
            >
              {saved ? (
                <span className="flex items-center justify-center gap-2">
                  <span>✓</span> Lesson Plan Saved!
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>💾</span> Save Lesson Plan
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
