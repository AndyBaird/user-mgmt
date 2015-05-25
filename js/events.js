$(function () {
  app.userList.load();
  app.renderUser(app.userList.all);

  $(".submit").click(function grabUserInput(){

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var eMail = $("#eMail").val();

    app.userList.add(firstName, lastName, eMail);

    app.renderUser(app.userList.all);

    $(".userInfo").val('');
  });


  $(".output").on("click", ".removeButton",function(){
    var li = $(this).parent('li');
    var index = li.data();

    app.userList.remove(index);
    app.renderUser(app.userList.all);
  });


});
