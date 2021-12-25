$(function(){

//Affichage de l'heure
let hours;
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
  $(".numbers").append("<div class='number number"+i+"'>"+i+"</div>")
}
  $(".numbers").append("<div></div>")
  $(".numbers").append("<div class='number number0'>0</div>")

})
