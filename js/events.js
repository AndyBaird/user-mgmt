$(function () {
  app.renderUser(app.userList.all);

  $(".submit").click(function grabUserInput(){

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var eMail = $("#eMail").val();


    app.userList.add(firstName, lastName, eMail);

    app.renderUser(app.userList.all);

    $(".userInfo").val('');
  });
});
