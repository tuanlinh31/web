var x = [0,1,2,3,4,5,6,7,8,9,10,11];
var ran = parseInt(Math.random()*11);
console.log(ran);
var t = 0;
function Img() {
    var y = document.getElementById("nt");
    // if(f){
    //     x.style.display = "block";
    //     f = false;
    // }else {
    //     x.style.display = "none";
    //     f = true;
    // }
    t+=5;
    y.style.transform = "rotate("+t+"deg)";
    if(t>=360*5+(ran*30)) // quay du 5 vong thi dung + 1 doan di den phan thuong
        clearInterval(ss);
}
var ss = setInterval(Img,10);