import React from 'react';

export default function Filters({ categories, sections, category, section, setCategory, setSection }){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        className="p-2 border border-gray-600 bg-gray-700 text-white rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        {categories.map(c => (
          <option key={c} value={c} className="bg-gray-700 text-white">
            {c}
          </option>
        ))}
      </select>
      
      <select 
        value={section} 
        onChange={(e) => setSection(e.target.value)} 
        className="p-2 border border-gray-600 bg-gray-700 text-white rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        {sections.map(s => (
          <option key={s} value={s} className="bg-gray-700 text-white">
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}