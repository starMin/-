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
		//购物车
		$.ajax({
				url:"brand.json",
				type:"GET",
				success:function(data){
					var arr = JSON.parse($.cookie("goods"))					
					for(var i=0;i<data.length;i++){
						for(var j=0;j<arr.length;j++){
							if(data[i].id==arr[j].id){
								$(".product").append("<div class='content' _id='" + data[i].id + "'><div class='pic'><p><img src='"+data[i].child[0]+"'></p></div><div class='des'><p>"+data[i].name+"&emsp;"+data[i].type+"</p><p>"+data[i].des+"</p></div><div class='much'><span>¥"+data[i].price+"</span><button class = 'reduce'>-</button><input class = 'input-id' type = 'text' value = '"+arr[j].num+"'/><button class = 'add'>+</button><span class='span1'>¥"+parseInt(data[i].price)*arr[j].num+"</span><button class = 'delete'>删除</button></div></div>")
								$(".tw").find(".tw-box").append("<div class='box' _id='"+ data[i].id +"'><div class='box-left'><img src='"+data[arr[j].id].child[0]+"'></div><div class='box-right'><p>"+data[i].name+"&emsp;"+data[i].type+"</p><span class='span2'>¥"+parseInt(data[i].price)*arr[j].num+"</span><span>商品数量:"+arr[j].num+"</span><span class='remove'>删除</span></div></div>")								
							}
						}
					}
					$(".add").click(function(){
						$(this).parent().find(".input-id")[0].value++;				
					for(var i in arr){
						if(arr[i].id ==$(this).parent().parent().attr("_id")){						
							arr[i].num+=1;
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods",cookieStr)	;
							
						}						
					}
					sc_car()
					
					})
					$(".reduce").click(function(){
						if($(this).parent().find(".input-id")[0].value > 1){
							$(this).parent().find(".input-id")[0].value--;					
							for(var i in arr){
								if(arr[i].id ==$(this).parent().parent().attr("_id")){
									arr[i].num-=1;
									var cookieStr = JSON.stringify(arr);
									$.cookie("goods",cookieStr)	;
								}
							}
						}	
						sc_car()
					})
					$(".delete").click(function(){
						for(var i in arr){
							if(arr[i].id==$(this).parent().parent().attr("_id")){
								arr.splice(i,1);
								$(this).parent().parent().remove();
								var cookieStr = JSON.stringify(arr);
									$.cookie("goods",cookieStr)	;
							
							}
						}
						sc_car()
					})					
					$('.tw').hover(function(){
						$(".tw-box").stop().animate({right:30})						
					},function(){
						$(".tw-box").stop().animate({right:-300})
					})
					$(".remove").click(function(){
						for(var i in arr){
							if(arr[i].id==$(this).parent().parent().attr("_id")){
								arr.splice(i,1);
								$(this).parent().parent().remove();
								var cookieStr = JSON.stringify(arr);
									$.cookie("goods",cookieStr)	;
							
							}		
						}			
						sc_car()
					})
				}
				
		})	
})
