import { create } from "zustand";
import db from "../db/indexedDB";

export const useInventoryStore = create((set, get) => ({
  items: [],
  categories: [
    "Kitchen Faucets",
    "Kitchen Sinks",
    "Basin Taps",
    "Shower Mixers",
    "Basins",
    "Locks",
    "Bathroom Sets"
  ],

  loadItems: async () => {
    const data = await db.items.toArray();
    set({ items: data });
  },

  addItem: async (item) => {
    const id = await db.items.add(item);
    set((state) => ({ items: [...state.items, { ...item, id }] }));
  },

  updateItem: async (id, updates) => {
    await db.items.update(id, updates);
    set((state) => ({
      items: state.items.map((it) => (it.id === id ? { ...it, ...updates } : it))
    }));
  },

  deleteItem: async (id) => {
    await db.items.delete(id);
    set((state) => ({
      items: state.items.filter((it) => it.id !== id)
    }));
  },

  addCategory: (cat) =>
    set((state) => ({
      categories: [...state.categories, cat]
    }))
}));
