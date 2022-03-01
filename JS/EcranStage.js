$(function(){


    let frameExperiences=["main","Lilmod-Et-Lelamed","Centrale-Optique"];
      function frameStagevisible(nbr){
        
        for(let i=0;i<frameExperiences.length;i++){
          if (i ==nbr){  
            console.log("ok")
            $("."+frameExperiences[i]).css("display","flex");
            $("#urlChangeExp").val("https://www.Experiences-Ilan-Assouline.fr/"+frameExperiences[i])
          }else{
            $("."+frameExperiences[i]).css("display","none");
            
          }
        }
      }

    $(".retourenArriere").click(function(){frameStagevisible(0)})
    $(".card-stage:nth-child(1) button").click(function(){
        frameStagevisible(1)
    })
    $(".card-stage:nth-child(2) button").click(function(){
      frameStagevisible(2)
  })
})