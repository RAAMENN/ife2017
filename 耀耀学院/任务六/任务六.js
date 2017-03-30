// 将HTML转换为节点
function html2node(str){
	var container=document.createElement('div');
	container.innerHTML=str;
	return container.children[0];
}

// 附值属性
//extent({a:1},{b:1,a:2} -> {a:1,b:1})
function extend(o1,o2){
	for(var i in o2) if(typeof o1[1]==="undefined"){
		o1[i]=o2[i];
	}
	return o1;
} 


// Modal

var template="<div class='m-modal'><div class='modal_wrap animated'><div class='modal_head'>标题</div><div class='modal_body'>内容</div><div class='modal_foot'><a class='confirm' href='#'>确认</a><a class='cancel' href='#'>取消</a></div></div></div>";

function Modal(options){
	options=options||{};
	// 即div.m-modal节点
	this.container=this._layout.cloneNode(true);
	// body用于插入自定义内容
	this.body=this.container.querySelector('.modal_body');
	// 窗体节点，在应用动画时有用
	this.wrap=this.container.querySelector('.modal_wrap');

	// 将options复制到组件实例上
	extend(this,options);

	this._initEvent();
}

// function animateClass(node,className,callback){
// 	function onAnimateEnd(){
// 		delClass(node,className);

// 		node.removeEventListener('animationend',onAnimateEnd);
// 		callback();
// 	}

// 	addClass(node,className);
// 	node.addEventListener('animationend',onAnimateEnd);
// }
extend(Modal.prototype,{
	_layout:html2node(template),

	setContent:function(content){
		if(!content) return;

		// 支持两种字符串结构和DOM节点
		if(content.nodeType===1){
			this.body.innerHTML='';
			this.body.appendChild(content);
		}
		else{
			this.body.innerHTML=content;
		}
	},

	// 显示弹窗
	show:function(content){
		if(content) this.setContent(content);
		document.body.appendChild(this.container);
		// animateClass(this.wrap,this.animation.enter);
	},

	hide:function(){
		var container=this.container;
		document.body.removeChild(container);
	},

	// 初始化事件
	_initEvent:function(){
		this.container.querySelector('.confirm').addEventListener('click',this._onConfirm.bind(this));
		this.container.querySelector('.cancel').addEventListener('click',this._onCancel.bind(this));
	},

	_onConfirm:function(){
		this.onConfirm();
		this.hide();
	},

	_onCancel:function(){
		this.onCancel();
		this.hide();
	}
});