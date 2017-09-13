window.onload=function(){
	var oA=document.querySelector('.a2');
	var odiv=document.querySelector('.erweima');
	console.log(oA)
	console.log(odiv)
	oA.onmouseover=function(){
		// alert(1)
		odiv.style.display='block';
	}
	oA.onmouseout=function(){
		// alert(2)
		odiv.style.display ='none';
	}
}