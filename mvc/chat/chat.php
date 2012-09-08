<?php 
	include("config.php");
	$Sever=$_SERVER["REQUEST_METHOD"];
	
	if($Sever=="POST")
	{
		/*添加操作*/
		$post=$GLOBALS['HTTP_RAW_POST_DATA'];
		$post = json_decode($post);
		$username=$post->username;
		$content=$post->content;
		$date=$post->date;
		$sql="insert into test (username,content,date) values ('".$username."','".$content."','".$date."')";
		mysql_query($sql) or die('错误');
	}
	if($Sever=="GET")
	{
		/*查询操作*/
		$sql="select * from `test`";
		$query=mysql_query($sql);
		while ($row = mysql_fetch_assoc($query)) {
			$a[] = $row;
		}
		echo json_encode($a);
	}
	if($Sever=="DELETE")
	{
		$id=$_SERVER["PATH_INFO"];
		$idArray=explode("/",$id);
		$del="delete from test where id=".$idArray[1];
		mysql_query($del) or die('错误');
	}
?>
