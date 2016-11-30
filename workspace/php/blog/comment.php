<?php
require 'utils.php'; // データベースを扱うので 
$user_name = $_POST['user_name']; //送られてきた情報を取ってくる
$comment = $_POST['comment'];//送られてきた情報を取ってくる
$post_id = $_POST['post_id'];//送られてきた情報を取ってくる

$sql = "insert into comments (user_name, comment, post_id) values (?, ?, ?)";
$params = array($user_name, $comment, $post_id);
$success = get_db()->prepare($sql)->execute($params);

header("Location: show.php?id=${post_id}");//これでshow.phpにコメントを飛ばす

?>