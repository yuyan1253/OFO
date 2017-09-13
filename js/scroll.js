

    window.onload=function (){
      var oDiv=document.querySelector('.text');
      var oScrollBar=document.querySelector('.scroll_bar');
      var oScroll=document.querySelector('.scroll');
      var aContainer=document.querySelectorAll('.post-txt');
      
      
			//	console.log(oContainer)
      //拖拽
      oScroll.onmousedown=function (ev){
        var oEvent=ev||event;

        var disY=oEvent.clientY-oScroll.offsetTop;

        document.onmousemove=function (ev){
          var oEvent=ev||event;
          var t=oEvent.clientY-disY;

          setTop(t);
        };

        document.onmouseup=function (){
          document.onmousemove=null;
          document.onmouseup=null;

          oScroll.releaseCapture && oScroll.releaseCapture();
        };

        oScroll.setCapture && oScroll.setCapture();
        return false;
      };

      //滚轮
      function wheel(ev){
        var oEvent=ev||event;

        //wheelDelta  IE、谷歌    下   负
        //detail   火狐       下   正
        var down=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;

        var t=oScroll.offsetTop;

        if(down){
          t+=10;
        }else{
          t-=10;
        }

        setTop(t);

        oEvent.preventDefault && oEvent.preventDefault();
        return false;
      }
      if(navigator.userAgent.indexOf('Firefox')==-1){
        oDiv.onmousewheel=wheel;
      }else{
        oDiv.addEventListener('DOMMouseScroll', wheel, false);
      }

      //重用
      function setTop(t){
        if(t<0){
          t=0;
        }else if(t>oScrollBar.offsetHeight-oScroll.offsetHeight){
          t=oScrollBar.offsetHeight-oScroll.offsetHeight;
        }

        oScroll.style.top=t+'px';

        var scale=t/(oScrollBar.offsetHeight-oScroll.offsetHeight);
			for(var i=0;i<aContainer.length;i++){
					
      	 aContainer[i].style.top=-scale*(aContainer[i].offsetHeight-oDiv.offsetHeight)+'px';
      			
				}
      }
       
    };