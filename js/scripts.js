function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// window.onload = function () {
//
// var dps = []; // dataPoints
// var chart = new CanvasJS.Chart("#chartContainer") {
// 	title :{
// 		text: "Exchange Rate"
// 	},
// 	axisY: {
// 		includeZero: false
// 	},
// 	data: [{
// 		type: "line",
// 		dataPoints: dps
// 	}]
// });
//
// var xVal = 0;
// var yVal = 100;
// var updateInterval = 1000;
// var dataLength = 20; // number of dataPoints visible at any point
//
// var updateChart = function (count) {
//
// 	count = count || 1;
