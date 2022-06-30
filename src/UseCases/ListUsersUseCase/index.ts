import { InMemoryUsersRepository } from "../../Repositories/implementations/InMemoryUsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const inMemoryUsersRepository = InMemoryUsersRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(inMemoryUsersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
