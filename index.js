// alert("Covid19")


var data = document.querySelector(".info");
var dataCases = document.querySelector(".infoCases");
var dataDeath = document.querySelector(".infoDeath");
var dataRecoverd = document.querySelector(".infoRecov");

var button = document.querySelector(".btn");

button.addEventListener("click", showData);

function showData(){
  // alert("here we go")
  fetch("https://api.covid19api.com/summary")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    console.log(data.Global.TotalConfirmed);
    console.log(data.Global.TotalDeaths);
    console.log(data.Global.TotalRecovered);
    dataCases.innerText = data.Global.TotalConfirmed;
    dataDeath.innerText = data.Global.TotalDeaths;
    dataRecoverd.innerText = data.Global.TotalRecovered;


  })
}
