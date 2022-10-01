import { action, makeObservable, observable } from "mobx";

class Store {
  loading = true;
  error = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      loadingStarted: action,
      loadingFinished: action,
      errorOccured: action,
    });
  }

  loadingStarted() {
    this.loading = true;
  }

  loadingFinished() {
    this.loading = false;
  }

  errorOccured() {
    this.error = true;
    console.log("whoops");
  }
}

export default new Store();
