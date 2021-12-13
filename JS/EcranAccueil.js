$(function(){
let hours;
setInterval(function() {
  var d = new Date();
  hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(hours);
  $(".title1").text(hours)
}, 1000);

 
})
