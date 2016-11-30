<?php require 'utils.php';
$page_title = 'プロフィール作成';
include 'header.php'; 
  $profile = get_profile();
  if(isset($_POST['name'])) {
    if ($profile) { 
    $id = $profile['id'];
    $sql = "update profiles set name = ?, bio = ? where id = ?";
    $params = array($_POST['name'], $_POST['bio'], $id);
  } else {
$sql = "insert into profiles (name, bio) values (?, ?)";
  $params = array($_POST['name'], $_POST['bio']);
}

 $success = get_db()->prepare($sql)->execute($params);
  $profile = get_profile(); //profileを最新の状態に, insert文が実行された(画像が入った)後のprofileを最新に
 if (isset($_FILES['image'])) { //もしfilesにimageが入ったら //imageファイルがアップロードされてなかったら、この処理はされない
 $path = "uploads/profile"; //置く場所
 @mkdir($path, 0777, true); //ディレクトリを作る
 $image = $_FILES['image']; 
 $image_name = $image['name']; //オリジナルのファイル名を設定
 $image_path = "${path}/${image_name}";
 move_uploaded_file($image['tmp_name'], $image_path); //アップロードされた時にtmp_nameで一時的にファイルを置く？

 $sql = "update profiles set image_path = ?, updated_at = current_timestamp where id = ?";
 $params= array($image_path, $profile['id']);
 $success = get_db()->prepare($sql)->execute($params);
 }
}

?>
<div class="container">
  <form action="" method="post" enctype="multipart/form-data">
    <div>
      <label for="name">名前
      <input type="text" name="name">
      </label>
    </div>
    <div>
      <label for="bio">自己紹介
      <textarea name="bio"><?php echo $profile['bio']; ?></textarea>
      </label>
    </div>
    <div>
    <img src="image.php?p" alt="画像">
      <label for="image">写真
      <input type="file" name="image">
      </label>
    </div>
    <button>作成</button>
  </form>
</div>  

<?php include 'footer.php'; ?>