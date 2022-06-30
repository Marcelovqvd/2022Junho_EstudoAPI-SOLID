import { User } from "../../Entities/User";
import { IUsersRepository } from "../IUsersRepository";

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: InMemoryUsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): InMemoryUsersRepository {
    if (!InMemoryUsersRepository.INSTANCE) {
      InMemoryUsersRepository.INSTANCE = new InMemoryUsersRepository();
    }
    return InMemoryUsersRepository.INSTANCE;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  create({ name, email, password }: User): void {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }
}

export { InMemoryUsersRepository };
