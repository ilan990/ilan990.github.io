$(function(){


    let frameExperiences=["main","Lilmod-Et-Lelamed","Centrale-Optique"];
      function frameStagevisible(nbr){
        
        for(let i=0;i<frameExperiences.length;i++){
          if (i ==nbr){  
            $("."+frameExperiences[i]).css("display","flex");
            $("#urlChangeExp").val("https://www.Experiences-Ilan-Assouline.fr/"+frameExperiences[i])
            if(i==0){
              $('.retourenArriere').attr('src','img/Projets/fleches-gauche-gris.png');
            }else{
              $('.retourenArriere').attr('src','img/Projets/fleches-gauche.png');
            }
          }else{
            $("."+frameExperiences[i]).css("display","none");
            
          }
        }
      }

    $(".retourenArriere").click(function(){frameStagevisible(0)})
    $(".card-stage:nth-child(1)").click(function(){
        frameStagevisible(1)
    })
    $(".card-stage:nth-child(2)").click(function(){
      frameStagevisible(2)
  })
})