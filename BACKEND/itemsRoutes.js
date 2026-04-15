import express from "express";
import * as controller from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", controller.list);
router.post("/", controller.createItem);
router.delete("/:id", controller.deleteItem);
router.patch("/:id/toggle", controller.toggleItem);

export default router;