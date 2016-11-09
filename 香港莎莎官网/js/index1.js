
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
	sc_car()
	$("#close").click(function(){
	$("#top").remove();
	})
	function move(){
		$("#top").animate({height:85})
	}
	setTimeout(move,4000);
	$("#right").find("ul").find("li").eq(0).hover(function(){
		$("#des").css("display","block");
		},function(){
			$("#des").css("display","none");
		})
	$("#des").find("a").hover(function(){
		$(this).css("color","#ED3E91");
	},function(){
		$(this).css("color","#6C6C6C")
	})
	$("#nav").find("#right").find("ul").find("li").eq(1).hover(function(){
		$("#des1").css({"display":"block"})
	},function(){
		$("#des1").css("display","none")
	})
	$("#nav").find("#right").find("ul").find("li").eq(6).find("#fish").hover(function(){
		$("#pic").css("display","block")
	},function(){
		$("#pic").css("display","none")
	})
	$("#nav").find("#right").find("ul").find("li").eq(6).find("#weixin").hover(function(){
		$("#pic1").css("display","block")
	},function(){
		$("#pic1").css("display","none")
	})
	$.get("data.json",function(data){
		var oLi = $("#product").find("ul").find("li").eq(5);
		oLi.append("<div class = 'box'><h1>" + data.title + "</h1><div class = 'box-right'></div>")
		for(var i = 0;i < data.title_type.length;i++){
			oLi.find(".box").append("<p>" + data.title_type[i] + "</p>")
		}
		for(var i = 0; i < data.img.length; i++){
			oLi.find(".box-right").append("<img src='" + data.img[i] + "'/>" )
		}
		oLi.find(".box").append("<h4>" + data.foot + "</h4>")
		oLi.hover(function(){
			$(".box").css("display","block")
			},function(){
			$(".box").css("display","none")
		})
		oLi.hover(function(){
			oLi.find("a").css("color","#ED3E91")
			$(".box").find("h1").css("color","#ED3E91")
		})
	})
	function bannerMove(id){
		var obj = $(id);
		obj.find("img").eq(obj[0].i).stop().animate({"opacity":"0"},200);
		obj[0].i++;
		obj[0].i %= obj.find("img").length;
		obj.find("img").eq((obj[0].i)).stop().animate({"opacity":"1"},200);
	}
	$.get("banner.json",function(data){
		for(var i = 0;i < data.length;i++){
		$("#banner").append("<img src='" + data[i]+ "'/>")
		$("#banner-bottom").append("<div></div>")		
		}
		$("#banner").find("img").eq(0).css("opacity","1");
		$("#banner")[0].i = 0;
		$("#banner-bottom").css("width","auto");
		$("#banner-bottom").css("left",($("#banner").width()-$("#banner-bottom").width()) / 2 );
		$("#banner")[0].timer = setInterval (function  () {
				bannerMove("#banner");
		},4000)
		$("#banner-bottom").find("div").hover(function(){
			$(this).css("background","#EC3E7D")			
			clearInterval($("#banner")[0].timer);
		},function(){
			$("#banner")[0].timer = setInterval (function  () {
				bannerMove("#banner");
		},4000)
			$(this).css("background","gray")			
		})		
	})
	$.get("line.json",function(data){
		var oUl = $("#total").find("ul");
		for(var i = 0; i < data.length;i++){			
		oUl.append("<li><img class='top' src='" + data[i].img + "'/><a href='goods.html'>" + data[i].title + "</a><img class = 'jian' src='" + data[i].pic + "'/><div class = 'list'></div></li>")
			for(var j = 0;j < data[i].tiele_child.length;j++){
				oUl.find(".list").eq(i).append("<div><h2>" + data[i].tiele_child[j].type + "</h2></div>")
				for(var k = 0;k < data[i].tiele_child[j].type_child.length;k++){
					oUl.find(".list").eq(i).find("div").eq(j).append("<span>&emsp;"+ data[i].tiele_child[j].type_child[k] + "</span>")
				}
			}
		}
		oUl.find("li").hover(function(){
			$(this).css("background","#fff");
			$(this).find("a").css("color","#333")
			$(this).find(".jian").attr("src","img/fg12.jpg")
			$(this).find(".list").css("display","block")
		},function(){
			$(this).css("background","#FA3778").css("cloor","#fff");
			$(this).find("a").css("color","#fff")
			$(this).find(".jian").attr("src","img/ewr.jpg")
			$(this).find(".list").css("display","none")
		})
	})	
	$.get("pic.json",function(data){
		var oUl = $("#day").find("ul");
		for(var i = 0 ;i < data.length;i++){
			oUl.eq(i%2).append("<li><img src='" + data[i].img + "'><div><h3>" + data[i].type + "</h3><h4>" + data[i].content + "</h4><p>" + data[i].content1+ "</p><h5>" + data[i].money + "</h5></div></li>")
		}		
	})
	$.get("des.json",function(data){
		var oUl = $("#introduce").find("ul");
		for(var i = 0;i < data.length;i++){
			oUl.append("<li><img src='" +data[i].img + "'><div><h2>" + data[i].time +"</h2><h3>" + data[i].detil + "</h3><h4>" + data[i].name + "</h4><h5>" + data[i].much + "<span class = 'now'>" + data[i].much1 + "</span></h5><p>" + data[i].sell + "<span class = 'last'>" + data[i].now + "</span></p></div></li>")
		}
		var future = new Date(2016,11,20);
		var t= setInterval(function(){
			var now = new Date();
			var second = parseInt((future - now)/ 1000)% 60;
			var minutes = parseInt((future - now) / 1000 / 60)% 60;
			var hour = parseInt((future - now) / 1000 / 60 / 60)% 24;
			var day = parseInt((future - now)/ 1000 / 60 / 60 / 24 );
			oUl.find("h2").html("剩余:"+ day + "天"+ hour + "时" + minutes + "分" + second +"秒");
		},1000)
	})
	$.get("new.json",function(data){
		var oUl = $("#new-arrival").find("ul");
		for(var i = 0;i < data.length;i++){
			oUl.append("<li><img src='" + data[i].img +"'><p>" + data[i].des + "</p><h3>" + data[i].price + "<span>"+ data[i].price1 + "</span></h3></li>")
		}
	})
	$.get("top.json",function(data){
		var oUl = $("#ranking-list").find("ul");
		for(var i = 0;i < data.length;i++){
		oUl.eq(i%3).append("<h3>" + data[i].title + "</h3>")
			for(var j=0;j<data[i].title_child.length;j++){
				oUl.eq(i%3).append("<li><div class='body'><div class='left'><img src='" + data[i].title_child[j].img+"'></div><div class='right'><p>"+data[i].title_child[j].des+"</p><span class='one'>"+data[i].title_child[j].price+"</span><span class='two'>"+data[i].title_child[j].price1+"</span><span>"+data[i].title_child[j].sell+"</span></div><div></li>")
			}
		}
		
	})
	$(".bg").hover(function(){
		$(this).css("background","#FA3778");
		$(".people").attr({"src":"img/12e.jpg"})
		$(".on").stop().animate({right:77})
	},function(){
		$(".on").stop().animate({right:-77})
		$(this).css("background","#4C4C4C");
		$(".people").attr("src","img/78.jpg")
	})
	$(".tw").hover(function(){
		$(this).css("background","#FA3778");
		$(".car").attr("src","img/vb1.jpg")
	},function(){
		$(this).css("background","#4C4C4C");
		$(".car").attr("src","img/-1.jpg")
	})
	$(".he").hover(function(){
		$(".er").stop().animate({right:77})
		$(this).css("background","#FA3778");
		$(".sd").attr({"src":"img/xin.jpg"})
	},function(){
		$(".er").stop().animate({right:-77})
		$(this).css("background","#4C4C4C");
		$(".sd").attr("src","img/hert.jpg")
	})
	$(".ej").hover(function(){
		$(".ej").find("img").attr("src","img/672.jpg")
		$(".as").stop().animate({right:77})
		$(this).css("background","#FA3778");		
	},function(){
		$(".ej").find("img").attr("src","img/time.jpg")
		$(".as").stop().animate({right:-77})
		$(this).css("background","#4C4C4C");		
	})
	$(".first").hover(function(){
		
		$(".hid").stop().animate({right:77})
		$(this).css("background","#FA3778");		
	},function(){
		
		$(".hid").stop().animate({right:-77})
		$(this).css("background","#4C4C4C");		
	})
	$(".we").hover(function(){
		$(".we").find("img").attr("src","img/123.jpg")
		$(".pi").stop().animate({right:140})
		$(this).css("background","#FA3778");		
	},function(){
		$(".we").find("img").attr("src","img/qw.jpg")
		$(".pi").stop().animate({right:-140})
		$(this).css("background","#4C4C4C");		
	})
$(".last").click(function(){
		
		  $('html,body').animate({scrollTop:0},1000);
		  return false;
	})
})