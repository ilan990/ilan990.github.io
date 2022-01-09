$(function(){

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
for (let i=1;i<19;i++){
  $(".applicationsTop").append("<div class='application'><div class='application"+i+"'></div><div class='applicationTitle"+i+"'></div></div>")
}
for (let i=1;i<5;i++){
  $(".applicationsBottom").append("<div class='applicationBottom'><div class='applicationB"+i+"'></div><div class='applicationBTitle"+i+"'></div></div>")
}

})