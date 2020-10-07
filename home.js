
// Plus number quantiy product detail 
var plusQuantity = function() {
	if ( jQuery('input[name="quantity"]').val() != undefined ) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal)) {
			jQuery('input[name="quantity"]').val(currentVal + 1);
		} else {
			jQuery('input[name="quantity"]').val(1);
		}
	}else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}
// Minus number quantiy product detail 
var minusQuantity = function() {
	if ( jQuery('input[name="quantity"]').val() != undefined ) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			jQuery('input[name="quantity"]').val(currentVal - 1);
		}
	}else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}



$(document).ready(function(){
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var addproduct = document.getElementsByClassName("btn-addproduct");
	$('.myBtn').click(function() {
		modal.style.display = "block";
	})
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	$('.btn-addproduct').click(function() {
		modal.style.display = "none";
		var listTopping  = []
		var  productName = $('.content-food-name').text();
		var productPrice = $('.content-food-price').text();
		var productImg = $('.content-food-img').attr('src');
		var quantity = $('#updates_1057974864').val();
		$('.check-box-list  input:checked').each(function () {
			var topping = $(this).val();
			listTopping.push(topping);
		});
		var topping = listTopping.join(',');
		$('.pro-img-cart').attr('src',productImg);
		$('.pro-title-cart').text(productName)
		$('.pro-price-view').text(productPrice)
		$('.qty-value').text(quantity);
		$('.topping-title-cart').text(topping);
		$('.item_2').removeClass('hidden');
		$('.item-cart_empty').addClass('hidden');
		debugger
		var totalPrice = parseInt(productPrice) * parseInt(quantity);
		$('#total-view-cart').text(totalPrice);

		
	})
})