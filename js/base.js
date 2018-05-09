//接口地址
//开发
//var URL1 = "http://192.168.171.12:9002/";
//测试
var URL1 = "http://192.168.171.16:9002/";
//生产
//var URL1 = "http://lb.qtoubao.cn:9000/insd/"
//图片上传开发
//var URL2 = "http://192.168.171.12:9019/";
//图片上传测试
var URL2 = "http://192.168.171.16:9019/";

var deviceWidth = document.documentElement.clientWidth;

$(function() {
	jQuery.support.cors = true;
	//<header-menu>-------------------------->
	var e = "abbr,article,aside,audio,canvas,figure,figcaption,footer,header,hgroup,mark,menu,nav,section,time,vidio".split(",");
	var i = e.length;
	for(i = 0; i < e.length; i++) {
		document.createElement("input");
	}
	//html的fontSize
	$("html").css("font-size", deviceWidth / 7.5);
	(function ($) {
	    $.getUrlParam = function (name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]); return null;
	    }
	})(jQuery);
})

var windheight = $(window).height(); 
$(window).resize(function(){
   var docheight = $(window).height();  
   if(docheight < windheight){            
      $("footer").css("display","none");
   }else{
      $("footer").css("display","inline-block");
	
   }           
});