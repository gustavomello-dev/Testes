import { Router } from "express";
import UserController from "./controllers/UserController.js";

const routes = Router();

routes.get("/health", (req, res) => {
    return res.json({ message: "Server is running!" });
});
routes.get("/users", UserController.select);
routes.post("/users", UserController.insert);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

export default routes;
