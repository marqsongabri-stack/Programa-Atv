import * as service from "../services/itemsService.js";

export const list = async (req, res) => {
    res.json(await service.getAll());
};

export const createItem = async (req, res) => {
    const id = await service.create(req.body);
    res.json({ id });
};

export const deleteItem = async (req, res) => {
    await service.remove(req.params.id);
    res.sendStatus(200);
};

export const toggleItem = async (req, res) => {
    await service.toggle(req.params.id);
    res.sendStatus(200);
};