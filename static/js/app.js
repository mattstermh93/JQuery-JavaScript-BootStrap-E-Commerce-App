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


function addItemtoCart(name, price, count) { // add an item to the cart
	for (var i in cart) {
		if (cart[i].name === name) {
      cart[i].count += count;
      return;
	}
}
	var item = new Item(name, price, count);
	cart.push(item);
}

function removeItemFromCart(name) { // remove an item from the cart
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

function removeItemFromCartAll(name) { // removes an entire item each time it's name is invoked
  for (var i in cart) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
}

function clearCart() { // empties the cart
  cart = [];
}

function countCart() { // return total number of items in cart
  var totalCount = 0;
  for (var i in count) {
    totalcount+= cart[i].count;

  }
  return totalCount;
}

function totalCart() { // return total cost
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price;
  }
  return totalCost;
}

function listCart() { // return current cart
  var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = {};
    for (var p in item) {
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}
