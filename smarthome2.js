const firebaseConfig = {
  apiKey: "AIzaSyDPYEo-0iFcIQb0sE3nr9PzYT9yO_sGsW8",
  authDomain: "tt-iot-e73f6.firebaseapp.com",
  databaseURL: "https://tt-iot-e73f6-default-rtdb.firebaseio.com",
  projectId: "tt-iot-e73f6",
  storageBucket: "tt-iot-e73f6.appspot.com",
  messagingSenderId: "689884482105",
  appId: "1:689884482105:web:9244fb0a915a3f76aadbe8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//////////////////Cap nhat nhiet do/////////////////////////////
firebase.database().ref("/Phong Bep/Temp").on("value", function(snapshot){
  var Temp = snapshot.val();
  setGaugeValue2(gaugeElement2, Temp);
  document.getElementById("nhietdo").innerHTML = Temp;
  console.log(Temp);
});
/////////////////Cap nhat do am////////////////////////////////
firebase.database().ref("/Phong Bep/Humi").on("value", function(snapshot){
var Humi = snapshot.val();
setGaugeValue(gaugeElement, Humi);
document.getElementById("doam").innerHTML = Humi;
console.log(Humi);
});
/////////////////Cap nhat gas////////////////////////////////
firebase.database().ref("/Phong Bep/Gas").on("value", function(snapshot){
var Gas = snapshot.val();
setGaugeValue3(gaugeElement3, Gas);
document.getElementById("gas").innerHTML = Gas;
console.log(Gas);
});
/////////////////Cap nhat anh sang////////////////////////////////
firebase.database().ref("/Phong Bep/LightSensor").on("value", function(snapshot){
var Light = snapshot.val();
setGaugeValue4(gaugeElement4, Light);
document.getElementById("anhsang").innerHTML = Light;
console.log(Light);
});
/////////////////Cap nhat count////////////////////////////////
firebase.database().ref("/Phong Khach/count").on("value", function(snapshot){
var count1 = snapshot.val();
document.getElementById("count").innerHTML = count1;
});


////////////////////////////Hàm xoay gauge//////////////////////////////////  
const gaugeElement = document.querySelector(".gauge");
const gaugeElement2 = document.querySelector(".gauge2");
const gaugeElement3 = document.querySelector(".gauge3");
const gaugeElement4 = document.querySelector(".gauge4");


function setGaugeValue(gauge, value){
gauge.querySelector(".gauge-fill").style.transform = `rotate(${value / 200}turn)`;
gauge.querySelector(".gauge-cover").textContent = `${value}%`;
}
function setGaugeValue2(gauge, value){
gauge.querySelector(".gauge-fill2").style.transform = `rotate(${value / 100}turn)`;
gauge.querySelector(".gauge-cover2").textContent = `${value} độ C`;
}
function setGaugeValue3(gauge, value){
gauge.querySelector(".gauge-fill3").style.transform = `rotate(${value / 9200}turn)`;
gauge.querySelector(".gauge-cover3").textContent = `${value}`;
}
function setGaugeValue4(gauge, value){
gauge.querySelector(".gauge-fill4").style.transform = `rotate(${(4096-value) / 9200}turn)`;
gauge.querySelector(".gauge-cover4").textContent = `${4096-value}`;
}

/////////////////////////////////////Toggle Button/////////////////////////////////////////
$(document).ready(function(){
var database = firebase.database();
var bath;
var phone;
var tv;
var bed;
var fan;
database.ref("/Phong Bep").on("value", function(snap){
bath = snap.val().bath;
phone = snap.val().phone;
tv = snap.val().tv;
bed = snap.val().bed;
fan = snap.val().fan;
if(bath == "1"){
document.getElementById("unact").style.display = "none";
document.getElementById("act").style.display = "block";
} else {
document.getElementById("unact").style.display = "block";
document.getElementById("act").style.display = "none";
}
if(phone == "1"){
document.getElementById("unact1").style.display = "none";
document.getElementById("act1").style.display = "block";
} else {
document.getElementById("unact1").style.display = "block";
document.getElementById("act1").style.display = "none";
}
if(tv == "1"){
document.getElementById("unact2").style.display = "none";
document.getElementById("act2").style.display = "block";
} else {
document.getElementById("unact2").style.display = "block";
document.getElementById("act2").style.display = "none";
}
if(bed == "1"){
document.getElementById("unact3").style.display = "none";
document.getElementById("act3").style.display = "block";
} else {
document.getElementById("unact3").style.display = "block";
document.getElementById("act3").style.display = "none";
}
if(fan == "1"){
  document.getElementById("unact4").style.display = "none";
  document.getElementById("act4").style.display = "block";
  } else {
  document.getElementById("unact4").style.display = "block";
  document.getElementById("act4").style.display = "none";
  }
});
                            
$(".toggle-btn").click(function(){
var firebaseRef = firebase.database().ref().child("/Phong Bep/bath");
if(bath == "1"){
firebaseRef.set("0");
bath = "0";
} else {
firebaseRef.set("1");
bath = "1";
}
})
$(".toggle-btn1").click(function(){
var firebaseRef = firebase.database().ref().child("/Phong Bep/phone");
if(phone == "1"){
firebaseRef.set("0");
phone = "0";
} else {
firebaseRef.set("1");
phone = "1";
}
})
$(".toggle-btn2").click(function(){
var firebaseRef = firebase.database().ref().child("/Phong Bep/tv");
if(tv == "1"){
firebaseRef.set("0");
tv = "0";
} else {
firebaseRef.set("1");
tv = "1";
}
})
$(".toggle-btn3").click(function(){
var firebaseRef = firebase.database().ref().child("/Phong Bep/bed");
if(bed == "1"){
firebaseRef.set("0");
bed = "0";
} else {
firebaseRef.set("1");
bed = "1";
}
})
$(".toggle-btn4").click(function(){
  var firebaseRef = firebase.database().ref().child("/Phong Bep/fan");
  if(fan == "1"){
  firebaseRef.set("0");
  fan = "0";
  } else {
  firebaseRef.set("1");
  fan = "1";
  }
  })
});
//---------------------Slider--------------------------                          
const slide_value=document.querySelector("span");
const input_slide_value=document.querySelector("input");

input_slide_value.oninput = (()=>{
let value = input_slide_value.value;
firebase.database().ref("/Phong Bep").update({
Vol: value
});
slide_value.textContent = value;
slide_value.style.left = (value/2) + "%";
});
firebase.database().ref('/Phong Bep/Vol').on('value', (snapshot) => {
const fb_value = snapshot.val();
if (fb_value !== null) {
slide_value.textContent = fb_value;
slide_value.style.left = (fb_value / 2) + "%";
input_slide_value.value=fb_value;
}
});                          
//Clock
let hrs = document.getElementById("hrs");  
let min = document.getElementById("min");
let sec = document.getElementById("sec");  

setInterval(() => {
let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
},1000);

