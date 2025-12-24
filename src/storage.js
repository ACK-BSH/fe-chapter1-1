const Storage = {
  init() {
    const storageInfo = {
      isLogin: false,
      userName: '',
      userClass: ''
    };

    if (!localStorage.getItem('DataStorage')) {
      this.save(storageInfo);
    }
  },

  get() {
    return JSON.parse(localStorage.getItem('DataStorage'));
  },

  save(state) {
    localStorage.setItem('DataStorage', JSON.stringify(state));
  },

  update(updates) {
    const currentState = this.get();
    const newState = { ...currentState, ...updates };
    this.save(newState);
    return newState;
  }
};

export { Storage };
