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
			$(".login").click(function(){
				if($.cookie("mobile")==$("#mobile").val()&&$.cookie("password")==$("#password").val()){
					//alert($("#mobile").val());
					//alert($("#password").val());
				//alert("使用cookie缓存进行登录");
				window.location = "index.html";
			}
			})
			
})
