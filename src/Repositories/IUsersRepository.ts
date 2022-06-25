import { User } from "../Entities/User";

interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
