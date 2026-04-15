import express from "express";
import cors from "cors";
import itemsRoutes from "./routes/itemsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});