app.renderUser = function (user){
$('.output').html(result);

  var lis = app.map(function (user){
      var result = $('<div class="user-display"><li><span class="user-name"></span><span class="user-email"></span></li></div>')
    .data('index', 1) // Makes li look like this: <li data-index="1">etc...</li>

    .find('.user-name').text(firstName + ' ' + lastName)
    .end()
    .find('.user-email').text(eMail)
    .end();
  //  $(".output").html(lis);

    return result;

  });
};
