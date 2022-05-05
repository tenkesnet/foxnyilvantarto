export class User {
  id: number;
  name: string;
  password: string;
  role: string;

  constructor(username: string, password: string) {
    this.name = username
    this.password = password
  }
}
