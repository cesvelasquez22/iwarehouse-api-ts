/**
 * Required External Modules and Interfaces
 */
import express from "express";

import { UsersController } from "./controllers/users.controller";
/**
 * Router Definition
 */
export const usersRouter = express.Router();

/**
 * Controller Definitions
 */
const usersController: UsersController = new UsersController();
// GET items
usersRouter.get("/", usersController.getUsers);
  
// GET items/:id
// usersRouter.get("/:id", ItemsController.getItemById);

// POST items
usersRouter.post("/", usersController.createUser);

// PUT items/:id
// usersRouter.put("/:id", ItemsController.updateItem);

// DELETE items/:id
// usersRouter.delete("/:id", ItemsController.deleteItem);