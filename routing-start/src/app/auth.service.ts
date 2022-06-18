//JUST A CLASS MADE FOR THIS INSTANCE THAT MOCK AUTHENTICATION
export class AuthService {
  authentication: boolean = false;

  loggedIn() {
    this.authentication = true;
  }

  loggedOut() {
    this.authentication = false;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.authentication);
      }, 1500);
    });
    return promise;
  }
}
