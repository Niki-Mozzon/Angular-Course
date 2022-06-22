export class FirstService {
  user: { name: string } = { name: 'Ciccio' };

  getUser() {
    return this.user;
  }
}
