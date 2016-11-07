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
			$("#mobile").blur(function(){
				if(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test($(this).val()) || /^[a-zA-Z0-9]\w{1,10}\@[a-zA-Z0-9]{2,10}\.(cn|com)$/.test($(this).val())){	
					$("#mobile_p").html("格式正确");
					$("#password_p").css("color","green")
				}else{
					$("#mobile_p").html("<img src = 'img/wer.jpg'>格式有误请输入正确的手机或邮箱");				
				}
			})
			$("#password").blur(function(){
				if(this.value.length >= 6 && this.value.length <= 16){
					$("#password_p").html("密码长度正确");					
					if(/^\d+$/.test(this.value) || /^[a-z]+$/.test(this.value) || /^[A-Z]+$/.test(this.value)){
						$("#password_p").html("密码强度弱");
						$("#password_p").css("color","orange")
					}else if(/\d/.test(this.value) && /[a-z]/.test(this.value) && /[A-Z]/.test(this.value)){
						$("#password_p").html("密码强度强");
						$("#password_p").css("color","green")
					}else{
						$("#password_p").html("密码强度一般");
						$("#password_p").css("color","pink")
					}
				}else{
					$("#password_p").html("密码长度应该是6-16位");
					$("#password_p").css("color","red")
				}
			})
		$("#password1").blur(function(){
			if($(this).val()!=$("#password").val()){
				$("#password1_p").html("密码不一致");
			}else{
				$("#password1_p").html("密码一致");
			}
		})
	function testCode(n){ //传入n,生成n位的验证码
		var arr = []; //记录每一次生成的验证码
		for(var i = 0; i < n; i++){
			var num = parseInt(Math.random() * 100);
			if(num >= 0 && num <= 9){
				arr.push(num);
			}else if(num >= 10 && num <= 35){
				var charStr = String.fromCharCode(num + 87);
				arr.push(charStr);
			}else if(num >= 65 && num <= 90){
				var charStr = String.fromCharCode(num);
				arr.push(charStr);
			}else{
				i--; //再去将那次无用操作补回来
			}
		}
		return arr.join("");
	}
		$(".num").html(testCode(4))
		$(".span1").click(function(){
			$(".num").html(testCode(4))
		})
		  /*if($('.checkbox').checked==false){
		 	$('.login').css({disabled:true,opacity:0.5})
       $('.login').disabled = true;
        $('.login').style.opacity = 0.5;
    }*/
		   $(".text").blur(function(){
		   	$(this).val()==$(".num").html()
		   })
			 $(".login").click(function(){		 	if($("#mobile").val()==""||$("#password").val()==""||$("#password1").val()==""||$(".text").val()==""){
							 		alert("信息不完整");
							 	}else{
							 		alert("恭喜你注册成功");
							 	}			
			 var mobile = 0;
			 $(".login").click(function(){
			 	mobile = $("#mobile").val();
			 			 })
			 var rel1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
			 var rel2 = /^[a-zA-Z0-9]\w{1,10}\@[a-zA-Z0-9]{2,10}\.(cn|com)$/;
			 if((rel1||rel2).test(mobile)){
			 	if($.cookie("userinfo")){
			 		var obj = JSON.parse($.cookie("userinfo"));
			 		if(obj["tel"+mobile]){
			 			$(".information").html("该手机号或邮箱已注册")
			 		}
			 	}
			 }else {
				$(".infomation").html("请输入正确的手机号");
			}
			 $.cookie("mobile",$("#mobile").val(),{expires:7});
			 $.cookie("password",$("#password").val(),{expires:7});
		 })
			 $("#mobile").focus(function() {
		$(".infomation").html("");
	})

})