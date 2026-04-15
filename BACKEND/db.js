import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db");

db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    categoria TEXT NOT NULL,
    comprado INTEGER DEFAULT 0
  )
`);

export default db;