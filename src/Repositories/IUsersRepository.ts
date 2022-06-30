import { User } from "../Entities/User";

interface IUsersRepository {
  findByEmail(email: string): User;
  create(user: User): void;
  list(): User[];
}

export { IUsersRepository };
