app.userList = {
  all: [],
  add: function (firstName, lastName, eMail) {
    this.all.push(app.userCreate(firstName, lastName, eMail));
    //this.save();
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
