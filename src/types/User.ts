export class User {
  username: string
  token: string
  email: string
  phone: string
  age: number


  constructor(username: string, token: string, email: string, phone: string, age: number) {
    this.username = username;
    this.token = token;
    this.email = email;
    this.phone = phone;
    this.age = age;
  }
}
