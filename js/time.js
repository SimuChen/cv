var mydate=new Date();
			var weekday=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
			var thedate=mydate.getDay();
			document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+mydate.getFullYear()+"年"+(mydate.getMonth()+1)+"月"+mydate.getDate()+"日"+"<br/>"+weekday[thedate]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"每天进步一点点~");	//获取时间// JavaScript Document