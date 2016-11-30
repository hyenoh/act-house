<?php require 'utils.php'; ?>
<?php
$page_title = get_title("TOP");
?>
<?php include 'header.php'; ?>
  <div id="container">
  <div class="upper-container">
  <header>
     <div class="right-header">
        <div id="social-icon">
        <a href="https://www.facebook.com/"><i class="fa fa-facebook fa-2x"></i></a>
        <a href="https://twitter.com/?lang=ja"><i class="fa fa-twitter fa-2x"></i></a>
        <a href="https://www.instagram.com/hyeonrepublic/?hl=ja"><i class="fa fa-instagram fa-2x"></i></a>
         </div>
      <form action="index.php">
        <input type="text" name="q">
        <button>検索</button>
      </form>
    </div>
    <div id="blog_name">
     <h1><?php echo get_blogname(); ?></h1>
  </header>
  </div>
     <ul class="breadcrumbs">
       <li><a href="index.php">HOME></a>
       <a href="new.php" class="color">新規記事作成</a>
       </li>
    </ul>
      <div class="top-content">
      <h1 class="top">自由だとか</h1>
      <h1 class="top2">自分だとか</h1>
      </div>
  </div>
  <div class="bottom-content">
  <div class="bottom-left">
   <div class="left-content pink">
    <p class="monthly">Monthly Archive</p>
  <?php
  //月別アーカイーブ
    foreach(get_posts_month() as $row) : 
    $year = $row['year'];
    // $month = $row['month'];
    // $qs = "y=${year}&m=$month";
    // link_tag("index.php?${qs}","${year}/${month}");
      $month = $row['month'];
      $show_month = toEnglish_month($month);
    $qs = "y=${year}&m=${month}";
    link_tag("index.php?${qs}","${year}/${show_month}"); //月間アーカイーブをの月を数字を文字に
    ?>
    <ul>
    </li>
    </ul>
  <?php endforeach; ?>
  <a href="index.php?st=draft">下書き一覧</a>
  <div class="drafts">
    <ul>
      <?php foreach(get_categories() as $row) : ?>
        <li>
        <?php $category = $row['category']; ?>
        <?php link_tag("index.php?cat=${category}", $category); ?> <!-- aタグをこれによって代理している。utilsに詳細-->
          <?php echo $row['count']; ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
  </div>
 <div id="content">
    <?php
      if (is_category()) {
      $cat = $_GET['cat'];
      $result = get_posts_by_category($cat);
      }else if (is_search()) {
        $q = $_GET['q'];
        $result = get_posts_by_search($q);
      } else if (is_draft()) {
        $reult = get_posts_by_status();
      } else if (is_archive_by_month()) {
        $year = $_GET['y'];
        $month = $_GET['m'];
        $result = get_posts_by_month($year, $month);
      } else {
        $result = get_posts();
      }
      /*$stmt = get_db()->query($sql);
      $count_sql = str_replace('*', 'count(*)', $sql);
      $count_stmt = get_db()->query($count_sql);
      $count = $count_stmt->fetch();*/
      if(is_category()) :?>
      <p>カテゴリ<?php echo $_GET['cat']; ?>の投稿一覧</p>
      <?php endif;

      if (count($result) == 0) { ?>
        <p>検索結果がありませんでした</p>

      <?php } else {
        //記事表示開始
      foreach($result as $row) {
        ?>
      <a href="show.php?id=<?php echo $row['id']; ?>">
       <article>
        <h2 class="color"><?php echo $row['title']; ?></h2>
         <span>カテゴリ:<?php echo $row['category']; ?></span>
        
        <p><?php echo $row['content']; ?></p>
        <?php if (empty($row['image_path'])) :?>
        <img src="noimage.png" alt="">
        <?php else : ?>
        <img src="image.php?id=<?php echo $row['id']; ?>" alt="<?php echo $row['title']; ?>">
        <?php endif; ?>
       </article>
      </a>
      <?php }} ?>
    </div>
  </div>
    <aside>
      <div id="profile">
      <a href="edit_profile.php">
        <?php $profile = get_profile(); ?>
        <img src="image.php?p" class="profile_pic" alt="<?php echo $profile['name']; ?>">
      </a>
        <h3 class="name"><?php echo $profile['name']; ?></h3>
        <p class="bio"><?php echo $profile['bio']; ?></p>

      </div>
    </aside> 
  </div>
  </div>
<?php include 'footer.php'; ?>