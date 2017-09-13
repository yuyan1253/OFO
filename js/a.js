window.onload=function(){
	var oDiv=document.getElementById('div1');
      var oScrollBar=oDiv.getElementsByClassName('scroll_bar')[0];
      var oScroll=oDiv.getElementsByClassName('scroll')[0];
      var oContainer=oDiv.getElementsByClassName('text-con')[0];

      oScroll.onmousedown=function (ev){
        var oEvent=ev||event;

        var disY=oEvent.clientY-oScroll.offsetTop;

        document.onmousemove=function (ev){
          var oEvent=ev||event;
          var t=oEvent.clientY-disY;

          if(t<0){
            t=0;
          }else if(t>oScrollBar.offsetHeight-oScroll.offsetHeight){
            t=oScrollBar.offsetHeight-oScroll.offsetHeight;
          }

          oScroll.style.top=t+'px';

          //算比例
          var scale=t/(oScrollBar.offsetHeight-oScroll.offsetHeight)
          ;

          oContainer.style.top=-scale*(oContainer.offsetHeight-oDiv.offsetHeight)+'px';
        };

        document.onmouseup=function (){
          document.onmousemove=null;
          document.onmouseup=null;

          oScroll.releaseCapture && oScroll.releaseCapture();
        };

        oScroll.setCapture && oScroll.setCapture();
        return false;
      };
}
