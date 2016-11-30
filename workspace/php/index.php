<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php
  $arr = array('apple','banana','orange');
  print_r($arr);
  echo($arr[1]);

  echo("<br>");
  $arr2 = array('red' => 'apple','yellow' => 'banana', 'orange' => 'orange');
  print_r($arr2);

  $arr3 = 
      array(
        'red' => array('apple','cherry'),
        'yellow' => array('banana','mango'),
        'orange'
        );
  print_r($arr3);

  $arr4 = ['red' => ['apple', 'cherry']];
  print_r($arr4);
  ?>

  
<?php $message = <<< E
  あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああアアアアアアあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
E;
  echo $message; 
?>
<hr>
<pre>
<?php
  print_r($_SERVER);
?>
</pre>
<h2>GET情報</h2>
<?php
  print_r($_GET);
?>
<h2>POST情報</h2>
<?php print_r($_POST); ?>
<h2>FILES情報</h2>
<?php print_r($_FILES); ?>
<h2>REQUEST情報</h2>
<?php print_r($_REQUEST); ?>

<form method ="post" enctype="multipart/form-data">
  <input type="text" name="shopname" value="アヤラセンター">
  <input type="file" name="sample">
  <button>送信</button>
</form>

</body>
</html>

