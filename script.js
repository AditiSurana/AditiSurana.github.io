var weatherFunction;
var zip = null;
var url = null;
var begin = "http://api.wunderground.com/api/3c66a007095bbf8d/geolookup/conditions/q/";
var end = ".json"

function clickFunction(){

  zip = document.getElementById("zipcode").value;
  url = begin.concat(zip, end);
  
  //call jquery function - send url
  weatherFunction(url);

}


// jQuery(document).ready(function($) {
$().ready(function(){  

  weatherFunction = function(newUrl){
  console.log(url);  

  $.ajax({
  //url : "http://api.wunderground.com/api/3c66a007095bbf8d/geolookup/conditions/q/NY/New_York.json",
  url : newUrl,
  dataType : "jsonp",
  success : function(parsed_json) {

  // var location = parsed_json['location']['city'];
  

  var weather = parsed_json['current_observation']['weather']
  var temp_f = parsed_json['current_observation']['temp_f'];
  var precip = parsed_json['current_observation']['precip_today_in'];
  var text = null;

  if(weather == "Rain"){
  	text = "Hey, it might rain tomorrow but a little water shouldn&#39;t stop you from coming in!"
  }else if(temp_f < 60){
  	text = "It might be a little chilly out, but you can come sweat it out with us tomorrow - see you then!"

  }else if(temp_f > 70 && weather == "Sunny"){
  	text = "Suns out, Guns Out - lets make sure they’re showcase worthy, make sure you get that workout in"
  }else{
    text = "Great weather today. Come sweat it out with us."
  }
  
  $('<p>' + text + '</p>').appendTo('#notification');



    }
  });

  }

});