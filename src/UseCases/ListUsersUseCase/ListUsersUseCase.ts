import { IUsersRepository } from "../../Repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const list = await this.usersRepository.list();
    return list;
  }
}

export { ListUsersUseCase };
