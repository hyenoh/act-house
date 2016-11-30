<?php require 'utils.php'; ?>
<?php
if (!isset($_GET['id'])){
  $error = "idが指定されていません";
  $page_title = "エラー";
} else {
  $id = $_GET['id'];
  $post = get_post($id);
  $title = '記事'.$post['title'].'の編集';
  $page_title = get_title($title);
}
?>
<?php include 'header.php'; ?>
  <?php if (isset($error)) : ?>
    <?php echo $error; ?>
  <?php else : ?>
  <div class="container">
    <ul class="breadcrumbs">
<!--       <li><a href="index.php">HOME</a></li>
      <li> > </li>
      <li><a href="show.php?=<?php echo $id; ?>"><?php echo $post['title']; ?></a></li>
      <li> > </li>
      <li> edit </li> -->
    </ul>
    <?php $pages = 
    [ 
    ['url' => 'index.php', 'label' => 'HOME'],
    ['url' => 'show.php?=${id}', 'label' => $post['title']],
    ['url' => '', 'label' => 'edit']
    ];
    echo breadcrumbs($pages);
    ?>

    <form action="post.php" name="form" method="post" enctype="multipart/form-data">
      <div>
        <label for="title"> title
          <input type="text" name="title" value="<?php echo $post['title']; ?>">
        </label>
      </div>
      <div>
         <label for="content">content<textarea name="content" id="" cols="30" rows="10"></textarea>
         </label>
      </div>
      <div>
        <label for="category">
        <input type="text" name="category" value="<?php echo $post['category']; ?>">
        </label>
       </div>
      <div>
        <label for="image">
          <input type="file" name="image">
        </label>
      </div>
      <div>
      <label for="draft">
      <?php
        $draft = $post['status'] == 'draft';
      ?>
        下書き
        <input type="checkbox" name="draft" value="true" <?php if ($draft) echo 'checked'; ?>>
      </label>
      </div>
      <div>
        <button>send</button>
        <input type="hidden" name="mode" value="edit">
        <input type="hidden" name="id" value="<?php echo $post['id']; ?>">
      </div>
    </form>
  </div>
<?php endif; ?>
<?php include 'footer.php'; ?>