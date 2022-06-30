import { InMemoryUsersRepository } from "../../Repositories/implementations/InMemoryUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const inMemoryUsersRepository = InMemoryUsersRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
