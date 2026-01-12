var temc = document.getElementById("temc");
var temf = document.getElementById("temf");
var place=document.getElementById("place");
var whr = document.getElementById("whr");
var hum = document.getElementById("hum");
var uv = document.getElementById("uv");
var ws = document.getElementById("ws");
var vis = document.getElementById("vis");
var coun = document.getElementById("coun");
var reg = document.getElementById("reg");
var cld = document.getElementById("cld");
var stats = document.getElementById("stats");
var btn = document.getElementById("btn");
var icn= document.getElementById("icon");
var mode=document.getElementById("mode");
var bdy = document.getElementById("bdy");
var small = document.querySelectorAll("small");
function clk()
{
    if(mode.innerText=="🌙")
    {
        mode.innerText="☀️";
        bdy.style.backgroundColor ="#0B1D2A";
        small.forEach(function (sm) {
            sm.style.backgroundColor = "blanchedalmond";
        });
    }
    else
    {
        mode.innerText = "🌙";
        bdy.style.backgroundColor = "#FBF4EC";
        small.forEach(function (sm) 
        {
            sm.style.backgroundColor = "#d09b5f5f";
        });
    }
}
place.addEventListener("keydown" , function(event)
{
    if(event.key=="Enter")
    {
        getval();
    }
});
function getval()
{
  fetch(`https://api.weatherapi.com/v1/current.json?key=5ae55ff418f649529af25148253012&q=${place.value}`)
  .then( function(data)
  {
      return data.json();
  })
  .then(function(datajson)
  {
    stats.style.display="block";
    temc.innerHTML = `Temp'C : ${datajson.current.temp_c}`;
    coun.textContent=`Country : ${datajson.location.country}`;
    reg.textContent=`State : ${datajson.location.region}`;
    temf.textContent=`Temp'F : ${datajson.current.temp_f}`;
    whr.textContent=`Weather : ${datajson.current.condition.text}`;
    hum.textContent=`Humidity : ${datajson.current.humidity}%`;
    uv.textContent=`UV Index : ${datajson.current.uv}`;
    ws.textContent=`Wind : ${datajson.current.wind_kph}Km/h`;
    vis.textContent=`Visibility : ${datajson.current.vis_km}Km`;
    cld.textContent=`Clouds : ${datajson.current.cloud}%`;
    icn.src="https:"+datajson.current.condition.icon;
    place.value="";
    console.log(datajson);
    
})
    .catch(function (error) {

     alert("location not found in the dataset !");
        stats.style.display = "none";
    })
}
