$(".submit").click(function grabUserInput(){

  var firstName = $("#firstName").val();

  var lastName = $("#lastName").val();

  var eMail = $("#eMail").val();

  var userHash = {
    firstname: firstName,
    lastname: lastName,
    email: eMail
  };

  createUser.push(userHash);

  $(".userInfo").val('');

  //createUser.forEach(function createBox(user){
    // $(".output").append("<li>This is an Li</li>");
//  });
var lis = createUser.map(function (user){
  return $('<li> <span class="username> <li/>').text( user.lastname + ', ' + user.firstname + ' ' + 'email: ' + user.email);
});
$(".output").html(lis);

  console.log(createUser);
});
