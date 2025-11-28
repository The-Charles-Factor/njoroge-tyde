import { FaEdit, FaTrash } from "react-icons/fa";

export default function ItemCard({ item, onEdit, onDelete }) {
  return (
    <div
      className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors shadow-md"
      style={{ fontFamily: "inherit" }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="font-semibold text-gray-100 text-sm sm:text-base leading-tight pr-2">
          {item.name}
        </h2>

        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onEdit(item)}
            className="text-blue-400 hover:text-blue-300 p-1 rounded transition-colors"
            title="Edit item"
          >
            <FaEdit size={15} />
          </button>

          <button
            onClick={() => onDelete(item.id)}
            className="text-red-400 hover:text-red-300 p-1 rounded transition-colors"
            title="Delete item"
          >
            <FaTrash size={15} />
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:text-sm">

        {/* Code */}
        <div className="col-span-2">
          <span className="text-gray-400">Code:</span>
          <span className="text-gray-200 ml-1">{item.code}</span>
        </div>

        {/* Category */}
        <div>
          <span className="text-gray-400">Category:</span>
          <span className="text-gray-200 ml-1">{item.category}</span>
        </div>

        {/* Section */}
        {item.section && (
          <div>
            <span className="text-gray-400">Section:</span>
            <span className="text-gray-200 ml-1">{item.section}</span>
          </div>
        )}

        {/* Color */}
        {item.color && (
          <div className="col-span-2">
            <span className="text-gray-400">Color:</span>
            <span className="text-gray-200 ml-1">{item.color}</span>
          </div>
        )}

        {/* Quantity */}
        {item.qty !== undefined && (
          <div>
            <span className="text-gray-400">Qty:</span>
            <span className="text-gray-200 ml-1">{item.qty}</span>
          </div>
        )}

        {/* Pricing */}
        <div className="col-span-2 border-t border-gray-700 pt-2 mt-1">
          <div className="flex justify-between">
            <span className="text-gray-400">Price:</span>
            <span className="text-blue-300 font-semibold">KSh {item.price}</span>
          </div>

          {item.lowest && (
            <div className="flex justify-between mt-1">
              <span className="text-gray-500 text-xs">Lowest:</span>
              <span className="text-green-300 font-medium text-sm">KSh {item.lowest}</span>
            </div>
          )}
        </div>
      </div>

      {/* Update Button */}
      {item.qty !== undefined && (
        <div className="mt-3 pt-2 border-t border-gray-700">
          <button
            onClick={() => {
              const newQty = parseInt(prompt("Enter new quantity:", item.qty));
              if (!isNaN(newQty) && newQty >= 0) {
                alert(`Quantity updated to ${newQty}`);
              }
            }}
            className="w-full text-center bg-gray-800 hover:bg-gray-700 text-gray-200 py-1.5 rounded text-xs transition-colors"
            style={{ fontFamily: "inherit" }}
          >
            Update Qty
          </button>
        </div>
      )}
    </div>
  );
}
