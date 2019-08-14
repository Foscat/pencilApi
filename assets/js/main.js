console.log("connected");

var apiKey= "JKiMgGdrGyvXnjuFMa0fJagXhdYUFMBfkh5VnYHw";
var nasaUrl = "https://api.nasa.gov/planetary/apod?api_key="+apiKey;
var nasaNeo = "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key="+apiKey;

$.ajax({
    method: "GET",
    url: nasaUrl
}).then( res => {
    console.log(res);
    var image = res.hdurl;
    var explain = res.explanation;
    $("#row-top").append("<img id='space' src="+image+" />");
    $("#row-bottom").append("<p>"+ explain +"</p>");
    $("#col-left").append("<h4>Todays date is: "+ res.date +"</h4>");
    $("#col-right").append("<h3>Title: "+ res.title + "</h3>")
});
