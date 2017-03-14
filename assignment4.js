// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  $.ajax({
		url: 'http://www.mattbowytz.com/simple_api.json',
		type: 'GET',
		dataType: 'json',
    data: { data: 'all'},
		success: function(data) {
      $search = $.merge(data.data.interests, data.data.programming);
      $search.sort();
       console.log($search);
       console.log(data);
    }
  });
  $('.flexsearch-input').on('keyup', function(e){
    var input= $(this).val();
    console.log(input);
  })

})();
