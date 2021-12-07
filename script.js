$(function(){
    let viewportHeight,viewportWidth;
    $(window).resize(function() {
        resizeScreen();
        initDevicesFrame1();
       
      });

    //Redimensionne la taille de l'écran
    function resizeScreen(){
         viewportHeight = $(window).height();
         viewportWidth =  $(window).width();
         $(".accueil").css('width',viewportWidth+"px")
                      .css('height',viewportHeight+"px");
    }

    //Mise en place de l'application
    function initDevicesFrame1(){
      if(viewportWidth<viewportHeight){
         $('.tablette').css('width',(viewportWidth-viewportWidth*0.4)+"px")
                       .css('height',(viewportHeight-viewportHeight*0.45)+"px")
                       .css('margin',(viewportHeight-(viewportHeight-viewportHeight*0.25))/2+"px " +(viewportWidth-(viewportWidth-viewportWidth*0.4))/2+"px" );
      
      }else{
        $('.tablette').css('width',(viewportWidth-viewportWidth*0.55)+"px")
                      .css('height',(viewportHeight-viewportHeight*0.6)+"px")
                      .css('margin',(viewportHeight-(viewportHeight-viewportHeight*0.35))/2+"px " +(viewportWidth-(viewportWidth-viewportWidth*0.55))/2+"px" );
      }

     
    
    }
    resizeScreen();
    initDevicesFrame1();
})

















// $(".accueil").css("height",viewportHeight+"px");
//     $(".accueil").css("width",viewportWidth+"px");
//     $(".tablette").css("height",(viewportHeight-(viewportHeight*50/100))*0.7+"px");
//     $(".tablette").css("width",(viewportWidth-(viewportWidth*50/100))*0,7+ "px")
//     if(viewportWidth>450){
//     $(".tablette").css("width",(viewportWidth-(viewportWidth*50/100))+"px");
//     $(".tablette").css("margin",(viewportHeight-(viewportHeight*75/100))+ "px "+(viewportWidth-(viewportWidth*75/100))+ "px")
//     }else{
//     console.log("ok")
//     $(".tablette").css("width",(viewportWidth-(viewportWidth*40/100))+"px");
//     $(".tablette").css("margin",(viewportHeight-(viewportHeight*75/100))+ "px "+(viewportWidth-(viewportWidth*80/100))+ "px")}