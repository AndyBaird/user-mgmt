app.renderUser = function (user){
$('.output').html(usersToHTML(user));

    function usersToHTML (user){
      return user.map(function (user, index){

        var result = $('<li><span class="user-name"></span><span class="user-email"></span></li>');

      result.data('index', index);
      result.find('.user-name').text(firstName + ' ' + lastName);
      result.end();
      result.find('.user-email').text(eMail);
      result.end();
      return result;

    });
  }
};
