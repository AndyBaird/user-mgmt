app.userList = {
  all: [],
  add: function (user) {
    this.all.push(user);
    this.save();
  },
  remove: function (index) {
  },

  load: function () {
    this.all = JSON.parse(localStorage.getItem('__')) || [];
  },
  save: function () {
    localStorage.setItem('___', JSON.stringify(this.all));
  }
};
