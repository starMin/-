function $(id){
	return document.getElementById(id);
}
function textCode(n){
    var arr = [];
    for(var i = 0;i < n;i ++ ){
      var num = parseInt(Math.random()*100);
      if(num >= 0 && num <= 9){
      arr.push(num);
    }
      else if(num >= 10 && num <= 35){
        var chatStr = String.fromCharCode(num + 87);
        arr.push(chatStr);
      }
      else if(num >= 65 && num <= 90){
        var chatStr = String.fromCharCode(num);
        arr.push(chatStr);
      }else{i--;}

    }
    return arr.join("");
    } 