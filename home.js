
// Plus number quantiy product detail 
var plusQuantity = function () {
	if (jQuery('input[name="quantity"]').val() != undefined) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal)) {
			jQuery('input[name="quantity"]').val(currentVal + 1);
		} else {
			jQuery('input[name="quantity"]').val(1);
		}
	} else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}
// Minus number quantiy product detail 
var minusQuantity = function () {
	if (jQuery('input[name="quantity"]').val() != undefined) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			jQuery('input[name="quantity"]').val(currentVal - 1);
		}
	} else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}



$(document).ready(function () {
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var addproduct = document.getElementsByClassName("btn-addproduct");
	$('.count').text(0)
	var countCart = $('.count').text();
	$('.myBtn').click(function () {
		modal.style.display = "block";
	})
	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	$('.btn-addproduct').click(function () {
		modal.style.display = "none";
		debugger
		var countInt = parseInt(countCart);
		countInt += 1;
		$('.count').text(countInt);
		var listTopping = []
		var productName = $('.content-food-name').text();
		var productPrice = $('.content-food-price').text();
		var price = Number(productPrice.replace(/[^\d.]/g, ''));
		var productImg = $('.content-food-img').attr('src');
		var quantity = $('#updates_1057974864').val();
		$('.check-box-list  input:checked').each(function () {
			var topping = $(this).val();
			listTopping.push(topping);
		});
		var topping = listTopping.join(',');

		$('.item_2').removeClass('hidden');
		$('.item-cart_empty').addClass('hidden');
		var totalPrice = parseInt(price) * parseInt(quantity);
		$('#total-view-cart').text(totalPrice);

		var $tr = $('<tr class="item_2">').append(
			"<td> <img class='pro-img-cart'  src='" + productImg + "'/>",
			$('<td class="pro-title-cart">').text(productName),
			$('<td class="topping-title-cart">').text(topping.trim()),
			$('<td class="qty-value">').text(quantity),
			$('<td class="pro-price-view">').text(productPrice)
		).appendTo('#clone-item-cart');

	});

	$('.linktocheckout').click(function () {
		var data = ' ';
		$("#clone-item-cart  tbody").find('tr').each(function (i, el) {
			var $tds = $(this).find('td'),
				productName = $tds.eq(1).text().trim(),
				topping = $tds.eq(2).text().trim(),
				quantity = $tds.eq(3).text(),
				price = $tds.eq(4).text()

			data += productName + '-Topping: ' + topping + '-Số lượng : ' + quantity + '-Tổng tiền: ' + (parseInt(quantity) * parseInt(Number(price.replace(/[^\d.]/g, '')))) + " \n";
		})
		axios.post(' https://ahachat.com/api/bots/12404829/users/3824547807572463/send', {
			ahachat_token: '53da21bea032562f54883db2f15f0cd7a084cfdd598aa21e25a275eefd0858fa',
			ahachat_message_tag: 'NON_PROMOTIONAL_SUBSCRIPTION',
			ahachat_block_name: 'xacnhan',
			tenmon: data
		})
			.then((response) => {
				console.log(response);
			}, (error) => {
				console.log(error);
			});
	})
})