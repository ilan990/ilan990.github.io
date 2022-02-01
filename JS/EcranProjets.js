$(function(){

    let frames=["frameMain","frameAccueil","frameEcranApplication","frameApplicationProjets"];
    function framevisible(nbr){
      for(let i=0;i<frames.length;i++){
        if (i!=nbr){
          $("."+frames[i]).css("display","none");
        }else{
          $("."+frames[i]).css("display","flex");
        }
      }
    }
$(".fermerProjets").click(function(){
    framevisible(2);
})





})