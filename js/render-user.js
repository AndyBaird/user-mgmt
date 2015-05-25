app.renderUser = function (user){
  $('.output').html(usersToHTML(user));

    function usersToHTML (user){
      return user.map(function (user, index){

        var result = $('<li><span class="user-name"></span><span class="user-email"></span><button class="removeButton">X</button></li>');

      result.data('index', index);
      result.find('.user-name').text(user.firstname + ' ' + user.lastname);
      result.end();
      result.find('.user-email').text(user.email);
      result.end();
      return result;

    });
  }
};
