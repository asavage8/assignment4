//Predictive Search
$(document).ready(function() {
  // Magic!
  var $search;
  var result= [];
  $.ajax({
		url: 'http://www.mattbowytz.com/simple_api.json',
		type: 'GET',
		dataType: 'json',
    data: { data: 'all'},
		success: function(data) {
      $search = $.merge(data.data.interests, data.data.programming);
      $search.sort();
      }
  });
  $('.flexsearch-input').on('keyup input', function(e) {
		var input = $(this).val();
		if (input) {
			result.length = 0;
			var regex = new RegExp("\^" + input, "i");
			$.each($search, function(index, value) {
				if (regex.test(value) === true) {
						result.push('<li><a href="http://www.google.com/search?q=' + value +'">' + value + '</a></li>');
				}
			});
			if (result.length == 0) {
				result.push("<li>No search result</li>");
			}
			$('.flexsearch-list li').remove();
			$.each(result, function(index, value) {
				$('.flexsearch-list').append(value);
			});
			if ($('.flexsearch-result-wrapper').is(":hidden")) {
				$('.flexsearch-result-wrapper').show();
			}
		}
		else {
			if ($('.flexsearch-result-wrapper').is(":visible")) {
				$('.flexsearch-result-wrapper').hide();
			}
		}
	});
	$('.flexsearch-form').submit(function(e) {
		if (typeof result !== "undefined" && result.length > 0) {
			var url = result[0];
			if (url.slice(0, 12) == "<li><a href=") {
				url = url.slice(13, url.indexOf('"><'));
				e.preventDefault();
				document.location.href = url;
			}
		}
	});
	console.log('Keepin\'n it clean with an external script!');
}); // main
