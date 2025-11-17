import React, { useEffect, useState, useMemo } from 'react';
import { db, ensureSeeded } from './db';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Filters from './components/Filters';
import { saveAs } from 'file-saver';

function App() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('All');
  const [section, setSection] = useState('All');
  const [page, setPage] = useState(1);
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const pageSize = 8;

  useEffect(() => {
    (async () => {
      await ensureSeeded();
      await loadItems();
    })();
  }, []);

  const loadItems = async () => {
    const all = await db.items.toArray();
    all.sort((a,b) => a.name.localeCompare(b.name) || a.id - b.id);
    setItems(all);
  };

  const addItem = async (data) => {
    await db.items.add(data);
    toast.success('Item added');
    await loadItems();
    setShowForm(false);
  };

  const updateItem = async (id, changes) => {
    await db.items.update(id, changes);
    toast.info('Item updated');
    await loadItems();
    setEditingItem(null);
    setShowForm(false);
  };

  const deleteItem = async (id) => {
    if (window.confirm('Delete this item?')) {
      await db.items.delete(id);
      toast.warn('Item deleted');
      await loadItems();
    }
  };

  const exportJSON = async () => {
    const all = await db.items.toArray();
    const blob = new Blob([JSON.stringify(all, null, 2)], { type: 'application/json' });
    saveAs(blob, 'tydewatch-backup.json');
    toast.success('Backup downloaded');
  };

  const importJSON = async (file) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data)) throw new Error('Invalid file');
      await db.items.clear();
      await db.items.bulkAdd(data.map(d => {
        const copy = { ...d };
        delete copy.id;
        return copy;
      }));
      await loadItems();
      toast.success('Backup imported');
    } catch (err) {
      toast.error('Import failed');
    }
  };

  const categories = useMemo(() => ['All', ...new Set(items.map(i => i.category))], [items]);
  const sections = useMemo(() => ['All', ...new Set(items.map(i => i.section))], [items]);

  const filtered = useMemo(() => {
    let list = items;
    if (category !== 'All') list = list.filter(i => i.category === category);
    if (section !== 'All') list = list.filter(i => i.section === section);
    if (q.trim()) {
      const query = q.toLowerCase();
      list = list.filter(i =>
        (i.name || '').toLowerCase().includes(query) ||
        (i.code || '').toLowerCase().includes(query) ||
        (String(i.price) || '').includes(query)
      );
    }
    return list;
  }, [items, category, section, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => { 
    if (page > totalPages) setPage(totalPages); 
  }, [totalPages, page]);
  
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-handwritten">
      <Navbar />

      <main className="flex-1 container mx-auto px-3 py-3 max-w-7xl">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition"
            >
              {showForm ? 'Hide Form' : 'Add Item'}
            </button>
            <button 
              onClick={exportJSON}
              className="bg-gray-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-700 transition"
            >
              Backup
            </button>
            <label className="bg-gray-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-700 transition cursor-pointer">
              Import
              <input type="file" accept="application/json" onChange={(e) => { 
                if(e.target.files[0]) importJSON(e.target.files[0]); 
              }} className="hidden" />
            </label>
          </div>
          
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            placeholder="Search items..."
            className="flex-1 px-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 text-xs"
          />
        </div>

        {/* Collapsible Form */}
        {showForm && (
          <div className="mb-4 bg-white rounded border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold">
                {editingItem ? 'Edit Item' : 'Add New Item'}
              </h3>
              <button 
                onClick={() => { setShowForm(false); setEditingItem(null); }}
                className="text-gray-500 hover:text-gray-700 text-xs"
              >
                Close
              </button>
            </div>
            <ItemForm
              key={editingItem ? editingItem.id : 'new'}
              item={editingItem}
              onCancel={() => { setEditingItem(null); setShowForm(false); }}
              onSubmit={async (values) => {
                if (editingItem) {
                  await updateItem(editingItem.id, values);
                } else {
                  await addItem(values);
                }
              }}
            />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-3">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded border border-gray-200">
              {/* Filters */}
              <div className="p-3 border-b border-gray-200">
                <Filters
                  categories={categories}
                  sections={sections}
                  category={category}
                  section={section}
                  setCategory={(c) => { setCategory(c); setPage(1); }}
                  setSection={(s) => { setSection(s); setPage(1); }}
                />
              </div>

              {/* Item List */}
              <div className="p-3">
                <ItemList
                  items={pageItems}
                  onEdit={(it) => { setEditingItem(it); setShowForm(true); }}
                  onDelete={deleteItem}
                  onQtyChange={async (id, newQty) => { await updateItem(id, { qty: newQty }); }}
                  onUpdate={updateItem}
                />
              </div>

              {/* Pagination */}
              <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-xs">
                  <div className="text-gray-600">
                    {filtered.length === 0 ? 0 : ((page-1)*pageSize + 1)} - {Math.min(page*pageSize, filtered.length)} of {filtered.length}
                  </div>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setPage(p => Math.max(1, p-1))}
                      disabled={page === 1}
                      className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 text-xs"
                    >
                      Prev
                    </button>
                    <div className="px-2 py-1 border border-gray-300 rounded bg-white text-xs">
                      {page} / {totalPages}
                    </div>
                    <button 
                      onClick={() => setPage(p => Math.min(totalPages, p+1))}
                      disabled={page === totalPages}
                      className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 text-xs"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded border border-gray-200 p-3 sticky top-4">
              <h3 className="text-xs font-semibold mb-2">Overview</h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span className="font-medium">{items.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Filtered</span>
                  <span className="font-medium">{filtered.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Categories</span>
                  <span className="font-medium">{categories.length - 1}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sections</span>
                  <span className="font-medium">{sections.length - 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;