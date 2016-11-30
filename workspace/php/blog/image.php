<?php
require 'utils.php';
if (isset($_GET['p'])) {
  $profile = get_profile();
  $image_type = "image/jpeg"; #他のファイル形式だと取れない
  $image_path = $profile['image_path'];
  $file_size = filesize($image_path);
} else {
$id = $_GET['id'];
$post = get_post($id);

$image_path = $post['image_path'];
$image_type = $post['image_type'];
$file_size = filesize($image_path);
}

header("Content-Length: ${file_size}");
header("Content-Type: ${image_type}");
echo file_get_contents($image_path); //この３行は両方に使われるため、外側に出した
?>