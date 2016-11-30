 var del = document.getElementById("delete")
 if (del) {
del.addEventListener("click", function(event){
  var result = confirm("削除してもよろしいでしょうか？");
  if (result) {

  } else {
 event.preventDefault(); //デフォルトの動きを中止
  }
});
}