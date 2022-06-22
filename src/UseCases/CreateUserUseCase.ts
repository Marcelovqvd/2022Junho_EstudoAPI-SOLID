import { User } from "../Entities/User";
import { IUsersRepository } from "../Repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    this.usersRepository.save(user);
  }
}

export { CreateUserUseCase };
