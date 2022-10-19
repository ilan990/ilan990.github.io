$(function(){
let frames=["frameMain","frameAccueil","frameEcranApplication","frameApplicationProjets","frameApplicationCV",'frameStage'];
let titleApplicationTop=[["Projets","CV","Expériences"],["Profil"]]
let imgApplication=[["https://img.icons8.com/color/48/000000/ms-edge-new.png","img/Applications/CV.png","img/Applications/safari.png"],["img/Applications/profil.png"]]
let frameAppBottom=["frameProfil"];

function framevisible(nbr){
  for(let i=0;i<frames.length;i++){
    if (i!=nbr){
      $("."+frames[i]).css("display","none");
      $("."+frameAppBottom[i]).css("display","none")
      
    }else{
      for(let j=0;j<frameAppBottom.length;j++){
        $("."+frameAppBottom[j]).css("display","none");
       
      }
      if(nbr=5){
        $(".main").css("display","flex");
        $(".Lilmod-Et-Lelamed, .Centrale-Optique").css("display","none");
      }
      $("."+frames[i]).css("display","flex");
      $("."+frameAppBottom[i]).css("display","none")
      
    }
  }
}

function framevisibleBottom(nbr){
  for(let i=0;i<frameAppBottom.length;i++){

    if (frameAppBottom[i]!=nbr){
      $("."+frameAppBottom[i]).css("display","none");
      

    }else{
      for(let j=0;j<frames.length;j++){
          $("."+frames[j]).css("display","none");
        }
      $("."+frameAppBottom[i]).css("display","flex");
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
for (let i=3;i<6;i++){
  $(".applicationsTop").append("<div class='application' id="+i+"><div class='application"+(i-3)+"'><img class='imgTop"+i+"' src='"+imgApplication[0][i-3]+"'/></div><div class='applicationTitle"+i+"'>"+titleApplicationTop[0][i-3]+"</div></div>")
}
for (let i=1;i<2;i++){
  $(".applicationsBottom").append("<div class='applicationBottom' id='"+frameAppBottom[i-1]+"'><div class='applicationB"+i+"'><img src='"+imgApplication[1][i-1]+"'/></div><div class='applicationBTitle"+i+"'>"+titleApplicationTop[1][i-1]+"</div></div>")
}

$(".application").click(function(){
  framevisible($(this).attr('id'));
})

$(".applicationBottom").click(function(){
  framevisibleBottom($(this).attr('id'));
})
})