jQuery(function($){
  $("#traverse2 button").on("click", function(){
    $(".blue_border").removeClass("blue_border");
  });

  $("#prev").on("click", function(){
    $("#traverse2 .saburo")
    .prev().addClass("blue_border");
  });

    $("#prevAll").on("click", function(){
     $("#traverse2 .saburo")
     .prevAll().addClass("blue_border");
  });

  $("#next").on("click", function(){
    $("#traverse2 .saburo")
    .next().addClass("blue_border");
  });

    $("#nextAll").on("click", function(){
    $("#traverse2 .saburo")
    .nextAll().addClass("blue_border");
  });

    $("#parent").on("click", function(){
    $("#traverse2 .saburo")
    .parent().addClass("blue_border");
  });

    $("#parents").on("click", function(){
    $("#traverse2 .saburo")
    .parents().fadeOut();
  });

    $("#children").on("click", function(){
    $("#traverse2 .saburo")
    .children().addClass("blue_border");
  });

    $("#siblings").on("click", function(){
    $("#traverse2 .saburo")
    .siblings().addClass("blue_border");
  });

    $("#closest").on("click", function(){
    $("#traverse2 .saburo")
    .closest("div").addClass("blue_border");
  });

    $("#find").on("click", function(){
      $("#traverse2 .saburo")
      .find("ul > li > ul > li")
      .addClass("blue_border");
    });

    $("#uncle").on("click", function(){
      $("#traverse2 .mago")
      .parent().parent().siblings()
      .addClass("blue_border");
    });


  $("#first").on("click", function(){
    $("#traverse1 li").css("font-weight", "bold")
      .first().css("color", "red");
  });
  $("#last").on("click", function(){
    $("#traverse1 li").css("font-weight", "normal")
    .last().css("color", "blue");
  });
    $("#eq").on("click", function(){
    $("#traverse1 li").css("font-style", "italic")
    .eq(-2).css("color", "green");
  });

  $("#empty-elem").on("click", function(){
    $("#remove li:first-child").empty();
  });
  $("#clone-elem").on("click", function(){
    $("#remove li:nth-child(2)")
    .clone().appendTo("#remove ul");
  });

  $("#remove > #remove-elem").on("click", function(){
    $("#remove .first").remove();
  });
  //   $("#remove > #restore-elem").on("click", function(){
  //     $("#remove > ul").prepend("<li>小池百合子</li>");
  // });

    $("#remove > #restore-elem").on("click", function(){
      if(!($("#remove .first").length)){
        $("#remove > ul").prepend("<li class='first'>小池百合子</li>");
      }
      });

  $("#append > #append-elem").on("click", function(){
    $("#append > ul").append("<li>森喜朗</li>");
  });
   $("#append > #prepend-elem").on("click", function(){
    $("#append > ul").prepend("<li>石原慎太郎</li>");
  }); 
   $("#append > #before-elem").on("click", function(){
    $("#append > ul").before("<li>政治家</li>");
  });
    $("#append > #after-elem").on("click", function(){
    $("#append > ul").after("<li>メンバー</li>");
  });
  $("#form2 > .get-check").on("click", function(){
    var checked = 
    $("#form2 > input:checkbox:checked")
    .map(function(){
      return $(this).val();
    }).toArray();
  // $("#form2 > .get-check").on("click", function(){
  //   var arr = $("#form2 > input:checkbox:checked");
  //   var checked = [];
  //   for(var i=0; i<arr.length; i++) {
  //     checked[i] = $(arr[i]).val();
  //   }
    alert(checked);
  });

  $("#form2 > .set-radio").on("click", function(){
    $("#form2 > input[name=radio3]").val(["ラジオ3"]);
  });

  $("#form2 > .get-radio").on("click", function(){var ret = $("#form2 > input[name=radio3]:checked").val();
    alert(ret);
  });

  $("#form2 > .get-text").on("click", function(){alert($("#form2 > #text3").val());
  });
  $("#form2 > .set-text").on("click", function(){
    $("#form2 > #text3").val("スミロン島");
  });

 $("#show-content").on("click", function(){
  var html = $("#content li").html();
  var text = $("#content li").text();
  alert(html + "\n" + text);
 });
 $("#set-content").on("click", function(){
  $("#taro3").html("<span style='color:red;'>のび太</span>");
  $("#jiro3").text("<span style='color:blue;'>スネ夫</span>");  
 });

 $("#offset").on("click",function(){
  $("#position > .box").offset({top: 50, left: 50});/*この#positionは、ただ他の.boxと区別するための親要素*/
 });

 $("#scroll-top").on("click",function(){
  // $(window).scrollTop(0);/*windowはjavaのオブジェクト。ブラウザを指す*/
  $("html,body").animate({scrollTop: 0}, "slow");
 });

 $("#width").on("click", function(){
  // $(".box").animate({width: "100%"}, "slow");
   // $(".box").width(200);
   var width = $(".box").width();
   var innerWidth = $(".box").innerWidth();
   var outerWidth = $(".box").outerWidth();/*()にtrueを入れるとmarginも含める*/
   console.log("width =" + width,
    "innerWidth = " + innerWidth,/*innerwidthはpaddingあり*/
    "outerWidth = " + outerWidth);/*outerwidthはborderもあり*/

 });
 $("#height").on("click", function(){
    // $(".box").height(200);
    $(".box").animate({height: 200}, 1000);
 });
 $("#add-class").on("click", function(){
  $("#hanako2").addClass("woman");
 });
 $("#remove-class").on("click",function(){
  $("#hanako2").removeClass("woman");
 });
 $("#toggle-class").on("click",function(){
  $("#hanako2").toggleClass("woman");
  var ret = $("#hanako2").hasClass("woman");
  var msg;
  if (ret) {
   msg = "花子は女です";
  } else {
   msg = "花子は女ではありません";
  }
  alert(msg);
 });


 $("#remove-attr").on("click", function(){
  $("#attr2 > a").removeAttr("title");
 });

 $("#get-attr").on("click", function(){
  alert($("#yahoo").attr("href"));/*attrはかっこ以下の中身を取ってくる*/
 });
 $("#set-attr").on("click",function(){
  $("#apple").attr("href", "http://www.apple.co.jp");/*引数にこの時には値を入れる*/
 });

  $("#check-value").on("click", function(){
   var checkedRadio = $("#form2 > input:checked").val();
   var selected = $("#form2 > select option:selected").val();
   alert(checkedRadio + " " + selected);
  });

  $("#form-filter").on("click", function(){
   $("#form > input:button")
   .css("background-color", "teal");
   $("#form > input:checkbox")
   .css("border", "1px solid lightsteelblue");
   $("#form > input:radio")
   .css("border", "1px solid orchid");
   $("#form > input:password")
   .css("background-color", "brown");
   $("#form > input:text")
   .css("background-color", "blue");
  });

  $("#empty").on("click", function(){
   $("#table td:empty")
    .css("background-color", "silver");
   $("table td:parent")
    .css("background-color", "springgreen");
  });

  $("#has").on("click", function(){
   $(".list4 > li:has(span)")
   .css("background-color", "yellowgreen");
  });  
  $("#contains").on("click", function(){
   $(".list4 > li:contains('郎')")
   .css("background-color", "peru");
  });

  $("#not").on("click", function(){
   $("a:not([href$='apple.co.jp']")
   .css("background-color", "fuchsia");
  });

  $("#point").on("click", function(){
   $(".list3 > li:eq(2)")
   .css("background-color", "aquamarine");   
   $(".list3 > li:gt(2)")/*３番目以降*/
   .css("background-color", "khaki");
   $(".list3 > li:lt(2)")/*三番目未満*/
   .css("background-color", "mistyrose");
  });

  $("#evenall").on("click", function(){
   $(".list3 > li:even")
   .css("background-color", "darkorange");
  });

  $("#oddall").on("click", function(){
   $(".list3 > li:odd")
   .css("background-color", "hotpink");
  });

  $("#alone").on("click", function(){
   $(".list3 > li:only-child")
   .css("background-color", "deepskyblue");
  });

  $("#nth-child2").on("click", function(){
   $(".list3 > li:nth-child(3n)")
   .css("background-color", "royalblue");
  });  
  $("#nth-child3").on("click", function(){
   $(".list3 > li:nth-child(3n+1)")
   .css("background-color", "gold");
  });

  $("#even").on("click", function(){
   $(".list3 > li:nth-child(even)")/*偶数*/
   .css("background-color", "forestgreen");
  });
  $("#odd").on("click", function(){
   $(".list3 > li:nth-child(odd)")/*奇数*/
   .css("background-color", "coral");
  });
/*nth-childは何番目*/
  $("#nth-child").on("click", function(){
   $(".list3 > li:nth-child(2)")
    .css("background-color", "red");
  });
  $(".list3").css("click", function(){
  // $(".list3 > li:first").css("background-color", "red"); /*上から見て一番最初のli*/
  // $(".list3 > li:first-child").css("background-color", "red");/*list3の最初の小要素*/
  // $(".list3 > li:last").css("background-color", "red");/*上から見て一番最後のli*/
  });


  $("#sazaesan").on("click", function(){
  $("#parents p").css("background-color", "red");/*parentsの小要素全部*/
  $("#parents > p").css("background-color", "red");/*parentsの中の一個の小要素たらちゃんには適用されない*/
  $("#child > h2 + p").css("background-color", "red");/*h2のとなり*/
  $("#child > h2 ~ p").css("background-color", "red");/*h2のとなりのpタグ全部*/
  });

  $("#find-cat").on("click", function(){
  // $("input[name$='rse']").css("background-color", "red"); 
  $("input[name=cat]", "#cats").css("background-color", "red");/*引数の右が親要素*/
  // $("input[name^='do']").css("background-color", "red"); 
  // $("input[name~='cat']").css("background-color", "red"); 
  // $("input[name*='cat']").css("background-color", "red"); 
  // $("input[name=catman][type=text]").css("background-color", "red"); 
  });
  /* *=は部分一致 */
  /* ~=は完全一位 */
  /* ^=は先頭から始まるもの*/
  /* $=は後方一致*/

  $("a").on("click", function(){
   $("a[target!='_blank']").css("border", "2px solid red");/* !はそれ以外*/
   $("a[target]").css("color", "aqua");
  // $("a[target='_blank']").css('color',"pink");
  // $("a[target='_self']").css('color',"red");
  // $("a[target='_parent']").css('color',"blue");
  // $("a[target='_top']").css('color',"green");
  });

  $(".universal").on("click", function(){
  $("*").css("color","gold");
  });

  $("#list2").on("click", function(){
  $(".taro, .hanako").css("color", "purple");
  });

  $("ul").click(function(){
  $(".man").css("color", "green");
  $("#taro").css("color", "blue");
  });
  /*基本はon(click)でかく。clickだと後から追加された要素に適用されない。*/

  $("h2").on("click", function(){
  $("h2").css("color", "red");
  });
  /*thisはクリックされた要素自身*/
  $("#add-link").on("click", function(){
   $("<a></a>",
    {href: "http://www.apple.com",
     target: "_blank",
     "class": "myClass", text: "リンク"
    }).appendTo("#link");

   $("<div>", {
    width: "300",
    height: "35",
    text: "うんちょこちょこちょこぴーうんちょこちょこちょこぴー",
    css: {backgroundColor: "pink",lineHeight: '1em'},
    on: {
     mouseover: function(){
      $(this).css({backgroundColor: 'black',color: 'white'});
     }
    }
   }).appendTo("#koko");
  });

   // document.getElementById("append").addEventLisner("click",function(){})と一緒
   $("#append").on("click", function(){
    console.log(document.getElementById("family"));
    console.log($("#family"));
    $("<li>三郎</li>").appendTo("#family");
    // var li = document.createElement("li");
    // li.innerHTML = "三郎"
    // document.getElementById("family").appendchild(li);と同じ 
   });

   $("#color").on('click',function(){
    $("li").css(
     {"color": "red","background-color": "blue","font-size": "30px"})
    .css("border", "3px solid green").fadeOut();
    }); 
});