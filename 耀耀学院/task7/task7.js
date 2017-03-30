function $(ele){
	return document.getElementById(ele);
}

// 排序函数
function sortTable(listNum){
	var aTa=$('tab1').tBodies[0].rows;
	console.log(aTa);
	var arr=[];

	for(var i=0;i<aTa.length;i++){
		// console.log(aTa[i].getElementsByTagName('td')[listNum].innerHTML);
		arr[i]=aTa[i];
		console.log(arr[i]);
	}

	arr.sort(function(tr1,tr2){
		return parseInt(tr1.cells[listNum].innerHTML)-parseInt(tr2.cells[listNum].innerHTML);
	});

	for(var i=0;i<arr.length;i++){
		$('tab1').tBodies[0].appendChild(arr[i]);
	}
}

// 点击调用排序函数
function clickBundle(){
	$('engSort').onclick=function(){
		sortTable(1);
	};
	$('mathSort').onclick=function(){
		sortTable(2);
	};
	$('sptSort').onclick=function(){
		sortTable(3);
	};
	$('totSort').onclick=function(){
		sortTable(4);
	};
}

function initial(){
	clickBundle();
}

initial();