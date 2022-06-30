import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listUserUseCase.execute();
    return response.status(200).json(all);
  }
}

export { ListUsersController };
