import { IUsersRepository } from "../../Repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email, password }: ICreateUserRequestDTO) {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, email, password });
  }
}

export { CreateUserUseCase };
