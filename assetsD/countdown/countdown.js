let date2 = new Date("2022/05/26 11:59:00");
updateTime();
function updateTime(){
var date1 = new Date()
var diff = (date2 - date1)/1000;

diff = Math.abs(Math.floor(diff));
var days = Math.floor(diff/(24*60*60));
var leftSec = diff - days * 24*60*60;

var hour = Math.floor(leftSec/(60*60));
var leftSec = leftSec - hour * 60*60;
       
var min = Math.floor(leftSec/(60));
var sec = leftSec - min * 60;

document.querySelector(".countdown").innerHTML = `<div class="row"><div class="col-3"><div class="number-wrap"><span class="number display-2"><b>${days}</b></span><span mbr-text="" class="period display-7">Days</span><span class="dot">:</span></div></div><div class="col-3"><div class="number-wrap"><span class="number display-2"><b>${hour}</b></span><span mbr-text="" class="period display-7">Hours</span><span class="dot">:</span></div></div><div class="col-3"><div class="number-wrap"><span class="number display-2"><b>${min}</b></span><span mbr-text="" class="period display-7">Minutes</span><span class="dot">:</span></div></div><div class="col-3"><div class="number-wrap"><span class="number display-2"><b>${sec}</b></span><span mbr-text="" class="period display-7">Seconds</span></div></div></div>`
   
setTimeout(updateTime,1000);
}