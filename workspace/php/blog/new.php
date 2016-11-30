<?php 
require 'utils.php';
$page_title = get_title("記事新規作成"); ?>

<?php include 'header.php'; ?>

  <ul class="breadcrumbs new_bread">
    <li><a href="index.php">HOME</a></li> 
    <li> > </li>
    <li> 新規記事作成</li>
  </ul>

    <video autoplay loop id="bgvid">
   <source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm">
   <source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4">
  </video>

    <div class="new_whole">
    <form action="post.php" name="form" method="post" enctype="multipart/form-data">
      <div class="new post_title">
        <label for="title"> title
          <input type="text" name="title">
        </label>
      </div>
      <div class="new post_cont">
         <label for="content">How are you doing?<textarea name="content" id="" cols="30" rows="10"></textarea>
         </label>
      </div>
      <div class="new post_cate">
       <label for="category"> category
        <input type="text" name="category">
       </label>
      </div>
      <div class="new post_image">
        <label for="image">
          image
        <input type="file" name="image">
        </label>
      </div>
      <div class="new post_draft"> 
        <label for="draft">
        draft
          <input type="checkbox" name="draft" value="true">
        </label>
      </div>
      <div class="new post_send">
        <button>send</button>
      </div>
    </form>
  </div>
<?php include 'footer.php'; ?>