app.userList = {
  all: [],
  add: function (firstName, lastName, eMail) {
    this.all.push(app.userCreate(firstName, lastName, eMail));
    this.save();
  },
  remove: function (index) {
    this.all.splice(index, 1);
    this.save();
  },

  load: function () {
    this.all = JSON.parse(localStorage.getItem('userList')) || [];
  },
  save: function () {
    localStorage.setItem('userList', JSON.stringify(this.all));
  }
};
