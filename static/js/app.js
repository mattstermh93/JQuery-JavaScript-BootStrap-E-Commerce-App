//aesthetics

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

//Shopping cart functionality below
//
//defining global variables for use in cart functions
var cart = []
var Item = function (name, price, count) {
	this.name = name
	this.price = price
	this.count = count
	};

//function creation


function addItemtoCart(name, price, count) {
	for (var i in cart) {
		if (cart[i].name === name) {
      cart[i].count += count;
      return;
	}
}
	var item = new Item(name, price, count);
	cart.push(item);
}

function removeItemFromCart(name) {
  for (var i in cart) {
    if (cart[i].name === name) {
      cart[i].count --;
      if (cart[i].count === 0) {
          cart.splice(i, 1);
        }
        break;
    }
  }
}

function removeItemFromCartAll(name) {
  for (var i in cart) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
}
