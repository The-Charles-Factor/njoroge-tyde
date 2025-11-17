import { FaEdit, FaTrash } from "react-icons/fa";

export default function ItemCard({ item, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200 hover:border-gray-300 transition-colors">

      {/* Header with Name and Actions */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="font-semibold text-gray-800 text-base leading-tight pr-2">{item.name}</h2>
        <div className="flex gap-1 flex-shrink-0">
          <button
            onClick={() => onEdit(item)}
            className="text-blue-600 hover:text-blue-800 p-1 rounded transition-colors"
            title="Edit item"
          >
            <FaEdit size={14} />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
            title="Delete item"
          >
            <FaTrash size={14} />
          </button>
        </div>
      </div>

      {/* Item Details - Compact Grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
        {/* Code */}
        <div className="col-span-2">
          <span className="text-gray-600 font-medium">Code:</span>
          <span className="text-gray-800 ml-1">{item.code}</span>
        </div>

        {/* Category */}
        <div>
          <span className="text-gray-600 font-medium">Category:</span>
          <span className="text-gray-800 ml-1">{item.category}</span>
        </div>

        {/* Section */}
        {item.section && (
          <div>
            <span className="text-gray-600 font-medium">Section:</span>
            <span className="text-gray-800 ml-1">{item.section}</span>
          </div>
        )}

        {/* Color */}
        {item.color && (
          <div className="col-span-2">
            <span className="text-gray-600 font-medium">Color:</span>
            <span className="text-gray-800 ml-1">{item.color}</span>
          </div>
        )}

        {/* Quantity */}
        {item.qty && (
          <div>
            <span className="text-gray-600 font-medium">Qty:</span>
            <span className="text-gray-800 ml-1">{item.qty}</span>
          </div>
        )}

        {/* Prices */}
        <div className="col-span-2 border-t border-gray-100 pt-1 mt-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Price:</span>
            <span className="text-blue-700 font-semibold">KSh {item.price}</span>
          </div>
          {item.lowest && (
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-600 text-xs">Lowest:</span>
              <span className="text-green-700 font-medium text-sm">KSh {item.lowest}</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions - Only show if quantity exists */}
      {item.qty !== undefined && (
        <div className="flex gap-1 mt-2 pt-2 border-t border-gray-100">
          <button
            onClick={() => {
              const newQty = parseInt(prompt("Enter new quantity:", item.qty));
              if (!isNaN(newQty) && newQty >= 0) {
                // This would be handled by the parent component
                // For now, we'll just show an alert
                alert(`Quantity updated to ${newQty}`);
              }
            }}
            className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 rounded text-xs transition-colors"
          >
            Update Qty
          </button>
        </div>
      )}
    </div>
  );
}