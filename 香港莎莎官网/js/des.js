var _id = location.search.split("=")[1];
function sc_car(){
	var sc_car=$.cookie("goods");
	if(sc_car){
		var arr=eval(sc_car);
		var sc_num=0;
		for(var i in arr){
			sc_num+=Number(arr[i].num)
		}
		$(".th").html(sc_num);
	}
}
$(function(){
	sc_car();
	$("#navg ul li").hover(function(){
		$(this).css("color","black")
	},function(){
		$(this).css("color","gray")
	})
	$.get("brand.json",function(data){
		var oUl = $("#goods").find("ul");
		for(var i=0;i<data.length;i++){
			if (data[i].id == _id) {
				oUl.append("<li><div class='left'><img class = 'smallpic' src='"+data[i].child[0]+"'></div><div class='down'></div><div class='right'><p>"+data[i].type+"&emsp;"+data[i].des+"</p><h3>"+data[i].price+"<span class ='span1'>"+data[i].price2+"</span><span class='span2'>"+data[i].discount+"</span></h3><div class='te'></div><h5>"+data[i].indent+"</h5><span class='span4'>"+data[i].indent_des+"</span><h6>"+data[i].order+"</h6><span class='span5'>"+data[i].ordert_des+"</span></div></li>")
				oUl.find("#frame").append("<img class='bigpic' src='"+data[i].child[0]+"'>")
				oUl.find(".down").append("<img src='"+data[i].child[0]+"'>")
				oUl.find(".left").append("<div class = 'mask'></div>")
				if(data[i].child.length > 1){				
					for(var j=0;j<data[i].child.length;j++){
						oUl.find(".down").append("<img src='"+data[i].child[j]+"'>")
					}
				}
				
				if(data[i].gift){
					oUl.find("li").find(".te").append("<h4 class= 'gift'>"+data[i].gift+"</h4><span class = 'span3'>"+data[i].gift_des+"</span>")				
				}
				break;
			}
		}
		$(".left").hover(function(){
			$(".mask").css("display","block");
			$("#frame").css("display","block");
		 	var scale=$(".bigpic").width() / $(".smallpic").width();
		 	
		},function(){
			$(".mask").css("display","none");
			$("#frame").css("display","none");
		})
		$(".left").mousemove(function(evt){
				var scale=$(".bigpic").width() / $(".smallpic").width();				
				var X=evt.pageX - $(".smallpic").offset().left - parseInt($(".mask").width() / 2);
	  			var Y=evt.pageY - $(".smallpic").offset().top-parseInt($(".mask").height() / 2);
				if(X<0){X=0}
				if(Y<0){Y=0}
				if(X>171){X=171}
				if(Y>200){Y=200}
				$(".mask").css({left:X,top:Y})
				$(".bigpic").css("left",-$(".mask").position().left*scale);
				$(".bigpic").css("top",-$(".mask").position().top*scale);
		})	
		var obj = $(".down").find("img");
		$(".down").find("img").mouseover(function(){
			$(".down").find("img").css("border","none")
			$(this).css("border","2px double #E5CBB2")
			$(".smallpic").attr("src",$(this).attr("src"))
			$(".bigpic").attr("src",$(this).attr("src"))
		})		
	})
	
		$("#add").click(function(){
			$("#input-id")[0].value++;
		})
		$("#reduce").click(function(){
			if($("#input-id")[0].value > 1){
				$("#input-id")[0].value--;
			}
		})
	$("#shoping").click(function(){
		var first=$.cookie("goods")==null?true:false;
		var same=false;
		if(first){
			$.cookie("goods",'[{id:'+_id+',num:' + $("#input-id").val() +'}]');
			$.cookie("first","false");
		}else{
			var str = $.cookie("goods");
			var arr= eval(str);
			for(var attr in arr){
				if(arr[attr].id==_id){
					arr[attr].num=arr[attr].num+parseInt($("#input-id").val());
					var cookieStr=JSON.stringify(arr);
					$.cookie('goods',cookieStr);
						same = true;
						
				}
			}
			if(!same){
						var obj={id:_id,num:1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods',cookieStr);
						}
		}
		sc_car()
		window.open("shopcar.html");
	})
	
})
