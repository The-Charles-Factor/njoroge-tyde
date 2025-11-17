import React from 'react';

export default function Filters({ categories, sections, category, section, setCategory, setSection }){
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
      <select value={category} onChange={(e)=> setCategory(e.target.value)} className="p-2 border rounded">
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={section} onChange={(e)=> setSection(e.target.value)} className="p-2 border rounded">
        {sections.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
