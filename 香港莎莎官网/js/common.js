$(function(){
	$(".total").hover(function(){
		$(".total").find("ul").css("display","block");
	},function(){
		$(".total").find("ul").css("display","none");
	})	
			$("#nav").find("#right").find("ul").find("li").eq(0).hover(function(){			
				$("#des").css("display","block")
				},function(){
					$("#des").css("display","none")
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
		var oLi = $("#product").find("ul").find("li").eq(6);
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
		$("#product").find(".firstly").find("li").hover(function(){
			$(this).find("a").css("color","#EC3E7D")
		},function(){
			$(this).find("a").css("color","#666")
		})
		$("#product").find(".firstly").find(".total").hover(function(){
			$(this).find("a").css("color","#fff")
		},function(){
			$(this).find("a").css("color","#fff")
		})	
	})
	$.get("line.json",function(data){
		var oUl = $(".total").find("ul");
		for(var i = 0; i < data.length;i++){			
		oUl.append("<li><img class='top' src='" + data[i].img + "'/><a>" + data[i].title + "</a><img class = 'jian' src='" + data[i].pic + "'/><div class = 'list'></div></li>")
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
		
		  $("html,body").animate({scrollTop:0},1000);
	})
})
	