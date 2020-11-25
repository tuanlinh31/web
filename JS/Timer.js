    do{
        var m = prompt("nhap so phut: ");
        m = parseInt(m);
    }while(isNaN(m) || m<0);
    do{
        var s = prompt("nhap so giay");
        s = parseInt(s);
    }while(isNaN(s) || s<0);



var min = m, sec =s;
function countdownTimer(){
    var min_txt = min >=10?min:"0"+min;
    var sec_txt = sec >=10?sec:"0"+sec;

    var mm = document.getElementById("min");
    mm.innerText = min_txt;

    var ss = document.getElementById("sec");
    ss.innerText = sec_txt;

    sec--;
    if(sec<0){
        sec = 59;
        min --;
    }
    if(min<0){
        clearInterval(timer);
    }
}
var timer = setInterval(countdownTimer,1000);