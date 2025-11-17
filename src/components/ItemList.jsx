import React from 'react';

function ItemCard({ item, onEdit, onDelete, onQtyChange, onUpdate }) {
  return (
    <div className="border rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm">{item.name}</div>
            <div className="text-xs text-gray-600">{item.code} • {item.category} • {item.section}</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-primary">KSh {item.price}</div>
            {item.lowerPrice ? <div className="text-xs text-gray-500">Min: KSh {item.lowerPrice}</div> : null}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-xs">Color: <span className="font-medium">{item.color || '—'}</span></div>
          <div className="text-xs">Qty: 
            <input 
              type="number" 
              min={0} 
              defaultValue={item.qty ?? 0} 
              onBlur={(e)=> onQtyChange(item.id, Number(e.target.value))}
              className="ml-2 w-20 p-1 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 flex items-center gap-2">
        <button onClick={()=> onEdit(item)} className="px-3 py-1 rounded bg-accent text-white">Edit</button>
        <button onClick={()=> { if(window.confirm('Delete item?')) onDelete(item.id); }} className="px-3 py-1 rounded border text-red-600">Delete</button>
      </div>
    </div>
  );
}

export default function ItemList({ items, onEdit, onDelete, onQtyChange, onUpdate }){
  if(!items.length) return <div className="py-6 text-center text-gray-500">No items found</div>;

  return (
    <div className="grid gap-3 mt-4">
      {items.map(it => <ItemCard key={it.id} item={it} onEdit={onEdit} onDelete={onDelete} onQtyChange={onQtyChange} onUpdate={onUpdate} />)}
    </div>
  );
}
