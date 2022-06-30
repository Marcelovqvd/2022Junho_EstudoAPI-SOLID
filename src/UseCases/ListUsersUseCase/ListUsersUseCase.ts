import { IUsersRepository } from "../../Repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute() {
    const list = this.usersRepository.list();
    return list;
  }
}

export { ListUsersUseCase };
