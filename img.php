<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>照妖镜</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" href="img/logo.png">
</head>

<body>
    <a href="index.html"><div class="back card-tu">返回</div></a>
<div class="ck card-tu">
    <?php
error_reporting(0);
$type = trim($_GET['type']);
$page = max($_GET['page'],0); //从零开始
$id = trim($_GET['id']);
$imgnums = 2; //每页显示的图片数
$path = "./images/" . $id; //图片保存的目录

if ($type == "del") {
    echo "<div class=\"tc\">确定清空所有照片？</div>";
    echo "<a href=?type=dell&id=$id><div class=\"anniu card-tu\">确  定</div></a> <a href=javascript:history.back(-1)><div class=\"anniu card-tu\">返  回</div></a> <br /><br />";
    exit;
}else if ($type == "dell") {
  if ($dh = opendir($path)){
    while (($file = readdir($dh)) !== false){
      unlink($path . '/' . $file);
    }
    closedir($dh);
  }
    @rmdir($path);
    echo '<br />该ID下的所有照片已经清除！<br />';
}

  if ($dh = opendir($path)){
      $i=0;
    while (($file = readdir($dh)) !== false){
    if (!is_dir($path.'/'.$file)) {
     $array[]=$file;//保存图片名称
     ++$i;
    }
    }
    closedir($dh);
  }
  if ($array) {
    rsort($array); //修改日期倒序排序
    for ($j = $imgnums * $page;$j < ($imgnums * $page + $imgnums) && $j < $i;++$j) {
        echo "<img src=" . $path . "/" . $array[$j] . " class=\"ckimg card-tu\">";
    }
    $realpage = @ceil($i / $imgnums) - 1;
    $Prepage = max($page-1,0);
    $Nextpage = $page + 1;
    echo "<br/><a href=?page=$page&id=$id&type=del><div class=\"qkan card-tu\">清空照片</div></a>";
}else{
    echo "<br />该ID下没有任何照片<br /><br />";
}
if ($page == 0) {
    echo "<div class=\"anniu card-ao\">首  页</div>";
    echo "<div class=\"anniu card-ao\">上一页</div>";
    echo "<a href=?page=$Nextpage&id=$id><div class=\"anniu card-tu\">下一页</div></a>";
    echo "<a href=?page=$realpage&id=$id><div class=\"anniu card-tu\">末  页</div></a><br/><br/>";
} else if ($page == $realpage) {
    echo "<a href=?page=0&id=$id><div class=\"anniu card-tu\">首  页</div></a>";
    echo "<a href=?page=$Prepage&id=$id><div class=\"anniu card-tu\">上一页</div></a>";
    echo "<div class=\"anniu card-ao\">下一页</div>";
    echo "<div class=\"anniu card-ao\">末  页</div><br/><br/>";
} else if ($page < $realpage){
    echo "<a href=?page=0&id=$id><div class=\"anniu card-tu\">首  页</div></a>";
    echo "<a href=?page=$Prepage&id=$id><div class=\"anniu card-tu\">上一页</div></a>";
    echo "<a href=?page=$Nextpage&id=$id><div class=\"anniu card-tu\">下一页</div></a>";
    echo "<a href=?page=$realpage&id=$id><div class=\"anniu card-tu\">末  页</div></a><br/><br/>";
}else{
    echo "不存在的页面<br /><br />";
}

?>
</div>
</body>