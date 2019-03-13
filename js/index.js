$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(position) {
  var lat=position.coords.latitude; 
    var lon=position.coords.longitude;
  
    $("#btn").on("click", function() {
    var request=new XMLHttpRequest();
request.open('GET','https://api.weatherbit.io/v1.0/current?lat='+lat+'&lon='+lon+'&key=b7d9b2a2019348099468aaa806bf8edb'); 
 request.onload=function(){
  var data = JSON.parse(request.responseText);
    renderhtml(data);
 }
  request.send();
  function renderhtml(mydata){
  $("#test").html(mydata.data[0].weather.description);
  $("#city").html(mydata.data[0].city_name);   $("#dt").html(mydata.data[0].datetime);
    var tc=mydata.data[0].temp;
    $("#temp").html(tc+" C");
  var tf=((tc*9)/5)+32;
    if(tc<0&&tc<20){
      $("#img").html('<img src="http://tirezoo.com/wp-content/uploads/tire-pressure-adjust-in-mn-cold-weather.jpg">');
    }
   else if(tc>20&&tc<30){
      $("#img").html('<img src="https://weather.com/sites/all/modules/custom/angularmods/app/shared/wxicon/svgz/mostly-cloudy.svgz?1">');
    }
    else if(tc>30&&tc<50){
      $("#img").html('<img src="http://en.ammonnews.net/img/big/2012115big4941927.jpeg">');
    }
    $("#f").html("<button id='F' class='btn btn-danger'>Change to F</button>");
    $("#F").on("click",function(){
        $("#temp").html(tf+" F");
        $("#F").html("Change To C")
        $("#F").on("click",function(){
        $("#temp").html(tc+" C");
          $("#F").hide();
    });      
      });
    
  }
     
      });
     });
});