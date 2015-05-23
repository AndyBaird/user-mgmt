app.userList = {
  all: [],

  add: function (userH) {
    this.all.push(userH);
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
