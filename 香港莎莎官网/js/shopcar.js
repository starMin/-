$(function(){
	$.ajax({
		url:"brand.json",
		type:"GET",
		success:function(data){
			var html = "";
			for(var i = 0;i < data.length;i++){
				html+="<li class='goods_item'><div class= 'goods_pic'><img src='"+data[i].child[0]+"'></div><div class='goods_title'><p>"+data[i].name+"</p><p>"+data[i].type+"</p><p>"+data[i].price+"</p></div><div class='sc'><div class='sc_btn' id='"+data[i].id+"'>加入购物车</div></div></li>";
			}			
		}
	})
})
