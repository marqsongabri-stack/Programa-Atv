import db from "../db.js";

export const getAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM items", [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

export const create = (item) => {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO items (nome, categoria) VALUES (?, ?)",
            [item.nome, item.categoria],
            function (err) {
                if (err) reject(err);
                else resolve(this.lastID);
            }
        );
    });
};

export const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM items WHERE id = ?", [id], (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

export const toggle = (id) => {
    return new Promise((resolve, reject) => {
        db.run(
            "UPDATE items SET comprado = NOT comprado WHERE id = ?",
            [id],
            (err) => {
                if (err) reject(err);
                else resolve();
            }
        );
    });
};