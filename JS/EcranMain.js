$(function(){
    let viewportHeight,viewportWidth;
    let frames=["frameMain","frameAccueil"]
    $(window).resize(function() {
        resizeScreen();
        initDevicesFrame1();
       
      });
    
    function framevisible(nbr){
        for(let i=0;i<frames.length;i++){
          if (i!=nbr){
            $("."+frames[i]).css("display","none");
          }else{
            $("."+frames[i]).css("display","flex");
          }
        }
      }
    //Redimensionne la taille de l'écran
    function resizeScreen(){
         viewportHeight = $(window).height();
         viewportWidth =  $(window).width();
         $(".frameMain").css('width',viewportWidth+"px")
                      .css('height',(viewportHeight-(viewportHeight*10)/100)+"px");
        $('.backgroundAccueil').css("width",viewportWidth+"px");
        $('.backgroundAccueil').css("height",viewportHeight+"px");
        
                      
    }
    //Mise en place de l'application
    function initDevicesFrame1(){
      
      if(viewportWidth<viewportHeight){
         $('.tablette').css('width',"2436px")
                       .css('height',"1125px")
        
      }else{
         $('.tablette').css('width',"820px")
                       .css('height',"980px")
       
        }}
    
    $(".play").click(function(){ 
      $(".play").css('display','none');
      $(".tablette").addClass('animate');
      $(".tablette").css("border","0px");
      setTimeout(function(){
        framevisible(1);
        $(".backgroundAccueil").css("opacity","1");
      }, 2000);
      
    })

    resizeScreen();
    initDevicesFrame1();
})
