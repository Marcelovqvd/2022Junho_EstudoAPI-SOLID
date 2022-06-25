import { Router } from "express";

import { createUserController } from "../UseCases/CreateUserUseCase";
import { listUsersController } from "../UseCases/ListUsersUseCase";

const router = Router();

router.get("/users", (request, response) => {
  return listUsersController.handle(request, response);
});

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
