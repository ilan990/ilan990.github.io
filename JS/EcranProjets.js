$(function(){

    let frames=["frameMain","frameAccueil","frameEcranApplication","frameApplicationProjets"];
    let titleDisquette=["GSB SYMFONY","GSB JAVA","LA FLEUR","GLPI"];
    let explicationDisquette=["Création d'un CRUD permettant de gerer les visiteurs au seins d'une region en symfony","laboratoire pharmaceutique ayant besoin d'un logiciel pour organiser leurs données ","Création d'une boutique en ligne pour un fleuriste","Gestion du parc informatique avec un système de tickets"];
    let frameProjets=["gsbSymfony","gsbJava","laFleur","glpi","projetsMain"];
    function framevisible(nbr){
      for(let i=0;i<frames.length;i++){
        if (i!=nbr){
          $("."+frames[i]).css("display","none");
        }else{
          $("."+frames[i]).css("display","flex");
        }
      }
    }
    function frameProjetvisible(nbr){
      
      for(let i=0;i<frameProjets.length;i++){
        if (frameProjets[i]!=nbr){
          
          $("."+frameProjets[i]).css("display","none");
         
        }else{
          console.log("ok")
          $("."+frameProjets[i]).css("display","flex");
          $("#urlChange").val("https://www.projetIlanAssouline.fr/"+frameProjets[i])
        }
      }
    }
//Affichage des projets
for (let i=0;i<4;i++){
  $(".projets").append("<div id='"+frameProjets[i]+"' class='card frm'><div class='blocNoirDisquette'></div><div class='blocGrisDisquette'></div><div class='blocRougeEtBlancDisquette'><div class='blocRougeDisquette'>"+titleDisquette[i]+"</div><p>"+explicationDisquette[i]+"</p></div></div>")
}

$(".fleche-gauche").click(function(){frameProjetvisible("projetsMain")})
$(".fermerProjets").click(function(){framevisible(2);frameProjetvisible("projetsMain")})
$(".projets").children().click(function(){
      frameProjetvisible($(this).attr("id"));
})








})