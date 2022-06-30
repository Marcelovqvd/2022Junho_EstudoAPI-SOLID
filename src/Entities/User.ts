import { uuid } from "uuidv4";

class User {
  readonly id?: string;
  name: string;
  email: string;
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
