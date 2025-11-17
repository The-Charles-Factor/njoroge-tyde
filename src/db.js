import Dexie from 'dexie';

// create DB
export const db = new Dexie('TydeWatchDB');

db.version(1).stores({
  items: '++id, code, name, category, section, price, lowerPrice, color, qty'
});

// sample 15 items across categories
export const SAMPLE_ITEMS = [
  { code: 'F-001', name: 'Kitchen Mixer Faucet - Chrome', category: 'Kitchen Faucets', section: 'Kitchen Mixers', price: 4500, lowerPrice: 4200, color: 'Chrome', qty: 10 },
  { code: 'F-002', name: 'Kitchen Faucet - Non-Mixer', category: 'Kitchen Faucets', section: 'Non-Mixers', price: 2500, lowerPrice: 2400, color: 'Matte Black', qty: 8 },
  { code: 'S-001', name: 'Single Bowl Kitchen Sink - Stainless', category: 'Kitchen Sinks', section: 'Sinks', price: 8000, lowerPrice: null, color: 'Stainless', qty: 4 },
  { code: 'B-001', name: 'Pedestal Basin Tap - Classic', category: 'Basins', section: 'Basins', price: 1800, lowerPrice: 1700, color: 'Chrome', qty: 12 },
  { code: 'SH-001', name: 'Wall Shower Mixer - Round', category: 'Showers', section: 'Shower Mixers', price: 5200, lowerPrice: 4800, color: 'Chrome', qty: 5 },
  { code: 'SH-002', name: 'Rain Shower Head - 8 inch', category: 'Showers', section: 'Heads', price: 3500, lowerPrice: 3300, color: 'Chrome', qty: 7 },
  { code: 'ACC-001', name: 'Soap Holder (Wall)', category: 'Bathroom Sets', section: 'Soap Holders', price: 450, lowerPrice: 400, color: 'Chrome', qty: 25 },
  { code: 'ACC-002', name: 'Toothbrush Holder', category: 'Bathroom Sets', section: 'Toothbrush Holders', price: 500, lowerPrice: null, color: 'White', qty: 20 },
  { code: 'L-001', name: 'Mortise Door Lock - Heavy', category: 'Locks', section: 'Door Locks', price: 2200, lowerPrice: 2000, color: 'Brass', qty: 6 },
  { code: 'V-001', name: 'Angle Valve - Chrome', category: 'Valves', section: 'Valves', price: 350, lowerPrice: 300, color: 'Chrome', qty: 50 },
  { code: 'F-003', name: 'Basin Mixer - Short', category: 'Basin Taps', section: 'Mixers', price: 2100, lowerPrice: 2000, color: 'Chrome', qty: 9 },
  { code: 'F-004', name: 'Shower Mixer Thermostatic', category: 'Showers', section: 'Mixers', price: 7800, lowerPrice: 7200, color: 'Chrome', qty: 3 },
  { code: 'S-002', name: 'Double Bowl Sink - Stainless', category: 'Kitchen Sinks', section: 'Sinks', price: 12500, lowerPrice: null, color: 'Stainless', qty: 2 },
  { code: 'ACC-003', name: 'Towel Ring', category: 'Bathroom Sets', section: 'Towel Holders', price: 600, lowerPrice: 550, color: 'Chrome', qty: 14 },
  { code: 'F-005', name: 'Pull-out Kitchen Faucet', category: 'Kitchen Faucets', section: 'Mixers', price: 9200, lowerPrice: 8800, color: 'Stainless', qty: 4 }
];

// Initialize DB with sample items if empty
export async function ensureSeeded() {
  const count = await db.items.count();
  if (count === 0) {
    await db.items.bulkAdd(SAMPLE_ITEMS);
  }
}
