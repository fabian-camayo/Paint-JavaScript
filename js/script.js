tools = "pencil";    
size = 5;
paint = Boolean(false);
color_prim = "black";
color_sec = "#fff";

window.onload = function(){
    'use strict';
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    c.setAttribute("width", document.getElementById("body-paint").clientWidth);
    c.setAttribute("height", window.innerHeight);
    c.setAttribute("style", "border:2px solid");
    c.id = "canva";
    document.getElementById("body-paint").appendChild(c);

    c.onmousedown = function (e){
        paint = true;
        if( tools == "pencil" ){
            ctx.moveTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
        }
    }

    c.onmouseup = function(){
        paint = false;
        ctx.beginPath();
    }

    c.onmousemove = function(e){
        if (paint) {
            if (tools == "pencil") {
                ctx.lineTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
                ctx.lineWidth = size;
                ctx.strokeStyle = color_prim;
                ctx.stroke();
            }

            else if(tools == "eraser"){
                ctx.beginPath();
                ctx.clearRect(e.pageX - c.offsetLeft, e.pageY - c.offsetTop,20,20);
            }
        }
    }

    c.onmouseout = function(){
        paint = false;
    };

    var download = document.getElementById("download");

    download.addEventListener("click", function () {
    var image = document.getElementById("canva").toDataURL("image/png").replace(/^data:image\/[^;]/, "data:application/octet-stream");
    download.setAttribute("href", image);
    });


}

