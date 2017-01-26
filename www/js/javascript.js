ons.ready(function() {  
  var index = myTabbar.getActiveTabIndex();
  myTabbar.addEventListener('postchange', function(event) {
    if (myTabbar.getActiveTabIndex() == 0) {
//        gazo0.src = "test.jpg?r=" + Math.random();
//        gazo0.src = "http://192.168.0.48/speed0?r=" + Math.random();
        gazo0.src = "http://172.20.10.2/speed0?r=" + Math.random();
        console.log("停止1");
    } else if (myTabbar.getActiveTabIndex() == 1) {
//        gazo1.src = "test.jpg?r=" + Math.random();
//        gazo1.src = "http://192.168.0.150/speed1?r=" + Math.random();
        gazo1.src = "http://172.20.10.2/speed1?r=" + Math.random();
        console.log("低速1");
    } else if (myTabbar.getActiveTabIndex() == 2) {
//        gazo2.src = "test.jpg?r=" + Math.random();
//        gazo2.src = "http://192.168.0.150/speed2?r=" + Math.random();
        gazo2.src = "http://172.20.10.2/speed2?r=" + Math.random();
        console.log("中速1");
    } else{
//        gazo3.src = "test.jpg?r=" + Math.random();
//        gazo3.src = "http://192.168.0.150/speed3?r=" + Math.random();
        gazo3.src = "http://172.20.10.2/speed3?r=" + Math.random();
        console.log("高速1");
    }
  });
});

function reloadimg(){
    if (myTabbar.getActiveTabIndex() == 0) {
//        gazo0.src = "test.jpg?r=" + Math.random();
//        gazo0.src = "http://192.168.0.48/speed0?r=" + Math.random();
        gazo0.src = "http://172.20.10.2/speed0?r=" + Math.random();
        console.log("停止");
    } else if (myTabbar.getActiveTabIndex() == 1) {
//        gazo1.src = "test.jpg?r=" + Math.random();
//        gazo1.src = "http://192.168.0.150/speed1?r=" + Math.random();
        gazo1.src = "http://172.20.10.2/speed1?r=" + Math.random();
        console.log("低速");
    } else if (myTabbar.getActiveTabIndex() == 2) {
//        gazo2.src = "test.jpg?r=" + Math.random();
//        gazo2.src = "http://192.168.0.150/speed2?r=" + Math.random();
        gazo2.src = "http://172.20.10.2/speed2?r=" + Math.random();
        console.log("中速");
    } else{
//        gazo3.src = "test.jpg?r=" + Math.random();
//        gazo3.src = "http://192.168.0.150/speed3?r=" + Math.random();
        gazo3.src = "http://172.20.10.2/speed3?r=" + Math.random();
        console.log("高速");
    } 
}
function setreload(timer){ 
    setTimeout('reloadimg()',timer); 
}
