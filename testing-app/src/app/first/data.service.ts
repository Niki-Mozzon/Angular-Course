export class DataService {
  getData() {
    const promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data');
      }, 500);
    });
    return promise;
  }
}
