;(function($){
	$.fn.banner = function(options){
		var {items,left,right,list,autoPlay} = options	;
//		console.log({items,left,right,list})
		
		this.LOCAL = {
			iNow:0,
			iPrev:items.length -1
		}
		var that = this;
//		console.log(this)
		left.on("click",function(){
			if(that.LOCAL.iNow == 0){
				that.LOCAL.iNow = items.length -1;
				that.LOCAL.iPrev = 0
			}else{
				that.LOCAL.iNow --;
				that.LOCAL.iPrev = that.LOCAL.iNow + 1;
				
			}
//			console.log(that.LOCAL.iNow,that.LOCAL.iPrev)
			that.LOCAL.move(-1);
		})
		
		
		
		
		
		right.on("click",function(){
			if(that.LOCAL.iNow == items.length -1){
				that.LOCAL.iNow = 0;
				that.LOCAL.iPrev = items.length -1;
			}else{
				that.LOCAL.iNow ++;
				that.LOCAL.iPrev = that.LOCAL.iNow - 1;
			}
//			console.log(that.LOCAL.iNow,that.LOCAL.iPrev)
			that.LOCAL.move(1)
		})
		
		this.LOCAL.move = function(direct){
			items.eq(this.iNow).css({
				left:items.eq(0).width() * direct
				}).stop().animate({
					left:0
				},1000).end().eq(this.iPrev).css({
					left:0
				}).stop().animate({
					left:-items.eq(0).width() * direct
				},1000)
				list.children("a").removeClass("active").eq(this.iNow).addClass("active")
		}
		
		list.children("a").on("mouseenter",function(){
			if($(this).index() == that.LOCAL.iNow){
				
			}
			if($(this).index() > that.LOCAL.iNow){
				items.eq($(this).index()).css({
					left:items.eq(0).width()
				}).stop().animate({
					left:0
				}).end().eq(that.LOCAL.iNow).css({
					left:0
				}).stop().animate({
					left:-items.eq(0).width()
				})
			}
			if($(this).index() < that.LOCAL.iNow){
				items.eq($(this).index()).css({
					left:-items.eq(0).width()
				}).stop().animate({
					left:0
				}).end().eq(that.LOCAL.iNow).css({
					left:0
				}).stop().animate({
					left:items.eq(0).width()
				})
			}
			list.children("a").removeClass("active").eq($(this).index()).addClass("active")
			that.LOCAL.iNow = $(this).index();
		})
		
		
		if(autoPlay == "undefined" || autoPlay == true){
			clearInterval(that.LOCAL.timer)
			this.LOCAL.timer = setInterval(()=>{
				right.triggerHandler("click");
			},2000)
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				that.LOCAL.timer = setInterval(()=>{
				right.triggerHandler("click");
			},2000)
			})
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

















})(jQuery);
