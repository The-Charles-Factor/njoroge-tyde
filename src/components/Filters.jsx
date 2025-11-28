import React from "react";

export default function Filters({
  categories,
  sections,
  category,
  section,
  setCategory,
  setSection,
}) {
  const base =
    "p-2.5 border border-gray-600 bg-gray-800 text-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={base}
        style={{ fontFamily: "inherit" }}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={section}
        onChange={(e) => setSection(e.target.value)}
        className={base}
        style={{ fontFamily: "inherit" }}
      >
        {sections.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
