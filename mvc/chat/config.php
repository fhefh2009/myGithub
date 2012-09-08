<?php
//主数据库配置参数--写操作数据库
// database host
$db_host   = "localhost";
// database name
$db_name   = "my";
// database username
$db_user   = "root";
// database password
$db_pass   = "123456";
//End--主数据库配置参数--写操作数据
$conn = @mysql_connect($db_host, $db_user, $db_pass) or die("数据库链接错误");
mysql_select_db($db_name, $conn);
mysql_query("set names 'utf8'");

function htmtocode($content) {
	$content = str_replace("\n", "<br>", str_replace(" ", "&nbsp;", $content));
	return $content;
}
 ?>