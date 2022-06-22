import { User } from "../Entities/User";

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}

export { IUsersRepository };
