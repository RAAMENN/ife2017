function $(ele){
	return document.getElementById(ele);
}

var Modal =function(){
	this.init();
};

Modal.prototype={
	init:function(){
		var sHeight = document.documentElement.scrollHeight;
        var sWidth = document.documentElement.scrollWidth;

		this.mask=document.createElement('div');
        this.mask.id = 'mask';
        this.mask.style.height = sHeight + 'px';
        this.mask.style.width = sWidth + 'px';
        this.mask.style.display='none';

        this.ele = document.createElement('div');
        this.ele.id = 'login';
        this.ele.innerHTML = "<div class='loginCon'><div id='close'>X</div></div>";
        this.ele.style.display='none';
        document.body.appendChild(this.mask);
        document.body.appendChild(this.ele);
	},

	show:function(){
        this.mask.style.display='block';
        this.ele.style.display='block';
	},

	hide:function(){
        this.mask.style.display='none';
        this.ele.style.display='none';
	}
};

window.onload=function(){
	var modal=new Modal();
	$('u-trigger').onclick=function(){
		modal.show();
	};
	$('mask').onclick=function(){
		modal.hide();
	};
	$('close').onclick=function(){
		modal.hide();
	};
};
