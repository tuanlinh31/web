function grid(arr) {
    var grid_html = "";
    for (var i=0;i<arr.length;i++){
        grid_html+= "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item\">\n" ;
        grid_html+=   "                    <img src =\""+arr[i].image+"\"\n";
            "                        <h2>Tiêu đề item</h2>\n" +
            "                        <p class='price'>20.000đ</p>\n" +
            "                    </div>\n" +
            "                </div>";
    }
    return grid_html;
}

function getMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // string ket qua tra ve
            rs = JSON.parse(rs); // bien string thanh JSON
            var menu = rs.data;
            console.log(menu);
            document.getElementById("" + "").innerHTML = grid(menu);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    xhttp.send();
}
getMenu();