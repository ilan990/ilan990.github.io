
$(function(){
//frm visible
let frames=["frameMain","frameAccueil","frameEcranApplication"];
    
function framevisible(nbr){
  for(let i=0;i<frames.length;i++){
    if (i!=nbr){
      $("."+frames[i]).css("display","none");
    }else{
      $("."+frames[i]).css("display","flex");
    }
  }
}
//Affichage de l'heure
setInterval(function() {
  var d = new Date();
  var hours=d.getHours();
  var minutes=d.getMinutes();
  if (hours<10){
    hours="0"+hours;
  }
  if (minutes<10){
    minutes="0"+minutes;
  }
  hours = hours + ":" + minutes ;
  $(".heure").text(hours)
}, 1000);


//points pour le mot de passe
for (let i=0;i<4;i++){
  $(".points").append("<div class='point point"+i+"'></div>")
}
 


//Numéros pour le mot de passe
for (let i=1;i<10;i++){
  $(".numbers").append("<div class='number number"+i+"'><p>"+i+"</p></div>")
}
$(".numbers").append("<div></div>")
$(".numbers").append("<div class='number number0'><p>0</p></div>")
  
//Fonction click s'occupant du mot de passe
let pointsModifier=0;
let valeurPoints=0
    $(".numbers").children().click(function(){
      if(this.textContent != ""){
          $(".point"+pointsModifier).css("background-color","white");
          valeurPoints+=this.textContent;
          pointsModifier+=1;
          if(pointsModifier==4){
            if(valeurPoints == 0){
                for (let i=0;i<5;i++){
                  $(".point"+i).css("background-color","green");
                }
                  framevisible(2);
                  $(".backgroundApplication").css("opacity","1");
              }else{
                    pointsModifier=0;
                    valeurPoints=0;
                    $( ".points" ).animate({
                      marginLeft: "2.5vw",
                    }, 100 )
                    $( ".points" ).animate({
                      marginLeft: "-2.5vw",
                    }, 100 )
                    $( ".points" ).animate({
                      marginLeft: "0vw",
                    }, 100 )
                   setTimeout(backgroundTransparent,100)
                   function backgroundTransparent(){
                      for(let i=0;i<4;i++){
                        $(".point"+i).css("background-color","transparent")
                      }
                    }                
                }                 
            }        
      }
    })
})
