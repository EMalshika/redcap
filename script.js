function key(event) {
    if (event.which == 13) {
        if (rw == 0) {
            fid = f();
            rw = setInterval(run, 100);
            rs.play();
            bw = setInterval(b, 100);
            sw = setInterval(updatescore, 100);
            mw = setInterval(move, 100);
        }
    }
    if (event.which == 32) {
        if(jw == 0){
            clearInterval(rw);
            rs.pause();
            rw = -1;

            jw = setInterval(jump, 100);
            js.play();
        }
    }
}

var rs = new Audio("sound/run.mp3");
rs.loop =true;

var js = new Audio("sound/jump.mp3");

var ds = new Audio("sound/dead.mp3");

//flame
var fid = 0;
var m = 700;

function f() {

    for (var y = 0; y < 10; y++) {
        var i = document.createElement("img");

        i.src = "img/flame.gif";
        i.className = "i";

        i.style.marginLeft = m + "px";

        if (y%2 == 0) {
            m = m + 400;
        }

        if (y%2 > 0) {
            m = m + 600;
        }

        i.id = "a" + y;

        document.getElementById("b").appendChild(i);
    }

}

//boy
var rw = 0;
var r = 1;

function run() {
    var rimg = document.getElementById("boy");

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    rimg.src = "img/run(" + r + ").png";
}

//background
var bw = 0;
var x = 0;

function b() {

    x = x - 20;

    document.getElementById("b").style.backgroundPositionX = x + "px";
}

//score
var sw = 0;
var u = 0;

function updatescore() {
    u = u + 5;
    document.getElementById("score").innerHTML = u;
}

//move
var mw = 0;

function move() {
    for (var y = 0; y < 10; y++) {

        var d = document.getElementById("a" + y);

        var z = getComputedStyle(d);

        var p = parseInt(z.marginLeft);

        p = p - 20;

        d.style.marginLeft = p + "px";

        //160 - 40
        //240
        if(p < 160 & p > 40) {
            if(mt > 270) {
                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                jw = -1;

                clearInterval(sw);

                clearInterval(bw);

                clearInterval(mw);

                dw = setInterval(dead, 100);
                ds.play();
            }
        }
    }
}

//jump
var jw = 0;
var j = 1;
var mt = 349;

function jump(){
    var jimg = document.getElementById("boy");

    if(j <= 6) {    // 1 - 6 Image
        mt = mt - 30;
    }

    if(j >= 7) {    // 7 - 12 Image
        mt = mt + 30;
    }

    jimg.style.marginTop = mt + "px";

    j = j + 1;

    if (j == 13) {
        j = 1;

        clearInterval(jw);
        jw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if (fid == 0) {
            fid = f();
        }

        if (mw == 0) {
            mw = setInterval(move, 100);
        }

        if (bw == 0) {
            bw = setInterval(b, 100);
        }

        if (sw == 0) {
            sw = setInterval(updatescore, 100);
        }
    }

    jimg.src = "img/jump (" + j + ").png"

}

//Dead
var dw = 0;
var d = 0;

function dead() {
    var dimg = document.getElementById("boy");

    d = d + 1;

    if (d == 11) {
        d = 10;

        dimg.style.marginTop = "349px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endscore").innerHTML = u;

    }

    dimg.src = "img/Dead (" + d + ").png";
}

function re() {
    location.reload();
}