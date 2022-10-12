$(function(){
    var slideShow = $("#slideShow");
    var imagesSrc = ["1.jpg", "2.jpg", "3.jpg"];
    $.each(imagesSrc,function(i,o){
        var image=$('<img>');
        image.attr("src","img/"+o);
        slideShow.append(image);
    })
    slideShow.find("img").eq(0).addClass("current");
  
    var j=0;
    //정해진 시간마다 함수(할일)를 실행
    setInterval(function(){
      slideShow.find("img").eq(j%imagesSrc.length).removeClass("current")
      slideShow.find("img").eq((j+1)%imagesSrc.length).addClass("current");
      j++;
    },1000)
})