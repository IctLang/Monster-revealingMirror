var cav=document.getElementById("can2");
var cxt=cav.getContext("2d");

function drawClock(){
    cxt.clearRect(0,0,100,100)

var now=new Date()
sec=now.getSeconds()
min=now.getMinutes()
hour=now.getHours()
hour=hour+min/60
hour=hour>12?hour-12:hour


// 画表盘
cxt.beginPath()
cxt.strokeStyle='#999';
cxt.lineWidth=1;
cxt.arc(50,50,41,0,2*Math.PI,false)
cxt.stroke()
cxt.closePath()

cxt.beginPath()
cxt.strokeStyle='black';
cxt.lineWidth=2;
cxt.arc(50,50,38,0,2*Math.PI,false)
cxt.stroke()
cxt.closePath()

// 画时刻度
for(var i=0;i<12;i++){
    cxt.beginPath()
    cxt.save()
    cxt.translate(50,50)
    cxt.lineWidth=2
    cxt.strokeStyle='black'
    cxt.rotate(i*30*Math.PI/180)
    cxt.moveTo(0,-38)
    cxt.lineTo(0,-35)
    cxt.stroke()
    cxt.restore()
    cxt.closePath()
}


// 画时针
    cxt.beginPath()
    cxt.save()
    cxt.translate(50,50)
    cxt.lineWidth=3
    cxt.strokeStyle='black'
    cxt.rotate(30*hour*Math.PI/180)
    cxt.moveTo(0,-20)
    cxt.lineTo(0,2)
    cxt.stroke()
    cxt.restore()
    cxt.closePath()

    // 画分针
    cxt.beginPath()
    cxt.save()
    cxt.translate(50,50)
    cxt.lineWidth=2
    cxt.strokeStyle='black'
    cxt.rotate(min*6*Math.PI/180)
    cxt.moveTo(0,-26)
    cxt.lineTo(0,3.4)
    cxt.stroke()
    cxt.restore()
    cxt.closePath()

    // 画秒针
    cxt.beginPath()
    cxt.save()
    cxt.translate(50,50)
    cxt.lineWidth=1
    cxt.strokeStyle='red'
    cxt.rotate(sec*6*Math.PI/180)
    cxt.moveTo(0,-3)
    cxt.lineTo(0,-33)
    cxt.stroke()
    cxt.restore()
    cxt.closePath()

    // 画圆心
    cxt.beginPath()
    cxt.save()
    cxt.translate(50,50)
    cxt.lineWidth=1
    cxt.strokeStyle='red'
    cxt.fillStyle="#ccc"
    cxt.arc(0,0,0.1,0,2*Math.PI,true)
    cxt.stroke()
    cxt.fill()
    cxt.restore()
    cxt.closePath()
}
    setInterval(drawClock,1000)