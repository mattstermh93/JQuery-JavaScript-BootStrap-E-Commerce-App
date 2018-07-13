$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
});

$('body').on('click', 'li', function() {
      $('li.active').removeClass('active');
      $(this).addClass('active');
});

setTimeout(function(){
  $("#home_link").removeClass("active");
  $("#prod_link").removeClass("active");
}, 1);
