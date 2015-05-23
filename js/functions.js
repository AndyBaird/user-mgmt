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


  var lis = createUser.map(function (user){
        var result = $('<div class="user-display"><li><span class="user-name"></span><span class="user-email"></span></li></div>')
      .data('index', 1) // Makes li look like this: <li data-index="1">etc...</li>
      .find('li').css({'border':'1px solid grey', 'margin':'auto', 'position':'relative', 'width':'50%','margin-top' :'1em', 'background-color':'white'})
      .end()
      .find('.user-name').text(firstName + ' ' + lastName).css({'padding-left': '1em', 'float':'left'})
      .end()
      .find('.user-email').text(eMail).css({'padding-right': '1em', 'float':'right'})
      .end();
      return result;
    });
    $(".output").html(lis);
});
