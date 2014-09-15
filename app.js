$(document).ready(function() {
	$("#numberBox").focus();
	$("#submitButton").on("click", function() {
		$(".bustArea").text(" ");
		$("#integer").hide();
		$("#middle").hide();
		var number = $("#numberBox").val();
		if (number % 1 === 0) {
			countingTime(number);
		} else {
			$("#integer").show();
		};
		if (number > 100) {
			event.PreventDefault();
			$("#middle").show();
			$(".bustArea").text(" ");
		}
	});
});

function countingTime(number) {
	for (x=1; x<=number; x++) {
	    if (x%15===0) {
	        $('.bustArea').append("FizzBuzz" + ", ");
	    } else if (x%5===0) {
	        $('.bustArea').append("Buzz" + ", ");
	    } else if (x%3===0) {
	        $('.bustArea').append("Fizz" + ", ");
	    } else {
	        $('.bustArea').append(x + ", ");
	    }
	}
};