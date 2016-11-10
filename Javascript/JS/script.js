    document.getElementById("remove-div")
    .addEventListener("click",function(){
      var container =
      document.getElementById("container");
      var box= container.children;  // #このchildrenは、もともと決まっている名前。
      console.log(box);
      // container.removeChild(box[3];
      var f = container.firstChild;
      var l = container.lastChild
      container.removeChild(l);
});

    document.getElementById("add-div")
    .addEventListener("click", function(){
      var c = document.getElementById("container");
      var e = document.createElement("div");
      e.innerHTML = c.children.length + 1;
      e.setAttribute("class", "child");
      document.getElementById("container")
      .appendChild(e);
    });

    var timerId;
    document.getElementById("stop")
    .addEventListener("click", function(){
      clearInterval(timerId);
      timerId = undefined;
    });
    document.getElementById("start")
    .addEventListener("click", function(){
      if (timerId == undefined) {
      var value = 0;
      timerId = setInterval(function(){
      var timer = document.getElementById("timer-display");
      value++;
      timer.innerHTML = value;
    },1000);
    }
    });

    document.getElementById("delay")
    .addEventListener("click", function(){
      setTimeout(function(){
        alert("3秒後にこんにちは")
      }, 3000);
    });

    var i = 0;
    document.getElementById("image")
    .addEventListener("click", function(){
      var images = 
      [
        ["hari.jpeg"],
        ["cat.jpeg"],
        ["dog.jpeg"],
        ["puppy.jpg"]
      ];

      this.src = images[i][0];

      i++;
      if(i >= images.length) {
        i = 0;
      }
    });

    document.getElementById("div1")
    .addEventListener("mouseover", function(){
      // var div = document.getElementById("div1");
      this.style.backgroundColor = "#ff2222";
    });

    document.getElementById("div2")
    .addEventListener("mouseover",function(){
      var style = this.style;
    if (style.backgroundColor == ""){
    style.backgroundColor = "blue";
    style.borderRadius = "50px";
    } else {
    style.backgroundColor = null;
    style.borderRadius = null;
    }
    });

    document.getElementById("alert")
    .addEventListener('click',function(){
        alert("Hello javascript!");
    }) ;

    document.getElementById("btn1")
    .addEventListener('click',function(){
      var value = document.getElementById("text1").value;
        if (value == "1") {
          alert("1です");
        } else if ( value == "2") {
          alert("２です");
        } else if ( value == "1003") {
          alert("それはあなたの誕生日です");
        } else {
          alert("1じゃないです");
        }
      });

    document.getElementById("open-self")
    .addEventListener('click',function(){
      location.href = "http://yahoo.co.jp"
    });

    document.getElementById("open-new")
    .addEventListener("click",function(){
      window.open("http://www.apple.com/ph");
    });
    document.getElementById("btn4")
    .addEventListener("click",function(){
      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
      var num = +from; //"1"と"10"を数字に変換
      var total = 0;
      while(num <= +to) {
        total = total + num;
        num++;
      }
      alert(total);
    })
    document.getElementById("btn3")
    .addEventListener("click", function(){
      var gender = new Array();
      gender[0] = "男";
      gender[1] = "女";
      gender[2] = "不明";
    console.log(gender);
    // alert(gender[1]);
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    console.log(month);
    var index = document.getElementById("text2").value;
    // alert(month[index]);
    for(var i=0; i<month.length; i++) {
           console.log(month[i])
      if (i == 4) {
      break;
      }
    }
  });

    document.getElementById("btn2")
    .addEventListener('click',function(){
      var value = document.getElementById("text1").value;
      switch(value) {
      case "0":
      alert("0です");
      break;
      case "1":
      alert("1です");
      break;
      case "あ":
      break
      default:
      alert("なんでやねん");
      }
    });

    document.getElementById("confirm")
    .addEventListener('click',function(){
      var result = confirm("明日もまた見てくれるかな?");
      if (result == true) {
        alert("いいとも");
      } else {
        alert("駄目とも");
      }
    }) ;

  document.getElementById("prompt")
    .addEventListener('click',function(){
        var result = prompt("名前は？");
        alert("ようこそ" + result + "さん");
    });

    var b = document.getElementById("btn"); 
    b.addEventListener('click',function(){
    var p1 = document.getElementById("par1");
      p1.innerHTML = "ラガービール";
    });

      var p1 = document.getElementById("par1");
      console.log(p1.innerHTML);
      p1.innerHTML = "ねぇ";
      var clz = document.getElementsByClassName("p");
      console.log(clz[1].innerHTML);
      clz[1].innerHTML = "あはん";
      var tags = document.getElementsByClassName("p");
      console.log(clz[2].innerHTML);
      clz[2].innerHTML = "エッ";

    function changeString(message, msg2, msg3) {
        var p1 = document.getElementById("par1");
      p1.innerHTML = message;

      var p2 = document.getElementById("par2");
      p2.innerHTML = msg2;

      var p3 = document.getElementById("par3");
      p3.innerHTML= msg3;

    }

    var b = document.getElementById("btn");
    b.addEventListener('mouseover',function(){
      var p1 = document.getElementById("par1");
      p1.innerHTML = "澪";
    });
    var b = document.getElementById("btn");
    b.addEventListener('mouseout',function(){
      var p1 = document.getElementById("par1");
      p1.innerHTML = "プレミアムモルツ";
    });



    var btn = document.getElementById("btn");
    btn.addEventListener('click',function(){

    });