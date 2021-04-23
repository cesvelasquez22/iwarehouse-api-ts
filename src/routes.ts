import { itemsRouter } from "./features/items/items.router";
import { usersRouter } from "./features/users/users.router";

export class Routes {
  public routes(app): void {
      app.use('/api/items', itemsRouter);
      app.use('/api/users', usersRouter);
    // app.route("/").get(this.nodesController.index);

    // app.route("/nodes").get(this.nodesController.index);
  }
}