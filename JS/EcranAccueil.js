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
                      .css('height',(viewportHeight-(viewportHeight*10)/100)+"px");
                      
    }

    //Mise en place de l'application
    function initDevicesFrame1(){
      if(viewportWidth<viewportHeight){
         $('.tablette').css('width',"2436px")
                       .css('height',"1125px")
        
      }else{
         $('.tablette').css('width',"820px")
                       .css('height',"980px")
       
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