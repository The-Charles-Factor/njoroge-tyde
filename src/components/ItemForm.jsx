import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const blank = {
  code: '',
  name: '',
  color: '',
  price: '',
  lowerPrice: '',
  qty: '',
  category: '',
  section: ''
};

export default function ItemForm({ item, onSubmit, onCancel }) {
  const [values, setValues] = useState(blank);

  useEffect(() => {
    if (item) {
      setValues({
        code: item.code || '',
        name: item.name || '',
        color: item.color || '',
        price: item.price ?? '',
        lowerPrice: item.lowerPrice ?? '',
        qty: item.qty ?? '',
        category: item.category || '',
        section: item.section || ''
      });
    } else {
      setValues(blank);
    }
  }, [item]);

  function change(k, v) {
    setValues(prev => ({ ...prev, [k]: v }));
  }

  function submit(e) {
    e.preventDefault();
    if (!values.code || !values.name || !values.category || !values.price) {
      toast.error('Please fill required fields: Code, Name, Category, and Price');
      return;
    }
    const payload = {
      ...values,
      price: Number(values.price),
      lowerPrice: values.lowerPrice ? Number(values.lowerPrice) : null,
      qty: values.qty ? Number(values.qty) : 0
    };
    onSubmit(payload);
    setValues(blank);
  }

  return (
    <form onSubmit={submit} className="space-y-2 text-sm">
      {/* Required Fields */}
      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Code *</label>
        <input 
          value={values.code} 
          onChange={e => change('code', e.target.value)} 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Item code"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Name *</label>
        <input 
          value={values.name} 
          onChange={e => change('name', e.target.value)} 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Item name"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Category *</label>
        <input 
          value={values.category} 
          onChange={e => change('category', e.target.value)} 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Kitchen Faucets"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Price *</label>
        <input 
          value={values.price} 
          onChange={e => change('price', e.target.value)} 
          type="number" 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Selling price"
        />
      </div>

      {/* Optional Fields */}
      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Section</label>
        <input 
          value={values.section} 
          onChange={e => change('section', e.target.value)} 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Mixers"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Color</label>
        <input 
          value={values.color} 
          onChange={e => change('color', e.target.value)} 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Optional color"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Lower Price</label>
        <input 
          value={values.lowerPrice} 
          onChange={e => change('lowerPrice', e.target.value)} 
          type="number" 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Optional minimum discount"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 text-xs font-medium">Quantity</label>
        <input 
          value={values.qty} 
          onChange={e => change('qty', e.target.value)} 
          type="number" 
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Optional quantity"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button 
          type="submit" 
          className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {item ? 'Update' : 'Save'} Item
        </button>
        <button 
          type="button" 
          onClick={() => { setValues(blank); if(onCancel) onCancel(); }} 
          className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          {item ? 'Cancel' : 'Clear'}
        </button>
      </div>

      {/* Required Fields Note */}
      <div className="text-xs text-gray-500 text-center pt-1">
        * Required fields
      </div>
    </form>
  );
}