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
	$.get("brand.json",function(data){
		var oUl = $("#json").find("ul");
		for(var i = 0;i < data.length;i++){			
			oUl.append("<li _id=" + data[i].id + "><h1><img src='"+data[i].logo+"'>"+data[i].brand+"</h1><p><img src='"+data[i].child[0]+"'></p><h3>"+data[i].price+"<span class ='span1'>"+data[i].price2+"</span><span class='span2'>"+data[i].discount+"</span></h3><h4>"+data[i].name+"</h4><h2>"+data[i].type+"</h2><h5>"+data[i].des+"</h5><h6><img src='" +data[i].img1+"'></h6><div class = 'join'>"+data[i].shop+"</div></li>")
			if(data[i].child.length > 1){
				oUl.find("li").eq(i).append("<div class='photo'></div>");
				for(var j=0;j<data[i].child.length;j++){
					oUl.find("li").eq(i).find(".photo").append("<img src='"+data[i].child[j]+"'/>");
				}
			}
		}
		oUl.find("li").click(function(){
			window.open("des.html?_id="+ $(this).attr("_id"),"_parent")
		})
		oUl.find("li").hover(function(){	
	 	$(this).css("border","2px double #EEE8D5");
	 	$(this).find(".photo").css("display","block")
	 	$(this).find(".join").css("display","block");
	 	var obj = $(this).find("p").find("img");
	 	$(this).find(".photo").find("img").mouseover(function(){
	 		obj.attr("src",$(this).attr('src'));
	 	})
	 },function(){
	 	$(this).css("border","");
	 	$(this).find(".join").css("display","none");
	 	$(this).find($(".photo")).css("display","none")
	 })
	})
	$.get("browse.json",function(data){
		var oUl = $("#browse").find("ul");
		for(var i = 0;i<data.length;i++){
			oUl.append("<li><div class = 'left'><img src='"+data[i].img+"'></div><div class='right'><p>"+data[i].des+"</p><p class='price'>"+data[i].price+"</p><span>"+data[i].price1+"</span></div></li>")
		}
	})
})
