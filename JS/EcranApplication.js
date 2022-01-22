$(function(){
let frames=["frameMain","frameAccueil","frameEcranApplication","frameApplicationProjets"];
let titleApplicationTop=["Projets","autre"]
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
  $(".notifications").text(hours)
}, 1000);

//Affichage des applications
for (let i=3;i<5;i++){
  $(".applicationsTop").append("<div class='application' id="+i+"><div class='application"+i+"'></div><div class='applicationTitle"+i+"'>"+titleApplicationTop[i-3]+"</div></div>")
}
for (let i=1;i<5;i++){
  $(".applicationsBottom").append("<div class='applicationBottom'><div class='applicationB"+i+"'></div><div class='applicationBTitle"+i+"'></div></div>")
}

$(".application").click(function(){
  framevisible($(this).attr('id'));
})

})