$(".btn2").click(function(){
	$(".sekil").css({
		"background-image":"url("+$(".link").val()+")"
	})
})


$(".btn1").click(function(){
	$(".divim").html($(".text").val()),
	$(".divim").css({
		"font-size":"30px"
	})
	})



var a=true
$(".effekt1").click(function(){
	if(a){
		$(".sekil").css({
		"border":"2px solid black"
	}), a=false
	}
	else{
		$(".sekil").css({
		"border":"none"
	}), a=true
	}
})


var b=true
$(".effekt2").click(function(){
	if(b){
		$(".divim").css({
		"background": "blue",
		"overflow":"hidden"
	}), b=false
	}
	else{
		$(".divim").css({
		"background": "red",
		"overflow":"hidden"
	}), b=true
	}
})


var c=true
$(".effekt3").click(function(){
	if(c){
		$(".divim").css({
		"font-weight":"bold",
		"font-size": "30px",
		"overflow":"hidden"
	}), c=false
	}
	else{
		$(".divim").css({
		"font-weight":"normal",	
		"font-size": "30px",
		"overflow":"hidden"
	}), c=true
	}
})


var d=true
$(".effekt4").click(function(){
	if(d){
		$(".divim").css({
		"margin-top":"0px",
		"font-size": "30px",
		"overflow":"hidden"
	}), d=false
	}
	else{
		$(".divim").css({
		"margin-top":"350px",
		"font-size": "30px",
		"overflow":"hidden"
	}), d=true
	}
})