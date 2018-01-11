import './css/TouchClickAnimate.css'

//#region 点击的波纹特效类，
class TouchClickAnimate {

    animateInit=(eventType)=>{
        let duration = 750;
      
        // 样式string拼凑
        let forStyle = function(position){
            let cssStr = '';
            for( let key in position){
            if(position.hasOwnProperty(key)) cssStr += key+':'+position[key]+';';
            };
            return cssStr;
        }
    
        // 获取鼠标点击位置
        let forRect = function(target){
            let position = {
            top:0,
            left:0
            }, ele = document.documentElement;
            'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
            return {
                top: position.top + window.pageYOffset - ele.clientTop,
                left: position.left + window.pageXOffset - ele.clientLeft
            }
        }
    
        let show = function(event){
            let pDiv = event.target,
            cDiv = document.createElement('div');
            pDiv.appendChild(cDiv);
            let rectObj = forRect(pDiv),
            _height = event.pageY - rectObj.top,
            _left = event.pageX - rectObj.left,
            _scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';

            if(event.touches){
                _height = event.touches[0].pageY - rectObj.top
                _left = event.touches[0].pageX - rectObj.left
            }
            let position = {
            top: _height+'px',
            left: _left+'px'
            };
            cDiv.className = cDiv.className + " tap_animate-animation",
            cDiv.setAttribute("style", forStyle(position)),
            position["-webkit-transform"] = _scale,
            position["-moz-transform"] = _scale,
            position["-ms-transform"] = _scale,
            position["-o-transform"] = _scale,
            position.transform = _scale,
            position.opacity = "1",
            position["-webkit-transition-duration"] = duration + "ms",
            position["-moz-transition-duration"] = duration + "ms",
            position["-o-transition-duration"] = duration + "ms",
            position["transition-duration"] = duration + "ms",
            position["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            position["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            position["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            position["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            cDiv.setAttribute("style", forStyle(position));
            let finishStyle = {
            opacity: 0,
            "-webkit-transition-duration": duration + "ms",
            "-moz-transition-duration": duration + "ms",
            "-o-transition-duration": duration + "ms",
            "transition-duration": duration + "ms",
            "-webkit-transform" : _scale,
            "-moz-transform" : _scale,
            "-ms-transform" : _scale,
            "-o-transform" : _scale,
            top: _height + "px",
            left: _left + "px",
            };
            setTimeout(function(){
            cDiv.setAttribute("style", forStyle(finishStyle));
            setTimeout(function(){
                pDiv.removeChild(cDiv);
            },duration);
            },100)
        }

        let tdoms=document.querySelectorAll('.tap_animate_Content')
        for(let i=0;i<tdoms.length;i++){
            switch (eventType) {
                case "click":
                    tdoms[i].addEventListener('click',function(e){
                        let ev = e || window.event;
                        let target = ev.target || ev.srcElement;
    　　　　            if(target.className.indexOf('tap_animate')>-1){
        　 　　　　　　	show(e);
                　　　　}
                    },!1);
                    break;
            
                default:
                    tdoms[i].addEventListener('touchstart',function(e){
                        let ev = e || window.event;
                        let target = ev.target || ev.srcElement;
    　　　　            if(target.className.indexOf('tap_animate')>-1){
        　 　　　　　　	show(e);
                　　　　}
                    },!1);
                    break;
            }
        }
    }
}
export default new TouchClickAnimate()