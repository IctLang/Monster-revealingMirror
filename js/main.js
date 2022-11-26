

function copyTkl() {
   const range = document.createRange();
   range.selectNode(document.getElementById('text1'));
   const selection = window.getSelection();
   if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
}

function  create() {
    var myid = document.getElementById('myid');
    var url = document.getElementById('url');
    var kd =document.getElementById('text1');
    var bt=document.getElementById('bt');
    if (myid.value=="" || url.value==""){
        bt.innerText = "注意！";
        kd.innerText ="密钥或跳转地址不能为空！";
        kd.href='';
    }else if(myid.value.replace(/[\a-\z\A-\Z0-9\_]+/g,'')==""){
        var base64Str = Base64.encode(myid.value);
       var http1='https://marr.xn--sxw.fun/marr.php?id='+base64Str+'&url='+url.value;
    kd.innerText = http1;
    kd.href=http1;
    bt.innerText = "链接生成成功 已自动复制";
    copyTkl();
    }
    else
    {
        bt.innerText = "注意！";
        kd.innerText ="密钥只能使用英语数字结合！";
        kd.href='';
    }
}


function  ckpt() {
    var myid = document.getElementById('myid');
    var kd =document.getElementById('text1');
    var bt=document.getElementById('bt');
    if (myid.value==""){
        bt.innerText = "注意！";
        kd.innerText ="请输入密钥，才能查看图片！";
        kd.href='';
    }else{
        window.location.href='img.php?id='+myid.value
    }
}

