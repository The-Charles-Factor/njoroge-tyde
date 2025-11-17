import Dexie from "dexie";

export const db = new Dexie("NjorogeTydeWatchDB");

db.version(1).stores({
  items: "++id, code, name, category, price"
});

export default db;
