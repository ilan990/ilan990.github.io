$(function(){
let frames=["frameMain","frameAccueil","frameEcranApplication","frameApplicationProjets"];
let titleApplicationTop=["Projets","CV"]
let imgApplication=["https://img.icons8.com/color/48/000000/ms-edge-new.png","https://img.icons8.com/material-rounded/48/000000/file--v2.png"]
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
  $(".notifications").append("<img class='imgWifi' src='img/Projets/wifi.png' alt='logo du wifi'>")
  $(".notifications2").text(hours)
  $(".notifications2").append("<img class='imgWifi' src='img/Projets/wifi.png' alt='logo du wifi'>")
}, 1000);

//Affichage des applications
for (let i=3;i<5;i++){
  $(".applicationsTop").append("<div class='application' id="+i+"><div class='application"+i+"'><img src='"+imgApplication[i-3]+"'/></div><div class='applicationTitle"+i+"'>"+titleApplicationTop[i-3]+"</div></div>")
}
for (let i=1;i<5;i++){
  $(".applicationsBottom").append("<div class='applicationBottom'><div class='applicationB"+i+"'></div><div class='applicationBTitle"+i+"'></div></div>")
}

$(".application").click(function(){
  framevisible($(this).attr('id'));
})

})