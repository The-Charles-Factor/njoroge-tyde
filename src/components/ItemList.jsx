import React from 'react';

function ItemCard({ item, onEdit, onDelete, onQtyChange, onUpdate }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 hover:bg-gray-750 transition-colors shadow-md">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

        {/* Left Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between">

            {/* Name + Meta */}
            <div>
              <div className="font-semibold text-sm text-white">
                {item.name}
              </div>

              <div className="text-xs text-gray-400 mt-1">
                {item.code} • {item.category} • {item.section}
              </div>
            </div>

            {/* Prices */}
            <div className="text-right">
              <div className="font-bold text-blue-300">
                KSh {item.price}
              </div>

              {item.lowerPrice && (
                <div className="text-xs text-gray-400 mt-1">
                  Min: KSh {item.lowerPrice}
                </div>
              )}
            </div>
          </div>

          {/* Color + Qty */}
          <div className="mt-2 flex items-center gap-3">

            {/* Color */}
            <div className="text-xs text-gray-300">
              Color: 
              <span className="font-medium text-gray-200 ml-1">
                {item.color || '—'}
              </span>
            </div>

            {/* Quantity */}
            <div className="text-xs text-gray-300 flex items-center">
              Qty:
              <input
                type="number"
                min={0}
                defaultValue={item.qty ?? 0}
                onBlur={(e) => onQtyChange(item.id, Number(e.target.value))}
                className="ml-2 w-20 p-1 border border-gray-600 bg-gray-700 text-white rounded
                           focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex-shrink-0 flex items-center gap-2">

          <button
            onClick={() => onEdit(item)}
            className="px-3 py-1 rounded bg-blue-600 text-white text-xs
                       hover:bg-blue-500 transition-colors"
          >
            Edit
          </button>

          <button
            onClick={() => { 
              if (window.confirm('Delete item?')) onDelete(item.id);
            }}
            className="px-3 py-1 rounded border border-gray-600 bg-gray-700 text-red-400
                       hover:bg-gray-600 hover:text-red-300 transition-colors text-xs"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default function ItemList({ items, onEdit, onDelete, onQtyChange, onUpdate }) {
  if (!items.length)
    return (
      <div className="py-6 text-center text-gray-400 text-sm">
        No items found
      </div>
    );

  return (
    <div className="grid gap-3">
      {items.map(it => (
        <ItemCard
          key={it.id}
          item={it}
          onEdit={onEdit}
          onDelete={onDelete}
          onQtyChange={onQtyChange}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
