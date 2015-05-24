$(function () {
  app.renderUser(app.userList.all);

  $(".submit").click(function grabUserInput(){

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var eMail = $("#eMail").val();
var user = [firstName, lastName, eMail];

    app.userList.add(user);

    app.renderUser(app.userList.all);

    $(".userInfo").val('');
  });
});
