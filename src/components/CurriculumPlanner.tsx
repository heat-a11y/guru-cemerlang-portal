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
  { id: 'c4', label: 'Analyzing (C4)', desc: 'Breaking down material into parts' },
  { id: 'c5', label: 'Evaluating (C5)', desc: 'Making judgments based on criteria' },
  { id: 'c6', label: 'Creating (C6)', desc: 'Putting elements together to form a coherent whole' },
];

const emkElements = [
  { id: 'creativity', label: 'Creativity & Innovation' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
  { id: 'financial', label: 'Financial Education' },
  { id: 'ict', label: 'ICT & Computational Thinking' },
];

const assessmentTypes = [
  { id: 'oral', label: 'Oral Presentation' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'observation', label: 'Observation' },
  { id: 'task', label: 'Task Sheet' },
  { id: 'project', label: 'Project-Based' },
  { id: 'written', label: 'Written Test' },
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
          Minimize information overload while maintaining strict alignment with DSKP national syllabus standards
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Planning Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Syllabus Selection */}
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📚</span>
              <h3 className="font-bold text-primary">DSKP Syllabus Selection</h3>
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Lesson Topic</label>
              <input
                type="text"
                value={lessonTopic}
                onChange={(e) => setLessonTopic(e.target.value)}
                placeholder="e.g., Narrative Writing: My Holiday Experience"
                className="w-full p-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
              />
            </div>
          </div>

          {/* HOTS Selectors */}
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🧠</span>
              <h3 className="font-bold text-primary">HOTS Cognitive Level Selectors</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">Tag classroom activities to Higher Order Thinking Skills levels</p>
            <div className="space-y-2">
              {hotsLevels.map((h) => (
                <button
                  key={h.id}
                  onClick={() => toggleArray(selectedHOTS, h.id, setSelectedHOTS)}
                  className={`w-full text-left p-3 rounded-xl text-sm font-medium transition-all ${
                    selectedHOTS.includes(h.id)
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary/30'
                  }`}
                >
                  <span className="font-bold">{h.label}</span>
                  <span className={`text-xs ml-2 ${selectedHOTS.includes(h.id) ? 'text-white/70' : 'text-gray-400'}`}>
                    {h.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Assessment Methods */}
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📝</span>
              <h3 className="font-bold text-primary">Classroom Assessment Toggle</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">Select formative assessment strategies for continuous student progress tracking</p>
            <div className="flex flex-wrap gap-2">
              {assessmentTypes.map((a) => (
                <button
                  key={a.id}
                  onClick={() => toggleArray(selectedAssessments, a.id, setSelectedAssessments)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedAssessments.includes(a.id)
                      ? 'bg-success text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* EMK Filters */}
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🔗</span>
              <h3 className="font-bold text-primary">Cross-Curricular Elements (EMK)</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">Embed required cross-curricular components</p>
            <div className="space-y-2">
              {emkElements.map((e) => (
                <label
                  key={e.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedEMK.includes(e.id)
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-white border-gray-200 hover:border-amber-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedEMK.includes(e.id)}
                    onChange={() => toggleArray(selectedEMK, e.id, setSelectedEMK)}
                    className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <span className="text-sm font-medium text-gray-700">{e.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📋</span>
              <h3 className="font-bold text-primary">Lesson Plan Summary</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subject:</span>
                <span className="font-medium text-primary">{selectedSubject.split('(')[0].trim()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">HOTS Levels:</span>
                <span className="font-medium text-primary">{selectedHOTS.length || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">EMK Elements:</span>
                <span className="font-medium text-primary">{selectedEMK.length || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Assessments:</span>
                <span className="font-medium text-primary">{selectedAssessments.length || '—'}</span>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="w-full mt-4 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-light transition-colors"
            >
              {saved ? '✓ Lesson Plan Saved!' : 'Save Lesson Plan'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
