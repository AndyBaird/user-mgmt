$(".submit").click(function grabUserInput(){

  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var eMail = $("#eMail").val();
  var userHash = {
    firstname: firstName,
    lastname: lastName,
    email: eMail
  };

  app.userList.add(userHash);

  console.log(app.userList.all);

  $(".userInfo").val('');
  return userHash;
});
